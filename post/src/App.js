/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Home from "./pages/Home.js"
import Board from './pages/board/Board.js';
import Post from './pages/post/Post.js'


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
        <Route exact path='/' element={<Home />} />
        <Route  path='board' element={<Board />} />
        <Route  path='post' element={<Post />} />
        
        
      </Routes>
    </div>
  );
}

export default App;