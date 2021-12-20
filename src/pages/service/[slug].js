import Layout from "../../hocs/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SERVER_URL } from '../../config/index'
import cookie from 'cookie';

const Service = () => {
    const [service, setService] = useState({})
    const router = useRouter();
    const { slug } = router.query
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const api = await fetch(`/api/service/${slug}`, {
                    method: "GET",
                })
                const data = await api.json()
                setService(data)
                if (api.status === 403) {
                    router.push("/login");
                }
                if (api.status === 404) {
                    router.push("/404");
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyAPI()
    }, []);
    const title = service?.title ? `${service.title}` : "Service";

    return (
        <Layout
            title={`Dz Fêtes | ${title}`}
            content=""
        >
            <div className="service-detail">
                <div className="service-detail__header">
                    <div className="image-border">
                        <img src={service.photo_main} />
                    </div>
                </div>
                <div className="service-detail__body">
                    <h2>{title}</h2>
                    <h3>{service.price}DA <span>/{service.unit_price}</span></h3>
                    <p>{service.description}</p>
                    <div className="gallery">

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Service;