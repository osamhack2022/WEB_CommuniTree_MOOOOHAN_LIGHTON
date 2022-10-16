import {useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Post = ({}) => {
    
//////////////////////////////////////////////////
// query로 데이터 올리기 설치는 함
// let result = useQuery('작명', ()=>
//     axios.post('https://codingapple1.github.io/userdata.json')
//     .then((res)=>{ return res.data })
//     .catch(err => console.log(err))
// )
// ----------------------------------------------------
const [form,setForm] = useState({
    title : '',
    content: '',
    username: '',
})

const handleChange = (e) => {
    const {title,value} = e.target;
    setForm(
        {
            ...form,
            [title] : value
        }
    )
}

const handleSubmit = (e) => {
    e.preventDefault();
    //axios.post(form)
    setForm(
        {
            title : '',
            content: '',
            username: '',
        }
    )
}
/////////////////////////////////////////////////


    // 페이지 형식
    // 자동으로 로그인한 아이디 정보가 추가되도록 하기 

    return(
        <div className='postPage'>
            <Card className='postPage' style={{ width: '1000px' }}>
                <Card.Header>#칭찬</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Title"
                            className="mb-3"
                        >
                            <Form.Control type="title" placeholder="name@example.com" value={form.title} onChange={handleChange} />
                        </FloatingLabel>
                    </Card.Title>
                    <Card.Text>
                    <FloatingLabel controlId="floatingTextarea2" label="Content">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a content here"
                        style={{ height: '400px' }}
                        value={form.content} onChange={handleChange}
                        />
                    </FloatingLabel>
                    </Card.Text>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Post