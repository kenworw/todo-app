import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submit');
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit= {submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value= {email}
            onChange= {e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value= {password}
            onChange= {e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button disabled= "" type='submit' variant='primary'>
          Sign In
        </Button>

      </Form>

      <Row className='py-3'>
        <Col>
        Not registered yet?
           <Link to={'/register'}> Register
           </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;