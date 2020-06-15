import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import Main from './components/Main'; 
import Footer from './components/Footer';



function App() {
  return (
    <div className="contenedor">

      <Navbar sticky="top" className="bg-color shadow rounded" expand="lg">
        <Navbar.Brand href="/"><h6 className="nav-brand">Baby Soul</h6> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
                  <Nav.Link><Link to="/products" className="ml-4 navbar-links-colors mr-4">Productos</Link></Nav.Link>
                  <Nav.Link><Link to="/contact" className="ml-4 navbar-links-colors mr-4">Contacto</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mt-2">
        
          <section className="bg-color">
            <Main />
          </section>    
          <section className="bg-color">
            <Footer />
          </section>
      </div>  
    

    </div>
  )
  
}

export default App;
