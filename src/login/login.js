/*eslint-disable*/
import React, { useState } from "react"
// import { useDispatch } from 'react-redux'
// import { userPw, userNum, changePw, changeNum } from './../store/userProfile.js'
// import { signIn } from './auth.js'
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"

export default function (props) {
    let [authMode, setAuthMode] = useState("signin");
    let [userNum, changeNum] = useState('');
    let [userPw, changePw] = useState('');
    // let dispatch = useDispatch();
    const navigate = useNavigate();
    const goToMain = () => { navigate('/mypage') };
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    };
    const users = { name: "이동균", email: "020315lee@gmail.com", militaryNum: "22-76025739", password: "0000", };

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">로그인</h3>
                        <div className="text-center">
                            아직 가입하지 않으셨습니까?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                회원가입
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>군번</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="군번을 입력합니다."
                                onChange={e=>{changeNum(e.target.value); console.log(userNum); }}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>비밀번호</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="비밀번호를 입력합니다."
                                onChange={e=>{changePw(e.target.value); console.log(userPw); console.log(userNum); console.log(users.militaryNum); console.log(users.password);}}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={e=>{
                                if( users.militaryNum == userNum ){
                                    if( users.password == userPw ){
                                        e.stopPropagation()
                                        goToMain()
                                    }
                                } else {
                                    alert('오류')
                                }
                            }}>
                                제출하기
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
                        이미 가입하셨습니까?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            로그인
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>이름</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="ex) 홍길동"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>이메일 주소</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="이메일 주소"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>군번</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="ex) 22-12345678"
                        />
                    </div>
                    {/* <div className="form-group mt-3">
                        <label>입대일</label>
                        <input
                            type="date"
                            className="form-control mt-1"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>전역일</label>
                        <input
                            type="date"
                            className="form-control mt-1"
                        />
                    </div> */}
                    <div className="form-group mt-3">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="비밀번호"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            제출하기
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}