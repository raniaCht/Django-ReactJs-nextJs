import Button from '@mui/material/Button';
import Layout from '../hocs/Layout'
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()

    const onClick = (e) => {
        router.push('/dashboard')
    }

    return (
        <Layout
            title="Dz Fêtes | Page not found"
            content=""
        >
            <div className="notFound">
                <div className='notFound__img'>
                    <img src='/img_404.svg' alt="" />
                </div>
                <h1 className='notFound__heading'>404 Not Found</h1>
                <p className='notFound__paragraph'>The link you requested does not exist on our website.</p>
                <Button variant="outlined" onClick={onClick} color='secondary'>
                    Go to Home
                </Button>
            </div>
        </Layout>
    )
}

export default NotFound