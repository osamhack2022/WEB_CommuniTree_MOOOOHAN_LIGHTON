import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Profile(props) {
    const { mNumber, email, password, name } = props.user || {};
    const [key, setKey] = useState('profile');

    return (
        <div className="Auth-form-container-custumed">
            <form className="Auth-form-custumed">
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                    <Tab eventKey="profile" title="프로필">
                                <div className="Auth-form-content">
                                    <h3 className="Auth-form-title">프로필</h3>
                                    <div className="form-group mt-3">
                                        <label>군번</label>
                                        <div>{mNumber}</div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>이름</label>
                                        <div>{name}</div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>이메일</label>
                                        <div>{email}</div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>비밀번호</label>
                                        <div>{password}</div>
                                    </div>
                                </div>
                    </Tab>
                    <Tab eventKey="myOpinion" title="쓴 글">
                        <div className="Auth-form-content"></div>
                    </Tab>
                    <Tab eventKey="others" title="받은 글">
                        <div className="Auth-form-content"></div>
                    </Tab>
                </Tabs>
            </form>
        </div>
        
    )
}

export default Profile;