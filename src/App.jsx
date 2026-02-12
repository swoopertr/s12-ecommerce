import Header from "./componets/Header";
import Footer from "./componets/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PremiumEssentials from "./pages/Premium Essentials/PremiumEssentialsPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/category" element={<PremiumEssentials />} /> //CategoryPage buraya
        yazilacak
      </Routes>

      <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;
