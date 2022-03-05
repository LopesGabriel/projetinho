import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { isSupported, setCurrentScreen } from 'firebase/analytics'
import {
  createUserWithEmailAndPassword,
  AuthError,
  AuthErrorCodes,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { analytics, auth } from '../firebaseConfig'
import styles from '../styles/Home.module.scss'
import { defaultLang } from '../assets/lang'
import CreateAccount from '../components/CreateAccount'

const Home: NextPage = () => {
  const createEmailAccount = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
      const { code, message }: AuthError = err
      console.error('Create Email Account error:', message)

      if (code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email já foi registrado!')
      }
    }
  }

  const createAccountWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/userinfo.email')

      await signInWithPopup(
        auth,
        provider
      )
    } catch (err: any) {
      console.error(err)
    }
  }

  const deslogar = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const userListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is connected')
        if (user.photoURL) {
          console.log('User has image', user.photoURL)
        }
      } else {
        console.log('User isn\'t connected')
      }
    })

    isSupported()
      .then((isAnalyticsSupported) => {
        if (isAnalyticsSupported) {
          setCurrentScreen(analytics!, 'Home')
        }
      })

    return userListener
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

      <main className={[styles.main, 'container'].join(' ')}>
        <section className={styles.resume}>
          <h1>{ defaultLang.home.main.title }</h1>
          <p>{ defaultLang.home.main.subtitle }</p>
        </section>

        <section className={styles.register}>
          <h3>Crie sua conta</h3>

          <CreateAccount
            onCreateAccountWithEmail={createEmailAccount}
            onCreateAccountWithGoogle={createAccountWithGoogle}
          />
        </section>

        <button onClick={deslogar}>
          Deslogar
        </button>
      </main>

      <footer className={styles.footer}>
        <small>
          Idealizado por{' '}
          <a href='https://www.linkedin.com/in/gabriel-de-oliveira-lopes-b97093179/' target='_blank'>
            Gabriel de Oliveira Lopes
          </a>
        </small>
      </footer>
    </div>
  )
}

export default Home
