import { Container, Row, Col } from 'react-bootstrap';
import './FormContainer.css'; // Import custom CSS if needed

const FormContainer = ({ children }) => {
  return (
    <Container className="form-container mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8} lg={6} className="p-4 border rounded shadow-sm bg-light">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;