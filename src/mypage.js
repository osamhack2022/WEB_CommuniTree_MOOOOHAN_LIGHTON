import React from "react";

function Mypage({ user }) {
    const { militaryNumber, password, name } = user || {};
    return (
    <>
        <h1>내 정보</h1>
        <dt>군번</dt>
        <dd>{militaryNumber}</dd>
        <dt>비밀번호</dt>
        <dd>{password}</dd>
        <dt>이름</dt>
        <dd>{name}</dd>
    </>
    );
}

export default Mypage;