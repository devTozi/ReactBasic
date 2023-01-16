import { useState } from "react";

const EventComponentQ2 = () => {

    const [data, setData] = useState({name : '', topic : ''});
    const handleChange = (e) => {
        setData({...data, name : e.target.value});
    }
    const addMsg = (e) => {
        setData({name : '', topic : data.name});
    }

    // const [data, setData] = useState('');
    // const handleChange = (e) => {
        // 비동기적 변경으로 출력 시에는 change가 일어나기 한 단계 전 데이터가 출력됨
    //     setData(e.target.value); 
    // }

    // const [msg, setMsg] = useState('');
    // const addMsg = (e) => {
    //     setMsg(data);
    //     setData('');
    // }
    
    return(
        <>
            <h3>인풋데이터 핸들링(실습)</h3>
            클릭 시 데이터는 공백으로 결과는 인풋 입력값으로 처리 (스테이트 2개 사용)

            <input type="text" onChange={handleChange} value={data.name}/>
            <button type="button" onClick={addMsg}>추가하기</button>

            <h3>결과</h3>
            {data.topic}
        </>
    )
}

export default EventComponentQ2;