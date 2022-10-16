import Comment from './Comment.js'
import CTr from './CommentTd.js';
import Card from 'react-bootstrap/Card';

function View(){
    const [Cinfo, setCInfo] = useState([]);
    /////////////////////
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
    /////////////////////
    //data를 useState에 넣음
    useEffect(()=>{
        try {
            setCInfo(data);
        } catch (error) {
            console.error(error);
        }
    },[]);
    /////////////////////
    return(
        <div className="Viewcontainer">
            <div className='Note'>View</div>
            <div className='샵이름'>#칭찬</div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{CItem.title}</Card.Title>
                    <Card.Text>
                        {CItem.content}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Content</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <CTr Cinfo={Cinfo}/>
            </table>
            <Comment/>
            
        </div>
        
    );
}