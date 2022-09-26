/* eslint-disable*/
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	let [title, titleAlt] = useState(['남자코트 추천', '강남우동 맛집', '파이썬독학']);
	let [tasty, tastyAlt] = useState(0);
	let [good, goodAlt] = useState([0,0,0]);
	let [heart, heartAlt] = useState("🖤");
	let [modal, modalAlt] = useState(false);
	let [num, numAlt] = useState(0);
	let [inp, inpAlt] = useState('');
	let sum = [0, 0, 0];
	return (
    <div className="App">
		<div className="black-nav">
			<div>ReactBlog</div>
		</div>
		<button onClick={ ()=>{
			let copy1 = [...title];
			copy1.sort(); //title.sort가 아예 안 됨 -> title은 state라서 titleAlt로만 바뀔 수 있기 때문 ~~
			titleAlt(copy1);
		}}>가나다순</button>
		{/* <button onClick={ ()=>{;
			let copy2 = [...title];
			copy2[0]='여자코트 추천';
			titleAlt(copy2);
		}}>여자</button> */}
		{/* <div className="list">
			<h3>{ title[0] }<span onClick={ ()=>{ 
				if(sum==0) {
					tastyAlt(1), heartAlt("❤️"), sum++;
				} else if(sum==1) {
					tastyAlt(0), heartAlt("🖤"), sum--;
				} } }>{ heart }</span> {tasty} </h3>
			<p>2월 17일 발행</p>
			<hr/>
		</div>
		<div className="list">
			<h3>{ title[1] }</h3>
			<p>2월 17일 발행</p>
			<hr/>
		</div>
		<div className="list">
			<h3 onClick = { () =>
				{
					if(modal == false){
						modalAlt(true);
					} else if( modal == true){
						modalAlt(false);
					} //-> 이걸 modalAlt(!modal)로 줄이기 가능 why? !는 자료를 반대로 바꿔준다,,
				}
			}>{ title[2] }</h3>
			<p>2월 17일 발행</p>
			<hr/>
		</div> */}
		{
			title.map (function (a, i) {
				return (
					<div className="list">
						<h3 onClick = { () => { numAlt(i); modalAlt(true); } } > { a }
							<span onClick={ (e) => { 
								e.stopPropagation();
								let gcopy = [...good];
								gcopy[i]++;
								goodAlt(gcopy); } } > 👍 </span> 
							{ good[i] } </h3>
						<p>2월 17일 발행</p>
						<button onClick={ () => {
							let tcopy = [...title];
							tcopy.splice(i, 1);
							titleAlt(tcopy);
							let gcopy = [...good];
							gcopy.splice(i, 1);
							goodAlt(gcopy);
						} }>삭제</button>
						<hr/>
					</div>
				)
			} )
		}
		<input onChange={ (e) => { 
			inpAlt(e.target.value); 
			} }/>
		<button onClick={ () => {
			let tcopy = [...title];
			let gcopy = [...good];
			gcopy.unshift(0);
			tcopy.unshift(inp);
			goodAlt(gcopy);
			titleAlt(tcopy);
		} }>발행</button>
		{
			modal == true ? <Modal num= {num} title={title} titleAlt={titleAlt}/> : null
		}
	</div>
	);
}

function Modal(props) {
	let i=0;
	return(
		<div className = "modal">
			<h4>{props.title[props.num]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
			<button>수정</button>
		</div>
	)
}

export default App;