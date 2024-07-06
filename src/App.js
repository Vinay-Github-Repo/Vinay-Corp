// import logo from './logo.svg';
import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Component/Home";

import Allcources from "./Component/Allcources";
import AddCources from "./Component/AddCources";
import UpdateCource from "./Component/UpdateCource";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Login from "./Component/Login";

function App() {
  const notify = () =>
    toast.success("Wow this is Amazing!", {
      position: "bottom-right",
    });
  return (
    <div className="App">
      <Router>
        {/* <Button onClick={notify}>Alert Button</Button> */}
        <ToastContainer />
        <Container>
          <Header />
          
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/add-cource" element={<AddCources/>} exact />
                <Route path="/view-cources" element={<Allcources/>} exact />
                <Route path="/update-cources" element={<UpdateCource/>} exact />
                <Route path="/about-us" element={<AboutUs/>} exact />
                <Route path="/contact-us" element={<ContactUs/>} exact />
                <Route path="/login" element={<Login/>} exact/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
