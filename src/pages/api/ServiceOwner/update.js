import cookie from 'cookie';
import { API_URL } from '../../../config/index';

export default async (req, res) => {
    if (req.method === "PUT") {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;
        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }
        try {
            const apiRes = await fetch(`${API_URL}/ServiceOwners/update-info/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access}`
                },
                body: JSON.stringify(req.body)
            });
            const data = await apiRes.json();

            if (apiRes.status === 200) {
                return res.status(200).json(data);
            } else {
                if (apiRes.status === 400) {
                    return res.status(400).json({ error: data });
                }
            }
        } catch (err) {
            return res.status(500).json({
                error: 'Something went wrong when retrieving user'
            });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        return res.status(405).json({
            error: `Method ${req.method} not allowed`
        });
    }
}