import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! I'm Barış. A passionate web developer and I'm trying Next.js now.</p>
        <p>You can contact me on <a href="https://twitter.com/baristure_" target="_blank">Twitter</a> or <a href="https://www.linkedin.com/in/baristure/" target="_blank">LinkedIn</a></p>
      </section>
    </Layout>
  )
}