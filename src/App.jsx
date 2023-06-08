import Card from './components/Cards/Card';
import Styles from './components/GlobalStyle/Styles';
import Input from './components/Input/Input';
import ThemeProvider from './components/Theme/Theme';
import { Container, Row, Col } from 'react-grid-system';
import Button from './components/Button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


const countriesEU = [
  { "text": "Austria", "value": "AT" },
  { "text": "Belgium", "value": "BE" },
  { "text": "Bulgaria", "value": "BG" },
  { "text": "Croatia", "value": "HR" },
  { "text": "Cyprus", "value": "CY" },
  { "text": "Czech Republic", "value": "CZ" },
  { "text": "Denmark", "value": "DK" },
  { "text": "Estonia", "value": "EE" },
  { "text": "Finland", "value": "FI" },
  { "text": "France", "value": "FR" },
  { "text": "Germany", "value": "DE" },
  { "text": "Greece", "value": "GR" },
  { "text": "Hungary", "value": "HU" },
  { "text": "Ireland", "value": "IE" },
  { "text": "Italy", "value": "IT" },
  { "text": "Latvia", "value": "LV" },
  { "text": "Lithuania", "value": "LT" },
  { "text": "Luxembourg", "value": "LU" },
  { "text": "Malta", "value": "MT" },
  { "text": "Netherlands", "value": "NL" },
  { "text": "Poland", "value": "PL" },
  { "text": "Portugal", "value": "PT" },
  { "text": "Romania", "value": "RO" },
  { "text": "Slovakia", "value": "SK" },
  { "text": "Slovenia", "value": "SI" },
  { "text": "Spain", "value": "ES" },
  { "text": "Sweden", "value": "SE" },
];


function App() {

  return (
    <ThemeProvider >
      <Navbar/>
      <Styles />
      <Container>
        <Row justify='center'>
          <Col lg={6} md={8} sm={12}>
            <Card>
              {/* <Typography>Create you account</Typography> */}
              <Row>
                <Col>
                  <Input label={'First Name'} placeholder="Name" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <Dropdown title="Country" options={countriesEU} />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <Input label={'County'} placeholder="County" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input label={'Email'} placeholder="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Input label={'Password'} placeholder="Password" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" children="Register" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ThemeProvider >


  )
}

export default App
