import { useEffect, useState, useRef} from 'react'
// import axios from 'axios'
import Tr from './Tr.js'
import Post from '.././post/Post.js'
import { useSelector } from "react-redux"

function Board(){
    const [info, setInfo] = useState([]);
    // <Board/>숨기기
    // const [show, setShow] = useState(false);
    // <Board/>숨기기
    let data = useSelector((state) => { return state.text } )
    // 

    const nextId = useRef(8);

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
            <div className='샵이름'>#칭찬<button>글작성</button></div>
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
            {/* { show && <Post onSaveData={handleSave}/> } */}
            <Post onSaveData={handleSave}/>
        </div>
        
    );
};

export default Board;