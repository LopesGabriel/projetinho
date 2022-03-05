import { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Google from '@mui/icons-material/Google'
import EmailIcon from '@mui/icons-material/Email'
import KeyIcon from '@mui/icons-material/Key'

import styles from './LoginForm.module.scss'

interface ILoginFormProps {
  onLoginFormWithEmail?: (email: string, password: string) => Promise<void>,
  isLoadingEmail?: boolean,
  onLoginFormWithGoogle?: () => Promise<void>,
  isLoadingGoogle?: boolean
}

const LoginForm: FC<ILoginFormProps> = ({
  onLoginFormWithEmail,
  onLoginFormWithGoogle,
  isLoadingEmail,
  isLoadingGoogle
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container>
      <Box sx={{ padding: '16px 0' }}>
        <Typography component='h1' variant='h4' fontWeight={500} className={styles.heading}>
          Autenticação
        </Typography>

        <Typography variant='subtitle1' className={styles.paragraph}>
          Eleve a experiência do seu treino
        </Typography>
      </Box>

      <TextField
        value={email}
        label='Email'
        variant='outlined'
        type={'email'}
        fullWidth
        margin='normal'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <EmailIcon />
            </InputAdornment>
          )
        }}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        value={password}
        label='Senha'
        variant='outlined'
        type={'password'}
        fullWidth
        margin='normal'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <KeyIcon />
            </InputAdornment>
          )
        }}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px 0' }}>  
        <Button variant='text' size='small' sx={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
          Criar uma conta
        </Button>

        <Button variant='contained' disabled={isLoadingEmail}>
          {
            isLoadingEmail
            ? <>
                <CircularProgress size={18} />
                <Typography ml={1} color='primary'>Entrando</Typography>
              </>
            : 'Entrar'
          }
        </Button>

        <Divider sx={{ margin: '1rem 0' }}>
          ou
        </Divider>

        <Button
          variant='contained'
          color='info'
          startIcon={isLoadingGoogle ? null : <Google />}
          disabled={isLoadingGoogle}
        >
          {
            isLoadingGoogle
            ? <CircularProgress size={22} />
            : 'Entrar com o Google'
          }
        </Button>
      </Box>

    </Container>
  )
}

export default LoginForm 