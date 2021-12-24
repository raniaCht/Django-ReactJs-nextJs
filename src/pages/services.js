import Layout from "../hocs/Layout"
import CardService from "../components/card-service";
import { useSelector, useDispatch } from "react-redux";
import { SERVER_URL } from "../config/index";
import fetch from 'node-fetch';
import { SearchBox } from "../components/search-box";
import { useState } from "react";
import { SearchLocation } from "../components/search-location";

export default function Services(props) {
  const [services, setServices] = useState(props.services)
  const [location, setLocation] = useState("")
  const handleSearch = (term) => {
    fetch('/api/service/search', {
      method: "POST",
      body: JSON.stringify({
        term
      })
    }).then((res) => res.json())
      .then(setServices)
      .catch(console.log)
  }



  return (
    <Layout
      title="Dz Fêtes | Services"
      content=""
    >
      <div className="services">
        <div className="services__container">
          <h1 className="services__title">The Services</h1>
          <SearchBox onSearch={handleSearch} />
          <SearchLocation location={location} onChange={setLocation} />
          <div className="services__list">
            {services.map(item => <CardService item={item} />)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${SERVER_URL}/api/service/list`, {
      method: 'GET'
    });
    const json = await data.json();
    return {
      props: {
        services: json,
      },
    };
  } catch (err) {
    return {
      props: {
        services: [],
      },
    };
  }
};