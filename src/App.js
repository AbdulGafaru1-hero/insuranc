import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import ContactPage from '../src/pages/ContactPage';
import ServicesPage from '../src/pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
       <Routes>
       
        <Route index element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="contact" element={<ContactPage />}/>
        <Route path="services" element={<ServicesPage />}/>
       
      </Routes>
   </BrowserRouter>
  );
}

export default App;
