import { FC } from 'react'
import Link from 'next/link'
import styles from './CreateAccount.module.scss'

const CreateAccount: FC = () => {
  return (
    <div className={styles['form-container']}>
      <div className={styles['form-item']}>
        <label htmlFor='email'>
          <strong>E-mail</strong>
        </label>
        <input id='email' placeholder='Informe o e-mail' type='email' />
      </div>

      <div className={styles['form-item']}>
        <label htmlFor='password'>
          <strong>Senha</strong>
        </label>
        <input id='password' placeholder='Informe a senha' type='password' />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '.5rem 0' }}>
        <small>
          <Link href='/login'>
            <a>
              Eu ja tenho uma conta
            </a>
          </Link>
        </small>
      </div>

      <div className={styles['action-buttons']}>
        <button className={styles['btn-create']}>
          Criar conta
        </button>
        <button>Entrar com o Google</button>
      </div>
    </div>
  )
}

export default CreateAccount 