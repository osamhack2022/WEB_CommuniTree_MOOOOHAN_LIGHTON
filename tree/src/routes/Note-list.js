/* eslint-disable */
import { useState } from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';
import { useSelector } from "react-redux"
import { Table } from 'react-bootstrap'

function NoteL(){
    return(
        <div className='N-list'>
            <h3>#칭찬</h3>
            <button>글쓰기 로고</button>
        </div>
    )
}

export default NoteL