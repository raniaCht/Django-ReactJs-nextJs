import { API_URL } from '../../../config/index';

export default async (req, res) => {
    if (req.method === 'POST') {
        const {
            uid,
            token
        } = req.body;

        const body = JSON.stringify({
            uid,
            token
        });

        try {
            const apiRes = await fetch(`${API_URL}/auth/users/activation/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            });


            if (apiRes.status === 204) {
                return res.status(204).json({ success: "Your account has been activated" });
            } else {
                return res.status(apiRes.status).json({
                    error: "Invalid user id or user doesn't exist."
                });
            }
        } catch (err) {
            return res.status(500).json({
                error: 'Something went wrong when registering for an account'
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} now allowed` });
    }
};