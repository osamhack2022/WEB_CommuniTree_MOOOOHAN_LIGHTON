import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm(props) {
    const [mNumber, setMNumber] = useState('');
    const [password, setPassword] = useState('');
    const [authMode, setAuthMode] = useState('signin');
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://web-communitree-moooohan-lighton-jg77q6wjjv4fxq-8000.githubpreview.dev/')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    },[]);
    const navigate = useNavigate();
    const handleClick = () => {
        try {
            props.login({ mNumber, password, users });
        } catch (e) {
            alert('가입하지 않은 정보입니다.');
            setMNumber('');
            setPassword('');
        }
    };
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    };
    const [data, setData] = useState({});
    const nameChangeHandler = e => {
        setData( prevState => {
            return { ...prevState, name: e.target.value }
        })
    }
    const emailChangeHandler = e => {
        setData( prevState => {
            return { ...prevState, email: e.target.value }
        })
    }
    const mNumberChangeHandler = e => {
        setData( prevState => {
            return { ...prevState, mNumber: e.target.value }
        })
    }
    const passwordChangeHandler = e => {
        setData( prevState => {
            return { ...prevState, password: e.target.value }
        })
    }
    if (props.authenticated) {
        return navigate('/')
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">로그인</h3>
                        <div className="text-center">
                            비회원이에요!{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                회원가입하러 가기
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>군번</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="군번"
                                onChange={e=>{setMNumber(e.target.value)}}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>비밀번호</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="비밀번호를 입력합니다."
                                onChange={e=>{setPassword(e.target.value)}}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-dark" onClick={handleClick}>
                                로그인
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">회원가입</h3>
                    <div className="text-center">
                        회원이에요!{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            로그인하러 가기
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>이름</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="이름"
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>이메일 주소</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="이메일 주소"
                            onChange={emailChangeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>군번</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="군번"
                            onChange={mNumberChangeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="비밀번호"
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-dark" onClick={()=>{
                            axios.post('URL', data)
                        }}>
                            가입하기
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default LoginForm;