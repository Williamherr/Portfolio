import '../styles/globals.css'
import Layout from '../Components/Layouts/Layout'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
        <NextNProgress></NextNProgress>
      <Component {...pageProps} />
    </Layout>
  )
 
}

export default MyApp
