import Card from './components/GlobalStyle/Cards/Card';
import Styles from './components/GlobalStyle/Styles';
import ThemeProvider  from './components/Theme/Theme';

function App() {

  return (
    <>
      <ThemeProvider >
        <Styles />
        <Card>
          <h1>TESTE</h1>
        </Card>
      </ThemeProvider>
    </>
  )
}

export default App
