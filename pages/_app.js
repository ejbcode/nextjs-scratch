import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <h1>Title</h1>
        <Component {...pageProps} />  
    </Layout>
  )
}

export default MyApp
