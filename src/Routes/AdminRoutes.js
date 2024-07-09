import React from 'react'; 

import Dashboard from "../components/Admin/Dashboard";
import Ticket from '../components/Admin/tickets/Ticket';
import NewTicket from '../components/Admin/tickets/NewTicket';
import NewStaff from '../components/Admin/Staff/NewStaff';
import ListStaff from '../components/Admin/Staff/ListStaff';
import NewDepartment from '../components/Admin/Department/NewDepartment';
import ListDepartment from '../components/Admin/Department/ListDepartment';
import ViewTicket from '../components/Admin/tickets/ViewTicket';

export const AdminRouteList = [
     
    {
        path:'dashboard',
        element:<Dashboard/>
    },
    {
        path:'ticket',
        element: <Ticket/>
    },
    {
        path:'ticket/new',
        element:<NewTicket/>
    },
    {
        path:'ticket/view/:id',
        
        element:<ViewTicket/>
    },
    {
        path:'staff/new',
        element:<NewStaff/>
    },
    {
        path:'staff/list',
        element:<ListStaff/>
    },
    {
        path:'department/new',
        element:<NewDepartment/>
    },
    {
        path:'department/list',
        element:<ListDepartment/>
    },
    

   
     
];
 