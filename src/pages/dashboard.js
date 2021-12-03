import React from "react"
import Layout from '../hocs/Layout';
import { useSelector, useDispatch } from 'react-redux';

const Dashboard = () => {
    return (
        <Layout
            title='httpOnly Auth | Home'
            content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
        >
            welcome to dashboard
        </Layout>
    )
}
export default Dashboard