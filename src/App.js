import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/appNavBar';
import RegisterCaseForm from './components/registerCaseForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const App = () => {
  return (
    <div className="App">
      <AppNavbar />
      <Container style={{ marginTop:'2rem' }}>
        <Row className="justify-content-md-center">
          <div className="col-sm-6">
            <RegisterCaseForm />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default App;
