
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MandS from './Components/MandS';
import Contact from './Components/Contact';






function App() {
  return (
    <div className="App">
      <Navbar />
      
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/mands' element={<MandS />}/>
        <Route path='/contact' element={<Contact />}/>
        
        

      </Routes>



    </div>
  );
}

export default App;
