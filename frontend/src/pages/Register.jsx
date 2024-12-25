import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <FormContainer>
      <h1>Registration</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Passsword</Form.Label>
          <Form.Control
            type="password"
            placeholder="Set your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Comfirm the password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button disabled="" type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Already have an account?
          <Link to={"/login"}> Login </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Register;
