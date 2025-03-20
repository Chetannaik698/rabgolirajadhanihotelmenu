import "./App.css";
import Bevarages_Deserts_Page from "./components/Beverages_Deserts/Bevarages_Deserts_Page";
import Biryani_Chine_Page from "./components/Biryani_Chinese/Biryani_Chine_Page";
import Breads_Accom_Page from "./components/Breads_Accompaniments/Breads_Accom_Page";
import MainPage from "./components/Main_Course/MainPage";
import Navbar from "./components/Navbar";
import Starters_Snacks_Page from "./components/Starters_Snacks/Starters_Snacks_Page";
import Tagline from "./components/Tagline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tandoori from "./components/Tandoori/Tandoori";

function App() {
  return (
    <BrowserRouter>
      <Tagline />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/starters&snacks" element={<Starters_Snacks_Page />}></Route>
        <Route path="/breads&acom" element={<Breads_Accom_Page />}></Route>
        <Route path="/biryani&chinese" element={<Biryani_Chine_Page />}></Route>
        <Route path="/beverages&deserts" element={<Bevarages_Deserts_Page />}></Route>
        <Route path="/tandoori" element={<Tandoori/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
