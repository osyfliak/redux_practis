import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {authActions} from '../../redux/auth/auth-actions'


export default function AuthForm() {
const dispatch= useDispatch();



const hadleSubmit=e=>{
e.preventDefault();
const name = e.target.elements[0].value;
if(name === 'Petro'){dispatch(authActions.loginAction(name))}

}


  return (
    <Form onSubmit={hadleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
        <Form.Text className="text-muted">
          Name: Petro
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}

