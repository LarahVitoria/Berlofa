import Header from "./components/Header/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./components/Footer/footer";
import React from "react";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
