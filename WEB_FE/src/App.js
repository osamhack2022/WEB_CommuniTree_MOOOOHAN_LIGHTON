import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { signIn } from './aboutLogin/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import Profile from './Profile';
import NotFound from './NotFound';
import LoginForm from './aboutLogin/LoginForm';
import Move from './aboutLogin/Move';
import Write from './Write';
import List from './List';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const navigate = useNavigate();
  const login = ({ mNumber, password, users }) => setUser(signIn({ mNumber, password, users }));
  const logout = () => setUser(null);

  return (
    <div className='App'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={ ()=>{ navigate('/') } }>소통나무</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ ()=>{ navigate('/profile') } }>내 나무</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('/write') } }>열매 달기</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('/list') } }>열매 목록</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {
              authenticated ? (
                <Nav.Link onClick={ ()=>{ logout(); navigate('/') } }>로그아웃</Nav.Link>
              ) : (
                <Nav.Link onClick={ ()=>{ navigate('/login') } }>로그인</Nav.Link>
              )
            }
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginForm authenticated={authenticated} login={login} />}/>
        <Route path="/profile" element={ authenticated ? (<Profile user = {user} />) : <Move/> }/>
        <Route path="/write" element={ authenticated ? (<Write user={user}/>) : <Move/> }/>
        <Route path="/list/:id" element={ authenticated ? (<List />) : <Move/> }/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
