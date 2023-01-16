import { useState } from "react";

const EventComponent2 = () => {

    // state를 객체로 관리
    const [data, setData] = useState({name : '', topic : ''});

    const handleChange = (e) => {
        // 객체 안에서 key를 바꾸는 방법 > ['키'] : 값
        const copy = {...data, [e.target.name] : e.target.value}; // 데이터 복사
        // console.log(copy);
        setData(copy);
    }
    // const handleTopic = (e) => {
    //     const copy = {...data, ['topic'] : e.target.value};
    //     setData(copy);
    // }

    const handleClick = () => {
        alert(`${data.name}님의 할 일: ${data.topic}`);
        setData({name : '', topic : ''});
    }

    return(
        <>
            <h3>리액트 이벤트 핸들링(객체형)</h3>
            <input type="text" name='name' onChange={handleChange} value={data.name}/>
            <h4>결과: {data.name}</h4>
            <input type="text" name='topic' onChange={handleChange} value={data.topic}/>
            <h4>결과: {data.topic}</h4>
            <button type="button" onClick={handleClick}>클릭</button>
        </>
    )
}

export default EventComponent2;