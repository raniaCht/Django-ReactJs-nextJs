import { API_URL } from "../../../config";

export default async ({ body, method }, res) => {
    if (method == "POST") {
        try {
            const { term, wilaya, type } = JSON.parse(body)
            let query = ""
            if (term) {
                query += `&search=${term}`
            }
            if (wilaya) {
                query += `&location=${wilaya.replace(" ", "+")}`;
            }
            if (type) {
                if (type == -1) {
                    query += `&type=`;
                } else {
                    query += `&type=${type.replace(" ", "+")}`;
                }
            }
            if (query.length) {
                query = query.substring(1)
            }
            const data = await fetch(`${API_URL}/services/search?${query}`)
            const json = await data.json()
            return res.status(200).json(json)
        } catch (err) {
            return res.status(500).json({
                error: err
            })
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${method} now allowed` });
    }
}