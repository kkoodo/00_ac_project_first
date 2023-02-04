import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {searchFunc} from '../apis/HeaderAPI';
import {Weather} from '../apis/WeatherAPI';
import styleHeader from '../module/Header.module.css';

function Header() {

	const [searchTitle, setSearchTitle] = useState('None');
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	const onChangeHandler = (e) => {
		setSearchTitle(e.target.value);
	};

	const onClickHandler = () => { searchFunc(searchValue, searchTitle, navigate); };

	const onKeyPressHandler = (e) => { if(e.key == 'Enter') searchFunc(searchValue, searchTitle, navigate);};

	const onClickHandlerMain = () => {
		navigate('/months');
	 }
	
	 const onClickHandlerO = () => {
		navigate(`/main10`);
	}

	const onClickHandlerN = () => {
		navigate(`/main11`)
	}

	const onClickHandlerD = () => {
		navigate(`/main12`)
	}

	const weaterImoji = Weather();

	const logoutHandler = () => {
		const answer = window.confirm('정말 로그아웃 하시겠습니까??');
		if(answer){
			navigate('/')
		}else{
			navigate('/months')
		}
	}

	return(
		<>
			<div className={styleHeader.backBox}>

				<div className={styleHeader.leftbox}>
					<span className={styleHeader.weather}>
						<img src={weaterImoji}/>
					</span>
					<span className={styleHeader.userName}>일석이조님 안녕하세요!</span>
				</div>
			
				<div>
					<button onClick={onClickHandlerMain} className={styleHeader.button}>달력</button>
					
					<button onClick={onClickHandlerO} className={styleHeader.button}>10월</button>
					<button onClick={onClickHandlerN} className={styleHeader.button}>11월</button>
					<button onClick={onClickHandlerD} className={styleHeader.button}>12월</button>
				</div>

				<div>
					<select 
						id="searchTitle" 
						name="searchTitle" 
						onChange={onChangeHandler}
						className={styleHeader.select}
					>
						<option value="None">항목</option>
						<option value="date">날짜</option>
						<option value="isAnniversary">기념일</option>
						<option value="hashTag">태그</option>
						<option value="schedule">일정</option>
						<option value="spending">지출</option>
					</select>

					<input 
						type="search" 
						name="search"  
						onChange={(e) => {setSearchValue(e.target.value)}}
						onKeyPress={onKeyPressHandler}
						className={styleHeader.input}
						placeholder='검색할 키워드를 입력하세요'
					/>

					<button type='submit' onClick={onClickHandler} className={styleHeader.button}>조회</button>

					<button onClick={logoutHandler} className={styleHeader.logout}>로그아웃</button>
				</div>
			</div>
		</>
	);
};

export default Header;