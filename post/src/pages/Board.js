import { useEffect, useState, useRef} from 'react'
// import axios from 'axios'
import Tr from './posting/Tr.js'
import Post from './Post'
// import { useSelector } from "react-redux"

function Board(){
    const [info, setInfo] = useState([]);
    // <Board/>숨기기
    const [show, setShow] = useState(false);
    // <Board/>숨기기

    // 

    const nextId = useRef(11);

    //axios.get(데이터 홈페이지) 고치기

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => setInfo(res.data))
    //     .catch(err => console.log(err));
    // },[]);
    useEffect(()=>{
        try {
            setInfo(data);
        } catch (error) {
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }
    },[]);

    let data =
        [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "z",
                "content": "집",
            },
            {
                "id": 2,
                "name": "a",
                "username": "x",
                "content": "가",
            },
            {
                "id": 3,
                "name": "b",
                "username": "c",
                "content": "고",
            },
            {
                "id": 4,
                "name": "Leanne c",
                "username": "v",
                "content": "싶",
            },
            {
                "id": 5,
                "name": "Leanne d",
                "username": "b",
                "content": "다",
            },
            {
                "id": 6,
                "name": "Leanne e",
                "username": "n",
                "content": "제",
            },
            {
                "id": 7,
                "name": "Leanne f",
                "username": "m",
                "content": "발",
            }
        ]

    /////////////////////////////////////////////////////////////////////////

    const handleSave = (data) => {
        if(data.id) {
            setInfo(
                info.map(row => data.id === row.id? {
                    id: data.id,
                    name: data.name,
                    username: data.username,
                    content: data.content
                } : row)
            )
        } else {
            //데이터 추가 방법2
            setInfo(info => info.concat(
                {
                    id: nextId.current,
                    name: data.name,
                    username: data.username,
                    content: data.content
                }
            ))
            nextId.current += 1;
        }
    }

    // handleRemove,handleEdit 건너뜀

    return(
        <div className="Boardcontainer">
            <div className='Note'>Note</div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Content</th>
                        <th>Username</th>
                        {/* <th>Edit</th>
                        <th>Delete</th> */}
                    </tr>
                </thead>
                <Tr info={info}/>
            </table>
            { show && <Post onSaveData={handleSave}/> }
        </div>
        
    );
};

export default Board;