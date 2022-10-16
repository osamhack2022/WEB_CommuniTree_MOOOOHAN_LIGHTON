import { useEffect, useState, useRef} from 'react'
// import axios from 'axios'
import Tr from './Tr.js'
import Post from '../post/Post.js'
import { useNavigate } from 'react-router-dom'


function Board(){
    let navigate = useNavigate()
    const [info, setInfo] = useState([]);
    // <Board/>숨기기
    const [show, setShow] = useState(false);
    // <Board/>숨기기
    // 

    const nextId = useRef(8);

    // axios.get 임시방편
    let data = 
    [
        {
            "id": 1,
            "title": "Leanne Graham",
            "username": "z",
            "content": "집",
        },
        {
            "id": 2,
            "title": "a",
            "username": "x",
            "content": "가",
        },
        {
            "id": 3,
            "title": "b",
            "username": "c",
            "content": "고",
        },
        {
            "id": 4,
            "title": "Leanne c",
            "username": "v",
            "content": "싶",
        },
        {
            "id": 5,
            "title": "Leanne d",
            "username": "b",
            "content": "다",
        },
        {
            "id": 6,
            "title": "Leanne e",
            "username": "n",
            "content": "제",
        },
        {
            "id": 7,
            "title": "Leanne f",
            "username": "m",
            "content": "발",
        }
    ]

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
        }
    },[]);

    

    /////////////////////////////////////////////////////////////////////////

    const handleSave = (data) => {
        setInfo(info => info.concat(
            {
                id: nextId.current,
                title: data.title,
                username: data.username,
                content: data.content
            }
        ))
        nextId.current += 1;
    }

    // handleRemove,handleEdit 건너뜀

    return(
        <div className="Boardcontainer">
            <div className='Note'>Note</div>
            <div className='샵이름'>#칭찬<button onClick={()=>{ navigate('/post') }}>글작성</button></div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Username</th>
                        {/* <th>Edit</th>
                        <th>Delete</th> */}
                    </tr>
                </thead>
                <Tr info={info}/>
            </table>
            {/* Post 상속하면서 숨기기 */}
            { show && <Post onSaveData={handleSave}/> }
            
        </div>
        
    );
};

export default Board;