import "./dev.css"; 
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
 
import NotFound from "./components/pages/NotFound";
import Layout from "./components/pages/Layout";
import { RouteList } from "./Routes/Routes"; 
import ToastProvider from "./ToastProvider";

function App() {
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
        </Routes>
      </Router> 
    </>
    
  );
}

export default App;
