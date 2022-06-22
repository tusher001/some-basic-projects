import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Data } from "./Data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>SOME BASIC PROJECTS</h1><div className='underline mt-3 mb-5'></div>
          <Row xs={1} md={3} className="g-4">
            {Data.map(item => (
              <Col>
                <Card>
                  <a href={item.liveUrl} target='_blank' rel="noreferrer">
                    <Card.Img variant="top" src={require(`${item.img}`)} />
                    <Card.Body>
                      <Card.Title>{item.projectTitle}</Card.Title>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
