import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";


const App = () => {
    
    /* 
        교재 p.87
        컴포넌트 선언방법은 크게 2가지 (함수형, 클래스)

        모듈 내보내기 export default
        모듈 가져오기 import ~~ from 경로

        교재 p.96(props)
        1. 상위 컴포넌트에서 하위 컴포넌트로 전달하는 매개변수
        2. 객체 형태로 전달되기 때문에 {}로 값을 받는다.
        3. props는 읽기전용이다 (값은 부모에서 바꿔서 전달)
    */

    return (
        <Fragment>
            <h3>나의 App.js</h3>
            {/* 함수형 props */}
            <MyComponent name={'홍길동'} age={20} email={'aa@naver.com'}/>
            ====================
            <MyComponent2 name={'이순신'}/><br/>
            ====================
            <MyComponent2 name={'홍길자'}/><br/>
            ====================
            {/* 클래스형 props */}
            <MyComponent3 name={'강감찬'}/>
        </Fragment>
    )
}

export default App;
