import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { isSupported, setCurrentScreen } from 'firebase/analytics'
import { analytics } from '../firebaseConfig'
import styles from '../styles/Home.module.scss'
import { defaultLang } from '../assets/lang'
import CreateAccount from '../components/CreateAccount'

const Home: NextPage = () => {
  useEffect(() => {
    isSupported()
      .then((isAnalyticsSupported) => {
        if (isAnalyticsSupported) {
          setCurrentScreen(analytics!, 'Home')
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
        <section className={styles.resume}>
          <h1>{ defaultLang.home.main.title }</h1>
          <h2>{ defaultLang.home.main.subtitle }</h2>
        </section>

        <section className={styles.register}>
          <h3>Crie sua conta</h3>

          <CreateAccount />
        </section>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
