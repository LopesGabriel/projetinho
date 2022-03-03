import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projetinho</title>
        <meta name="description" content="Projetinho é um app para competir com seus amigos e uma forma de incentivo à atividades físicas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hi</h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
