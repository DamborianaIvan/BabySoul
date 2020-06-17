import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import Main from './components/Main'; 
import Footer from './components/Footer';



function App() {
  return (
    <div className="container-fluid">
      <Navbar sticky="top" className="bg-color shadow rounded" expand="lg">
        <Navbar.Brand href="/"><h6 className="nav-brand">Baby Soul</h6> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
                  <Nav.Link><Link to="/products" className="ml-4 navbar-links-colors mr-4">Productos</Link></Nav.Link>
                  <Nav.Link><Link to="/contact" className="ml-4 navbar-links-colors mr-4">Contacto</Link></Nav.Link>
                  <Nav.Link><Link to="/buy" className="ml-4 navbar-links-colors mr-4"><i class="fas fa-shopping-cart"></i> </Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>  
      <section className="bg-color container">
        <Main />
      </section>    
      <section className="bg-color container-fluid">
        <Footer />
      </section>
    </div>
  )
  
}

export default App;
