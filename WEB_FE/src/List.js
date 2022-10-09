import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List() {
    const [notes, setNotes] = useState('');
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setNotes(res.data))
        .catch(err => console.log(err));
    },[]);
    return(
        <ListGroup as="ol" numbered>
            {
                notes.map((notesArr)=>{
                    <Post notesArr={notesArr}/>
                })
            }
        </ListGroup>
    )
}

function Post({notesArr}) {
    return(
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{notesArr.title}</div>
                {notesArr.content}
            </div>
            <Badge bg="primary" pill>
                {notesArr.good}
            </Badge>
        </ListGroup.Item>
    )
}