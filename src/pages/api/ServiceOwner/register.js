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
    if (req.method === 'POST') {
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
                        const data = new FormData();
                        data.append('name', req.body['name'])
                        data.append('photo', req.body['photo'])
                        data.append('email', req.body['email'])
                        data.append('phone', req.body['phone'])
                        data.append('description', req.body['description'])
                        resolve(data)
                    } else {
                        reject((err) => { return res.status(500).json({ error: err }) })
                    }
                });
            }).then(
                async (data) => {
                    const apiRes = await fetch(`${API_URL}/ServiceOwners/register/`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${access}`,
                            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                        },
                        body: data
                    })
                    console.log(apiRes.status)
                    const dataJson = await apiRes.json();
                    if (apiRes.status === 201) {
                        return res.status(201).json({ success: dataJson.success });
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
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} now allowed` });
    }
};