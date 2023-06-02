import Card from './components/GlobalStyle/Cards/Card';
import Styles from './components/GlobalStyle/Styles';
import Input from './components/Input/Input';
import ThemeProvider from './components/Theme/Theme';
import Typography from './components/Typography/Typography';
import { Container, Row, Col } from 'react-grid-system';


function App() {

  return (
    <ThemeProvider >
      <Styles />
      <Container>
        <Card>
          <Typography variant="h1" component="h1">Create you accoun</Typography>
          <Typography variant="text" component="text">Let's get started</Typography>
          <Input label={'First Name'} placeholder="Name" />
        </Card>
      </Container>
    </ThemeProvider>

  )
}

export default App
