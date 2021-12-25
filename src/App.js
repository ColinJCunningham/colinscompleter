import React from "react";
import FormCreate from "./Components/Forms/FormCreate";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Plan from "./Components/Info/plandetails";
import "../src/Assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/start" element={<Plan />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
