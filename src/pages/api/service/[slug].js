import cookie from 'cookie';
import { API_URL } from '../../../config/index';

export default async (req, res) => {
    if (req.method === 'GET') {
        try{
            const cookies = cookie.parse(req.headers.cookie ?? '');
            const access = req.cookies.access ?? false;
            if (access === false) {
                return res.status(403).json({
                    error: 'User forbidden from making the request'
                });
            } else {
                try {
                    const { slug } = req.query;
                    const data = await fetch(`${API_URL}/services/${slug}`, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${access}`
                        }
                    });
                    const json = await data.json();
                    return res.status(200).json(json);
                } catch (err) {
                    return res.status(data.status).json({
                        error: json.error
                    });
                }
            }
        }catch(err){
            return res.status(500).json({
                error: 'Something went wrong'
            });
        }
    }else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ error: `Method ${req.method} now allowed` });
    }
}