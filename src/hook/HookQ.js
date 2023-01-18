import { useEffect, useRef, useState } from "react";


const HookQ = () => {

    /* 
        1. 컴포넌트가 마운트된 이후 한번만 id 태그에 포커스를 준다.

        2. id, pw는 state로 관리
        로그인 버튼 클릭 시 공백인 부분이 있다면 해당 부분에 포커스 주기
        로그인 버튼 클릭 시 공백이 없다면 경고창으로 id, pw 출력하기
    */
    const inputId = useRef();
    const inputPw = useRef();
    useEffect(() => {
        inputId.current.focus();
    }, []);

    const [user, setUser] = useState({id: '', pw: ''});
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    
    const handleLogin = () => {
        if(user.id === '') inputId.current.focus();
        else if(user.pw === '') inputPw.current.focus();
        else {
            alert(`id: ${user.id} pw: ${user.pw}`);
            setUser({id: '', pw: ''});
        }    
    }

    return(
        <div>
            <h3>훅 실습</h3>
            <input type="text" name="id" placeholder="아이디" onChange={handleChange} ref={inputId} value={user.id}/>
            <input type="password" name="pw" placeholder="비밀번호" onChange={handleChange} ref={inputPw} value={user.pw}/>
            <button onClick={handleLogin}>로그인</button>
        </div>
    )
}
export default HookQ;