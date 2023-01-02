import { Button, Container } from '@mui/material'

const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Button 
          fullWidth
          variant='contained'
          >Estoy en Home</Button>
      </Container>
    </div>
  )
}

export default HomePage