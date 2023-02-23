import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
// import {authActions} from '../../redux/auth/auth-actions'
import { singUpThunk } from '../../redux/auth/auth-thunk';


export default function AuthForm() {
const dispatch= useDispatch();



const hadleSubmit=e=>{
e.preventDefault();
const email = e.target.elements[0].value;
const password = e.target.elements[1].value;
dispatch(singUpThunk({email, password}));
}


  return (
    <Form onSubmit={hadleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
        {/* <Form.Text className="text-muted">
          Name: Petro
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        {/* <Form.Text className="text-muted">
          Name: Petro
        </Form.Text> */}
      </Form.Group>


      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}

