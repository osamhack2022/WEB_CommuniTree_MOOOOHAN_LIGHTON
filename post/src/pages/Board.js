import { useEffect, useState, useRef} from 'react'
import axios from 'axios'
import Tr from './posting/Tr.js'
// import Post from './Post'
// import Modal from './Modal'

function Board(){
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, setModalOn] = useState(false);

    // 

    const nextId = useRef(11);

    //axios.get(데이터 홈페이지) 고치기

    useEffect(()=>{
        axios.get('https://https://jsonplaceholder.typicode.com/users')
        .then(res => setInfo(res.data))
        .catch(err => console.log(err));
    },[]);

    //

    const handleSave = (data) => {
        if(data.id) {
            setInfo(
                info.map(row => data.id === row.id? {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                } : row)
            )
        } else {
            //데이터 추가 방법2
            setInfo(info => info.concat(
                {
                    id: nextId.current,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website
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
                        <th>Email</th>
                        <th>Phone NO.</th>
                        <th>Website</th>
                        {/* <th>Edit</th>
                        <th>Delete</th> */}
                    </tr>
                </thead>
                <Tr info={info}/>
            </table>
            {/* <Post onSaveData={handleSave}/>
            {modalOn && <Modal selectedData={selected} />} */}
        </div>
    );
};

export default Board;