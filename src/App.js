import "./dev.css"; 
import { Route, BrowserRouter as Router, Routes,Navigate  } from "react-router-dom";
 
import NotFound from "./components/pages/NotFound";
import Layout from "./components/pages/Layout";
import { RouteList } from "./Routes/Routes"; 
import ToastProvider from "./ToastProvider";
import AdminLayout from "./components/Admin/AdminLayout"; 
import Dashboard from "./components/Admin/Dashboard";
import { Login } from "./components/Auth/login";

function App() {
  const isLoggedIn = localStorage.getItem('token'); 
  if(!isLoggedIn){
    <Login/>
  }




  return (  


    
    <>
    <ToastProvider />
      <Router> 
        <Routes> 
          <Route path="/" element={<Layout />}> 
            {
                RouteList.map(function (item, index) {
                    return <Route path={item.path} element={item.element}></Route>;
                })
            }
                  <Route path="*" element={<NotFound />}></Route>   
          </Route> 
            {
              isLoggedIn ?
                <Route path="/admin/" element={<AdminLayout />}> 
              
                <Route path="dashboard" element={<Dashboard />}></Route>   
                <Route path="*" element={<NotFound />}></Route>   
            </Route>    
            :
            <Route path="/" element={<Layout />}> 
            <Route path="/admin/*" element={<Login />} />
            </Route>

          }
         
        </Routes>
      </Router> 
    </>
    
  );
}

export default App;
