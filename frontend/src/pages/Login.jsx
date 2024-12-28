import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import {useLoginMutation} from '../features/user/userApiSlice';
import {setCredentials} from '../features/auth/authSlice';
import {toast} from 'react-toastify';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, {isLoading}] = useLoginMutation();
  const {userInfo}  = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({...res,}));
      navigate('/');
    } catch (error) {
      toast.error(error?.data?.message || error.error);

    }
  
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

        <Button disabled={isLoading}  type='submit' variant='primary' >
          Sign In
        </Button>

      </Form>

      <Row className='py-3'>
        <Col>
        Not registered yet?
           <Link to={'/register'}> Sign Up
           </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;