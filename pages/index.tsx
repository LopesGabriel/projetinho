import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { isSupported, setCurrentScreen } from 'firebase/analytics'
import { analytics } from '../firebaseConfig'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  useEffect(() => {
    isSupported()
      .then((isAnalyticsSupported) => {
        if (isAnalyticsSupported) {
          setCurrentScreen(analytics, 'Home')
        }
      })
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Projetinho</title>
        <meta name="description" content="Projetinho é um app para competir com seus amigos e uma forma de incentivo à atividades físicas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h2>Projetinho</h2>
      </header>

      <main className={styles.main}>
        <h1>Hi</h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
