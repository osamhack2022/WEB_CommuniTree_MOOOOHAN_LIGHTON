import React, { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function Write() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tree, setTree] = useState('');
    const [fruit, setFruit] = useState('');
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    },[]);
    return (
        <div className="Auth-form-container-custumed">
            <form className="Auth-form-custumed">
                <FloatingLabel controlId="floatingTextarea" label="제목" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a comment here" onChange={e=>{setTitle(e.target.value)}}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '600px' }} onChange={e=>{setContent(e.target.value)}}/>
                </FloatingLabel>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="열매를 달 나무">
                            <Form.Select aria-label="Floating label select example" onChange={e=>{setTree(e.target.value)}}>
                                <option>나무 종류 보기</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="열매 종류">
                            <Form.Select aria-label="Floating label select example" onChange={e=>{setFruit(e.target.value)}}>
                                <option>열매 종류 보기</option>
                                <option value="0">칭찬 열매</option>
                                <option value="1">격려 열매</option>
                                <option value="2">불만 열매</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-dark" onClick={()=>{axios.post('URL', {title: {title}, content: {content}, tree: {tree}, fruit: {fruit}})}}>
                                제출하기
                            </button>
                </div>
            </form>
        </div>
    );
}

export default Write;