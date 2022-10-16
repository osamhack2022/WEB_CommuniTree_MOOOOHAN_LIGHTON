import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function View(props) {
    const i = props.i
    const [reply, setReply] = useState('');
    const [notes, setNotes] = useState('');
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setNotes(res.data))
        .catch(err => console.log(err));
    },[]);
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {notes[i].title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {notes[i].content}
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={e=>{
                            setReply(e.target.value)
                        }}/>
                        <Form.Button onClick={()=>{
                            axios.post('URL',notes.comment.push(reply))
                        }}>제출하기</Form.button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <ListGroup variant="flush">
                    {
                        notes[i].comment.map((commentArr)=>(
                            <ListGroup.Item>{commentArr}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Modal.Footer>
        </Modal>
    );
}
