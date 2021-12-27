import React from "react";
import FormCreate from "./Components/FormController/Lincoln_Director/Distributions/Controller";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Plan from "./Components/Info/plandetails";
import Lincoln_Director from "./Components/FormController/Lincoln_Director/Distributions/Controller";
import "../src/Assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="maindiv">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="start" element={<Plan />} />
          <Route
            exact
            path="director/dist/:tpaid"
            element={<Lincoln_Director />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
