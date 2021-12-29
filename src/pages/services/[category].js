import fetch from "node-fetch"
import { API_URL } from "../../config"
import Layout from "../../hocs/Layout"
import { fetchApi } from "../../components/search-components";
import CardService from "../../components/card-service";
import { SearchBox } from "../../components/search-box";
import { useState } from "react";

export default function ServicesCategory({ services, title }) {
    const [servicesCat, setServices] = useState(services)
    const location = "All Willaya"
    const handleSearch = (term) => {
        fetchApi(term, location, title, setServices)
    }
    return (
        <Layout
            title={`Dz Fêtes | ${title}`}
            content=""
        >
            <div className="services">
                <div className="services__container">
                    <h1 className="services__title">{title}</h1>
                    <div className="services__search">
                        <SearchBox onSearch={handleSearch} />
                    </div>
                    <div className="services__list">
                        {servicesCat.length ? servicesCat.map(item => <CardService item={item} />) : <h1>There are no services</h1>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async ({ params }) => {
    try {
        console.log(params.category);
        const data = await fetch(`${API_URL}/services/search?type=${params.category}`)
        const json = await data.json()
        return {
            props: {
                services: json,
                title: params.category,
            },
        }
    } catch (error) {
        return {
            props: {
                services: [],
                title: params.category,
            },
        }
    }
}