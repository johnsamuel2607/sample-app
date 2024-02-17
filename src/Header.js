import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

function Header() {
  return (
    <>
    
      <Navbar bg="primary" data-bs-theme="dark" className='header'>
        <Container>
          <Navbar.Brand href="#home">Cards </Navbar.Brand>
         
        </Container>
      </Navbar>

    </>
  );
}

export default Header;