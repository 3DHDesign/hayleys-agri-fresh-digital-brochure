import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
 
import HorecaSupply from "./pages/HorecaSupply";
import QualityStandards from "./pages/QualityStandards";
import Inquiry from "./pages/Inquiry";
import Header from "./components/layout/Header";
import { InquiryProvider } from "./context/InquiryContext";
import Presentation from "./pages/Presentation";
import "./App.css";
import SupermarketSupply from "./pages/SupermarketSupply";

function App() {
  return (
    <InquiryProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/supermarket-supply" element={<SupermarketSupply />} />
          <Route path="/horeca-supply" element={<HorecaSupply />} />
          <Route path="/quality-standards" element={<QualityStandards />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </BrowserRouter>
    </InquiryProvider>
  );
}

export default App;