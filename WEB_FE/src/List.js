import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


function List(props) {
    const [modalShow, setModalShow] = useState(false);
    const [notes, setNotes] = useState('');
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setNotes(res.data))
        .catch(err => console.log(err));
    },[]);
    return(
        <ListGroup as="ol" numbered>
            {
                notes.map((notesArr, i)=>(
                    <>
                        <Post notesArr={notesArr} onClick={()=>setModalShow(true)}/>
                        <View i={i} show={modalShow} onHide={() => setModalShow(false)}/>
                    </>
                ))
            }
        </ListGroup>
    )
}

function Post({notesArr}) {
    switch(notesArr.fruit) {
        case '0':
            return (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" variant="success">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{notesArr.title}</div>
                        {notesArr.content}
                    </div>
                    <Badge bg="dark" pill>
                        댓글: {notesArr.comment.length()}
                    </Badge>
                </ListGroup.Item>
            )
        case '1':
            return (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" variant="warning">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{notesArr.title}</div>
                        {notesArr.content}
                    </div>
                    <Badge bg="dark" pill>
                        댓글: {notesArr.comment.length()}
                    </Badge>
                </ListGroup.Item>
            )
        case '2':
            return (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" variant="danger">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{notesArr.title}</div>
                        {notesArr.content}
                    </div>
                    <Badge bg="dark" pill>
                        댓글: {notesArr.comment.length()}
                    </Badge>
                </ListGroup.Item>
            )
        default:
    }
}

export default List