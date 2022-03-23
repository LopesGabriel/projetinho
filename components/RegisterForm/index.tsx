import { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import EmailIcon from '@mui/icons-material/Email'
import KeyIcon from '@mui/icons-material/Key'

import styles from './RegisterForm.module.scss'

interface IRegisterFormProps {
  onSubmit?: (email: string, password: string) => Promise<void>,
  isLoading?: boolean,
  onChangeForm: () => void
}

const RegisterForm: FC<IRegisterFormProps> = ({
  onSubmit,
  isLoading,
  onChangeForm
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  return (
    <Container>
      <Box sx={{ padding: '16px 0' }}>
        <Typography component='h1' variant='h4' fontWeight={500} className={styles.heading}>
          Registro
        </Typography>

        <Typography variant='subtitle1' className={styles.paragraph}>
          O seu primeiro passo para uma vida mais saudavel
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
        <Button variant='contained' disabled={isLoading}>
          {
            isLoading
            ? <>
                <CircularProgress size={18} />
                <Typography ml={1} color='primary'>Criando</Typography>
              </>
            : 'Criar'
          }
        </Button>

        <Divider sx={{ margin: '1rem 0' }}>
          ou
        </Divider>

        <Button variant='contained' fullWidth onClick={() => onChangeForm()}>
          Usar outro provedor
        </Button>
      </Box>

    </Container>
  )
}

export default RegisterForm