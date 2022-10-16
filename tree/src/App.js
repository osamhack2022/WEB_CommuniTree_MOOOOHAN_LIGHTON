/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import Note1 from './routes/Note-main.js'
import NoteL from './routes/Note-list.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"


function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar> 
      </>
      <Routes>
        <Route path="/note" element={ <Note1/> } />

        <Route path="/noteL" element={ <NoteL/> } />

        <Route path="*" element={ <div>없는페이지임</div> } />
    </Routes>
    </div>
  );
}

export default App;
