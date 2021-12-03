import Layout from '../hocs/Layout';

export default function Home() {
  return (
    <Layout
      title='DZ Fêtes | Home'
      content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
      <div className='p-5 bg-light rounded-3'>
        <div className='container-fluid py-3'>
          <h1 className='display-5 fw-bold'>Home Page</h1>
          <p className='fs-4 mt-3'>
            Welcome to the Dz Fêtes Site!
          </p>
        </div>
      </div>
    </Layout>
  )
}
