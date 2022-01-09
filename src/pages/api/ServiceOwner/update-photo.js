import cookie from 'cookie';
import { API_URL } from '../../../config/index';
import formidable from 'formidable';
import FormData from 'form-data'

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async (req, res) => {
    if (req.method === 'PUT') {
        try {
            const cookies = cookie.parse(req.headers.cookie ?? '');
            const access = cookies.access ?? false;
            if (access === false) {
                return res.status(403).json({
                    error: 'User forbidden from making the request'
                });
            }
            const form = formidable({
                multiples: true
            });
            new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (!err) {
                        req.body = fields;
                        req.files = files;
                        console.log(req.body.length);
                        const data = new FormData();
                        data.append('photo', req.body['photo'])
                        resolve(data)
                    } else {
                        reject((err) => { return res.status(500).json({ error: err }) })
                    }
                });
            }).then(
                async (data) => {
                    const apiRes = await fetch(`${API_URL}/ServiceOwners/update-photo/`, {
                        method: 'PUT',
                        headers: {
                            'Authorization': `Bearer ${access}`,
                            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                        },
                        body: data
                    })
                    const dataJson = await apiRes.json();
                    if (apiRes.status === 200) {
                        return res.status(200).json(dataJson);
                    } else {
                        return res.status(apiRes.status).json({
                            error: dataJson.error
                        });
                    }
                }
            )
        } catch (err) {
            return res.status(500).json({
                error: 'Something went wrong when authenticating'
            });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        return res.status(405).json({ error: `Method ${req.method} now allowed` });
    }
};