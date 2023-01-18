import { useState } from "react";
import HookEffect from "./hook/HookEffect";
import HookQ from "./hook/HookQ";
import HookQ2 from "./hook/HookQ2";
import HookReducer from "./hook/HookReducer";
import HookReducer2 from "./hook/HookReducer2";
import HookRef from "./hook/HookRef";

const App = () => {

    /* 
        교재 p.233
        1. 필수 훅
        useState()
        컴포넌트에서 상태값을 제어하는 가장 기본이 되는 hook

        useEffect()
        컴포넌트의 라이프사이클(생명주기)를 다룬다.
        mount, mount 이후, state 변경 시, unmount 이전에
        특정 작업을 수행 할 수 있다.

        useRef()
        태그의 이름 달기

        2. 부가적인 훅
        useReducer()
        useState의 사용을 외부에서 사용할 수 있게 해주는 훅(state의 변경을 외부에서 제어 가능)
        const [현재값, 리듀서를 업데이트할 수 있는 함수] = useReducer(외부에서 사용할 리듀서 함수, 리듀서의 초기값)
    */

    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        // console.log(visible);
        setVisible(!visible); // visible이 가진 반대값
    }

    return(
        <>
            {/* effect훅 */}
            <button onClick={handleClick}>{visible ? '숨기기' : '보이기'}</button>
            <br/>
            {visible ? <HookEffect/> : null}
            <hr/>
            {/* ref훅 */}
            <HookRef/>
            <hr/>
            {/* 실습 */}
            <HookQ/>
            <hr/>
            <HookQ2/>
            <hr/>
            {/* reducer훅 */}
            <HookReducer/>
            <hr/>
            <HookReducer2/>    
        </>
    )
}

export default App;