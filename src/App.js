 
import './dev.css';  
import Sections from './components/Sections';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header/> 
         <Sections/>
      <Footer/>
    </div>
  );
}

export default App;
