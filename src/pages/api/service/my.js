import cookie from 'cookie';
import { API_URL } from '../../../config/index';

export default async (req, res) => {
    console.log('req.method' + req.method)
    if (req.method === 'POST') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;
        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }
        try {
            const apiRes = await fetch(`${API_URL}/services/my-postes/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${access}`
                }
            });
            const data = await apiRes.json();

            if (apiRes.status === 200) {
                return res.status(200).json(data);
            } else {
                return res.status(apiRes.status).json({
                    error: data.error,
                });
            }
        } catch (err) {
            return res.status(500).json({
                error: 'Something went wrong when retrieving user'
            });
        }
    } else {
        if (req.method === 'DELETE') {
            const cookies = cookie.parse(req.headers.cookie ?? '');
            const access = cookies.access ?? false;
            if (access === false) {
                return res.status(401).json({
                    error: 'User unauthorized to make this request'
                });
            }
            try {
                console.log(req.body);
                const apiRes = await fetch(`${API_URL}/services/my-postes/`, {
                    method: 'DELETE',
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
                    return res.status(apiRes.status).json({
                        error: data.error,
                    });
                }
            } catch (err) {
                return res.status(500).json({
                    error: 'Something went wrong when retrieving user'
                });
            }
        } else {
            if (req.method === 'PUT') {
                const cookies = cookie.parse(req.headers.cookie ?? '');
                const access = cookies.access ?? false;
                if (access === false) {
                    return res.status(401).json({
                        error: 'User unauthorized to make this request'
                    });
                }
                try {
                    console.log(req.body);
                    const apiRes = await fetch(`${API_URL}/services/my-postes/`, {
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
                        return res.status(apiRes.status).json({
                            error: data.error,
                        });
                    }
                } catch (err) {
                    return res.status(500).json({
                        error: 'Something went wrong when update this poste'
                    });
                }
            } else {
                // res.setHeader('Allow', ['GET']);
                return res.status(405).json({
                    error: `Method ${req.method} not allowed`
                });
            }
        }
    }
};