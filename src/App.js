import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs, Career, Contact, Faqs, FiidzApp, Home, News, PricingPage, Privacy, Terms } from './Pages';
import Service from "./Pages/Service";
import HelpSupport from "./Pages/HelpSupport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/" element={<FiidzApp />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/career" element={<Career />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/pricing" element={<PricingPage />}/>
        <Route path="/services" element={<Service />}/>
        <Route path="/helpandsupport" element={<HelpSupport />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
