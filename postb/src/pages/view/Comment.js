import {useState} from 'react'


function Comment(){
    
    return(
        <div className='Comment Post'>
            <div className='C.Post Tag'> # </div>
            <form>
                <div>
                    <label>내용</label>
                    <input type='content' cotent='content' value={form.content} onChange={handleChange}/>
                </div>
                <div>
                    <label>작성자</label>
                    <input type='content' cotent='content' value={form.username} onChange={handleChange}/>
                </div>
                <div>
                    <button type='submit'>제출</button>
                </div>
            </form>
        </div>
    )
}

export default Comment