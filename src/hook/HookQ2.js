import { useRef, useState } from "react";


const HookQ2 = () => {

    /* 
        할 일 목록 만들기
        1. state는 {todo: '', list: []}로 관리
        2. 할 일을 작성하고 등록 버튼 클릭 시 list에 
           인풋에 값을 추가하고 map을 통해서 화면을 그리기
        3. 등록된 이후에는 ref를 활용해서 input태그에 포커싱 주기
    */

    const inputTag = useRef();
    const [data, setData] = useState({todo: '', list: []});
    const handleTodo = (e) => {
        setData({...data, [e.target.name] : e.target.value});
    }
    const addTodo = () => {
        const newList = data.list.concat(data.todo);
        setData({todo : '', list : newList});
        inputTag.current.focus();
    }
    const viewArr = data.list.map((a, b) => <li key={b}>{b+1}. {a}</li>);
    const enter = (e) => {if(e.keyCode === 13) addTodo();}

    return(
        <div>
            <h3>ref로 할 일 목록 만들기</h3>
            <input type="text" name="todo" placeholder="할 일 작성" 
                               onChange={handleTodo} value={data.todo} 
                               ref={inputTag} onKeyDown={enter}/>
            <button onClick={addTodo}>등록</button>
            <ul>
                {viewArr}
            </ul>
        </div>
    )
}
export default HookQ2;