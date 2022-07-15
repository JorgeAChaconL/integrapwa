import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
 } from "react-router-dom";
import isologo from "./assets/isologoazul.png";
import React, { Component } from "react";
import TallerTitckets from "./components/pages/TallerTickets";
import NewTicket from "./components/pages/NewTicket";
import EditTicket from "./components/pages/EditTicket";
import ServiciosOfre from "./components/pages/ServiciosOfre";
import Home from "./components/pages/Home";
import AcercaDe from "./components/pages/AcercaDe";

import { Container, Nav, Navbar } from "react-bootstrap";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          className="mt-10"
          variant="dark"
          align="center"
        >
          <Container>
            <Link to='/'>
            <Navbar.Brand>
              <img
                alt=""
                src={isologo}
                width="250"
                height="auto"
                className="d-inline-block align-top "
              />{" "}
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textAlign: "center",
                          color: "#fff",
                          marginLeft: 10,
                          marginRight: 10,
                          textDecoration: "none",
                        }
                      : {
                          textAlign: "center",
                          color: "#fff",
                          marginLeft: 10,
                          marginRight: 10,
                          textDecoration: "none",
                        }
                  }
                  to=""
                >
                  Home
                </NavLink>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textAlign: "center",
                          color: "#fff",
                          marginLeft: 10,
                          marginRight: 10,
                          textDecoration: "none",
                        }
                      : {
                          textAlign: "center",
                          color: "#fff",
                          marginLeft: 10,
                          marginRight: 10,
                          textDecoration: "none",
                        }
                  }
                  class="paths"
                  to="Servicios"
                >
                  Servicios
                </NavLink>

                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textAlign: "center",
                          color: "#fff",
                          marginLeft: 10,
                          marginRight: 10,
                          textDecoration: "none",
                        }
                      : {
                          textAlign: "center",
                          color: "#fff",
                          marginLeft: 10,
                          marginRight: 10,
                          textDecoration: "none",
                        }
                  }
                  class="paths"
                  to="Acerca"
                >
                  Nosotros
                </NavLink>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textAlign: "center",
                          color: "#fff",
                          marginLeft: 10,
                          marginRight: 10,
                          textDecoration: "none",
                        }
                      : {
                          textAlign: "center",
                          color: "#fff",
                          marginLeft: 10,
                          marginRight: 10,
                          textDecoration: "none",
                        }
                  }
                  class="paths"
                  to="Tickets"
                >
                  Taller
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="" element={<Home />} />
          <Route exact path="Servicios" element={<ServiciosOfre />} />
          <Route exact path="Acerca" element={<AcercaDe />} />
          <Route exact path="Tickets" element={<TallerTitckets />} />
          <Route exact path="Tickets/NewTicket" element={<NewTicket />} />
          <Route path="EditTicket/:id" element={<EditTicket />} />
        </Routes>
        <Footer/>
      </Router>
    );
  }
}

export default App;
