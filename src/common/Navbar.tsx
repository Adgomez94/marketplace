import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid 
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Adrian Duran</Typography>
              </Grid>
              <Grid item>
                <Stack direction='row' spacing={2}>
                  <Button variant='contained'>Register</Button>
                  <Button variant='outlined'>Login</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar