import { FC } from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  return (
    <Container className={styles['NavbarBg']}  maxWidth='sm'>
      <Box sx={{ padding: '16px 0' }}>
        <Link href='/'>
          <Typography component='a' color='white'>
            Projetinho
          </Typography>
        </Link>
      </Box>
    </Container>
  )
}

export default Navbar
