import { FC, useState } from 'react'
import Link from 'next/link'
import styles from './CreateAccount.module.scss'

interface ICreateAccountProps {
  onCreateAccountWithEmail: (email: string, password: string) => Promise<void>
  onCreateAccountWithGoogle: () => Promise<void>
}

const CreateAccount: FC<ICreateAccountProps> = ({ onCreateAccountWithEmail, onCreateAccountWithGoogle }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCreateEmailAccount = async () => {
    try {
      setLoading(true)
      await onCreateAccountWithEmail(email, password)
    } catch (err: any) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateAccountWithGoogle = async () => {
    try {
      setLoading(true)
      await onCreateAccountWithGoogle()
    } catch (err: any) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles['form-container']}>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          className='form-control'
          placeholder='Informe o e-mail'
          type='email'
          aria-describedby='emailHelp'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <small id='emailHelp'>Não será enviado email marketing ou spam</small>
      </div>

      <div className='form-group'>
        <label htmlFor='password'>Senha</label>
        <input
          id='password'
          className='form-control'
          placeholder='Informe a senha'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <small>
          <Link href='/login'>
            <a>
              Eu ja tenho uma conta
            </a>
          </Link>
        </small>
      </div>

      <div className={styles['action-buttons']}>
        <button
          className={styles['btn-create']}
          disabled={loading}
          onClick={handleCreateEmailAccount}
        >
          {
            loading
            ? <>
                <span 
                  className='spinner-border spinner-border-sm'
                  role="status"
                  aria-hidden="true"
                />
                {' '}Carregando...
              </>
            : 'Criar conta'
          }
        </button>
        <button
          disabled={loading}
          onClick={handleCreateAccountWithGoogle}
        >
          Entrar com o Google
        </button>
      </div>
    </div>
  )
}

export default CreateAccount 