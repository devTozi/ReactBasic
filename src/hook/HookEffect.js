import { useEffect, useState } from "react";

const HookEffect = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }

    // useEffect(함수, []) - 화면이 mount된 이후에 동작
    // useEffect(() => {
    //     console.log(`렌더링 완료 - state값: ${name}`);
    // });
    // console.log(1);

    // useEffect(함수, []) - 화면 첫번째 mount에서만 실행
    // useEffect(() => {
    //     console.log('처음만 실행');
    // }, []);

    // useEffect(함수, [state]) - 해당 state가 변경될 때만 실행
    // (최초 mount에서도 실행)
    useEffect(() => {
        console.log(`age or name 변경 시 실행`);
    }, [age, name]);

    return(
        <>
            이름: <input type="text" onChange={handleName} /><br/>
            나이: <input type="number" onChange={handleAge}/><br/>

            이름: {name} / 나이: {age}
        </>
    )
}

export default HookEffect;