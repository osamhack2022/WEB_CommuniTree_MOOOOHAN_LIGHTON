import { useNavigate } from 'react-router-dom';
import React from "react"
function Move() {
    const navigate = useNavigate();
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">
                        아직 로그인을 안 하셨네요!
                    </h3>
                    <div className="form-group mt-3">
                        <button type="submit" className="btn btn-dark" onClick={()=>{
                            navigate('/login')
                        }}>
                            로그인하러 가기
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Move