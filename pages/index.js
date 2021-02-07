import Head from 'next/head'
import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />

      <h1>Hello NextJS</h1>
      <p>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. </p>
    </div>
  )
}
