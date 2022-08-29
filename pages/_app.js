import Layout from '../components/Layout';

export default function Home({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  )
}

