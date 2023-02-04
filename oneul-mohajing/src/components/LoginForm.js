import {useNavigate} from 'react-router-dom';
import {useState, useRef} from 'react';
import {getDetail} from '../apis/loginFormApi';
import Loginstyle from '../module/LoginForm.module.css';

function LoginForm () {

    const [loginInfo, setloginInfo] = useState(
        {
            name: '',
            password: ''
        }
    );

    const onChangeHandler = (e) => {
        setloginInfo({
            ...loginInfo,
            [e.target.name] : e.target.value
        })
    };

    const onKeyPressHandler = (e) => {
        if(e.key == 'Enter' || e.code == 'NumpadEnter') {  
            if(getDetail(loginInfo)){
                alert('환영합니다. ');
                Navigate('/months');
            }else{
                alert('아이디 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요');
                setloginInfo({
                    name: '',
                    password: ''
                })
            } 
                nameFocus.current.focus();
        }
    };

    const nameFocus = useRef();
    const Navigate = useNavigate();

    const onClickHandler1 = (e) => {
        if(getDetail(loginInfo)){
            alert('환영합니다. ');
            Navigate('/months');
        }else{
            alert('아이디 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요');
            setloginInfo({
                name: '',
                password: ''
            })
        }
            nameFocus.current.focus();
    }

    const onClickEvent = (true);
    const onClickHandler2 = (e) => {
        if(onClickEvent) {
            alert('현재 준비중인 페이지입니다. 초기화면으로 돌아갑니다.')
        };
    }

    return (
        <>
            <h1 className={Loginstyle.Logo}>오늘 모하징??</h1>
            <div className={Loginstyle.Total}>
                <div className={Loginstyle.Box}>
                <br/><br/><br/><br/>
                <span className={Loginstyle.Span}>ID : </span>
                <input className={Loginstyle.Input} onChange={onChangeHandler} type="text" name="name" placeholder="아이디를 입력하시오" ref={nameFocus} value={loginInfo.name}/>

                <br/><br/>

                <span className={Loginstyle.Span}>PW : </span>
                <input
                    className={Loginstyle.Input} 
                    onChange={onChangeHandler} 
                    onKeyPress={onKeyPressHandler} 
                    type="password" name='password' placeholder="비밀번호를 입력하시오"  
                    value={loginInfo.password}
                />
                <br/><br/>
                </div>

                <div className={Loginstyle.Button1}>
                <button className={Loginstyle.Button11} onClick={onClickHandler1}>로그인</button>
                <br/><br/>
                </div>

                <div className={Loginstyle.Button2}>
                <button className={Loginstyle.Button22} onClick={onClickHandler2}>회원가입</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button className={Loginstyle.Button22} onClick={onClickHandler2}>ID / PW</button>
                </div>
                
            </div>
        </>
    )
}
export default LoginForm;