import "../app/public/app.css"

import Layout from "@components/Layout"

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App