import Layout from "../hocs/Layout"
import CardService from "../components/card-service";
import { useSelector, useDispatch } from "react-redux";
import { SERVER_URL } from "../config/index";
import fetch from 'node-fetch';

export default function Services(props) {
  const loading = useSelector(state => state.auth.loading)

  return (
    <Layout
      title="Dz Fêtes | Services"
      content=""
    >
      <div className="services">
        <div className="services__container">
          <h1 className="services__title">The Services</h1>
          <div className="services__list">
            {props.services.map(item => <CardService item={item} />)}
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