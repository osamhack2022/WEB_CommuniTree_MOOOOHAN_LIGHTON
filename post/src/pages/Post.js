import {useState} from 'react'

const Post = ({onSaveData}) => {
    const [form,setForm] = useState({
        name : '',
        email: '',
        phone: '',
        website: '',
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm(
            {
                ...form,
                [name] : value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form);
        setForm(
            {
                name : '',
                email: ''
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
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                </div>
                <div>
                    <label>내용</label>
                    <input type='email' name='email' value={form.email} onChange={handleChange}/>
                </div>
                <div>
                    <button type='submit'>제출</button>
                </div>
            </form>
        </div>
        
    )
}

export default Post