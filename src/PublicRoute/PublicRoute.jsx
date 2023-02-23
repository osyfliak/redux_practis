import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogin } from '../redux/auth/auth-select';

export const PublicRoute = ({children, restricted}) => {

    const login = useSelector(selectLogin);
  return  login && restricted ? <Navigate to='/welcome'/> : children
  
}
