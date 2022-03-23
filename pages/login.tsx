import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Fade from '@mui/material/Fade'

import LoginForm from '../components/LoginForm'

import workoutImage from '../public/assets/img/workout.avif'

import styles from '../styles/Login.module.scss'
import RegisterForm from '../components/RegisterForm'

const TRANSITION_TIMEOUT = 300

const Login: NextPage = () => {
  const [isLoginVisible, setLoginVisible] = useState(true)
  const [isRegisterVisible, setRegisterVisible] = useState(false)

  const changeForm = () => {
    let fadeOut = setLoginVisible
    let fadeIn = setRegisterVisible

    if (isRegisterVisible) {
      fadeOut = setRegisterVisible
      fadeIn = setLoginVisible
    }

    fadeOut(false)

    setTimeout(() => {
      fadeIn(true)
    }, TRANSITION_TIMEOUT)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Autenticação - Projetinho</title>
        <meta name="description" content="Realize a autenticação para acessar o aplicativo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ backgroundImage: `url(${workoutImage.src})` }} className={styles.backgroundImage} />

      <Container component='main' className={styles.content}>

        <Box component='section' sx={{ padding: '64px 0' }}>
          <Fade in={isRegisterVisible} unmountOnExit>
            <Paper variant='outlined' className={styles.paper}>
              <RegisterForm onChangeForm={changeForm} />
            </Paper>
          </Fade>
          <Fade in={isLoginVisible} unmountOnExit>
            <Paper variant='outlined' className={styles.paper}>
              <LoginForm onChangeForm={changeForm} />
            </Paper>
          </Fade>
        </Box>
      </Container>
    </div>
  )
}

export default Login
