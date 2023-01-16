import { Fragment } from "react";
import PropTypes from 'prop-types'; // props 타입 검증

const MyComponent = (/* props */ {name, age, email, addr}) => {

    // console.log(props);

    // 1st
    // const a = props.name;
    // const b = props.age;
    // const c = props.email;

    // 2nd
    // const {name, age, email} = props;

    return(
        <Fragment>
            <div>나의 첫번째 컴포넌트</div>
            <div>props name : {name}</div>
            <div>props age : {age}</div>
            <div>props email : {email}</div>
            <div>default props addr : {addr}</div>
        </Fragment>
    )
}

/* props의 기본값 지정하기 컴포넌트명.defaultProps = {} */
MyComponent.defaultProps = {
    name : '이름없음',
    age : 0,
    email : '지정안됨',
    addr : '서울시' // 매개변수로 전달된 값만 default로 지정 가능
}

/* props의 타입 검증 컴포넌트명.propTypes = {} */
MyComponent.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    email : PropTypes.string.isRequired // 문자열 타입, 반드시 전달
}


export default MyComponent;