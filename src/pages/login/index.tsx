import { useState } from 'react'
import { Button, Container, Grid, Paper, TextField, Typography, Box } from '@mui/material'

import { LoginType } from './types/LoginType'
import { loginValidate } from '../../helpers/loginValidate'
import { useNotification } from '../../context/notification.context';

const LoginPage: React.FC<{}> = () => {

  const [ loginData, setLogin ] = useState<LoginType>({
    email: '',
    password: ''
  })

  const { getNotification } = useNotification()

  const dataLogin = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    loginValidate.validate(loginData).then(()=> {
      console.log(loginData)
      getNotification(JSON.stringify(loginData), 'success')
    }).catch(error => {
      console.log(loginData)
      getNotification(error.message, 'error')
    })
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: '100vh'
          }}
        >
          <Grid item>
            <Paper
              sx={{
                padding: '1.5em',
                borderRadius: '0.5em'
              }}
            >
              <Typography 
                variant='h4'
                sx={{
                  mt: 1,
                  mb: 1
                }}
                >Iniciar Sesión</Typography>
              <Box
                component='form'
                onSubmit={handleSubmit}
              >
                <TextField
                  fullWidth
                  name='email'
                  type='text' 
                  label='Email'
                  margin='normal'
                  onChange={dataLogin}
                  sx={{
                    mt: 2,
                    mb: 1.5
                  }}
                />
                <TextField
                  fullWidth
                  name='password'
                  type="password" 
                  label='Password'
                  margin='normal'
                  onChange={dataLogin}
                  sx={{
                    mt: 1.5,
                    mb: 1.5
                  }}
                />
                <Button
                  fullWidth
                  type='submit' 
                  variant='contained'
                  sx={{
                    mt: 1.5,
                    mb: 2
                  }}
                  >Iniciar Sesión</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default LoginPage