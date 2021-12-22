import Layout from "../hocs/Layout"
import CardService from "../components/card-service";
import { useSelector, useDispatch } from "react-redux";
import { SERVER_URL } from "../config/index";
import fetch from 'node-fetch';
import SearchIcon from '@material-ui/icons/Search';
import { Search, StyledInputBase, SearchIconWrapper } from '../components/search-components'
import { Button } from "@mui/material";

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
          <div className="services__search">
            <Search className="services__search__input">
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Button type='submit' variant="outlined" color='secondary'>
              <SearchIcon />
            </Button>
          </div>
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