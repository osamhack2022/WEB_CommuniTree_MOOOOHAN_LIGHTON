import {useState} from 'react'

const Post = ({onSaveData}) => {
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
        onSaveData(form);
        setForm(
            {
                title : '',
                content: '',
                username: '',
            }
        )
    }


    // 페이지 형식
    // 자동으로 로그인한 아이디 정보가 추가되도록 하기 

    return(
        <div className='Post Page'>
            <div className='Post Tag'> # </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <strong>제목</strong>
                    <input type="text" title="title" value={form.title} onChange={handleChange} />
                </div>
                <div>
                    <label>내용</label>
                    <input type='content' cotent='content' value={form.content} onChange={handleChange}/>
                </div>
                <div>
                    <button type='submit'>제출</button>
                </div>
            </form>
        </div>
        
    )
}

export default Post