import type { NextPage } from 'next'
import Head from 'next/head'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

import LoginForm from '../components/LoginForm'

import workoutImage from '../public/assets/img/workout.avif'

import styles from '../styles/Login.module.scss'

const Login: NextPage = () => {
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
          <Paper variant='outlined' className={styles.paper}>
            <LoginForm />
          </Paper>
        </Box>
      </Container>
    </div>
  )
}

export default Login
