import { API_URL } from '../../../config/index';
export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            const apiRes = await fetch(`${API_URL}/services/`, {
                method: 'GET',
            });

            const data = await apiRes.json();

            if (apiRes.status === 200) {
                return res.status(200).json(data);
            } else {
                return res.status(apiRes.status).json({
                    error: 'Getting the services failed'
                });
            }
        }
        catch (e) {
            console.log('wrong');
            return res.status(500).json({
                error: 'something going wrong'
            });
        }
    }
}