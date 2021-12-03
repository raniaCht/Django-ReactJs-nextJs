import Head from 'next/head';
import Navbar from '../components/Navbar';
import CustomDrawer from '../components/drawer';

const Layout = ({ title, content, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
            </Head>
            <Navbar />
            <CustomDrawer />
            <div className='container mt-5'>
                {children}
            </div>
        </>
    );
};

Layout.defaultProps = {
    title: 'DZ Fêtes',
    content: '....'
}

export default Layout;