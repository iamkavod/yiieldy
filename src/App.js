import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs, Career, Contact, FiidzApp, Home, News, PricingPage } from './Pages';
import Service from "./Pages/Service";
import HelpSupport from "./Pages/HelpSupport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fiidzapp" element={<FiidzApp />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/career" element={<Career />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/pricing" element={<PricingPage />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/helpandsupport" element={<HelpSupport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
