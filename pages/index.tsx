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
    </div>
  )
}

export default Home
