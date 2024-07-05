import React from 'react';
import Home from '../components/pages/Home';
import Contactus from '../components/pages/Contactus';
import Aboutus from '../components/pages/Aboutus';

import { Login } from '../components/Auth/login';
import { Register } from '../components/Auth/register'; 

export const RouteList = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'about-us',
        element:<Aboutus/>
    },
    {
        path:'contact-us',
        element:<Contactus/>
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'signup',
        element:<Register/>
    }
];
 