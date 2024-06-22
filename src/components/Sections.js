import React from 'react';
import { Login } from './Auth/login';
import { Register } from './Auth/register';

export default function Sections() {
  return ( 
    <div>
          <Login/>  
          <Register/> 
    </div>
      
  );
}
