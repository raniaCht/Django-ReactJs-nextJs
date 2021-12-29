import Layout from "../hocs/Layout"
import CardService from "../components/card-service";
import { useSelector, useDispatch } from "react-redux";
import { SERVER_URL } from "../config/index";
import fetch from 'node-fetch';
import { SearchBox } from "../components/search-box";
import { useState } from "react";
import { SearchLocation } from "../components/search-location";
import { SearchCategory } from "../components/search-category"
import { fetchApi } from "../components/search-components";

export default function Services(props) {
  const [services, setServices] = useState(props.services)
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState('')

  const handleSearch = (term) => {
    fetchApi(term, location, category, setServices)
  }

  const onChangeLocation = (e) => {
    let term = ""
    setLocation(e.target.value)
    fetchApi(term, e.target.value, category, setServices)
  }

  const onChangeCategory = (e) => {
    let term = ""
    setCategory(e.target.value)
    fetchApi(term, location, e.target.value, setServices)
  }

  return (
    <Layout
      title="Dz Fêtes | Services"
      content=""
    >
      <div className="services">
        <div className="services__container">
          <h1 className="services__title">The Services</h1>
          <div className="services__search">
            <SearchBox onSearch={handleSearch} />
            <div className="services__search__select">
              <SearchLocation location={location} onChange={onChangeLocation} />
              <SearchCategory category={category} onChange={onChangeCategory} />
            </div>
          </div>
          <div className="services__list">
            {services.length ? services.map(item => <CardService item={item} />) : <h1>There are no services</h1>}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  try {
    console.log(context);
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