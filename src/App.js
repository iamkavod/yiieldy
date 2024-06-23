import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs, Career, Contact, FiidzApp, Home, Pricing, Resources, Signup } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fiidzapp" element={<FiidzApp />}/>
        <Route path="/resources" element={<Resources />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/career" element={<Career />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
