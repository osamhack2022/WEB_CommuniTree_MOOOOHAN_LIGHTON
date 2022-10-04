/*eslint-disable*/
// https://www.youtube.com/watch?v=haXLw2Jnzz0
import './App.css';
import React, {useState, useEffect} from 'react';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import axios from 'axios';
import Login from './login/login.js';
import Mypage from './mypage.js';
import Troops from './troops.js';
import Unit from './unit.js';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const navigate = useNavigate();
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>소통나무</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={ ()=>{ navigate('/mypage')}}>내 나무</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/troops')}}>병력 나무</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/unit')}}>부대 나무</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link onClick={ ()=>{ navigate('/login')}}>로그인</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<div>1</div>}/>
        <Route path="/mypage" element={<div>2</div>}/>
        <Route path="/troops" element={<div>3</div>}/>
        <Route path="/unit" element={<div>4</div>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<div>없는 페이지</div>}/>
      </Routes>
    </div>
  );
}

export default App;
