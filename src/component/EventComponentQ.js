import { useState } from "react";

const EventComponentQ = () => {

    const [food, setFood] = useState('');
    const handleOption = (e) => {
        setFood(e.target.value);
    }
 
    return(
        <>
            <h3>셀렉트 태그 핸들링(실습)</h3>
            셀렉트 태그가 체인지될 때 선택된 결과를 아래에 출력
            <br/><br/>
            <select onChange={handleOption}>
                <option /* selected */ disabled>=선택=</option>
                <option>피자</option>
                <option>햄버거</option>
                <option>치킨</option>
            </select>
            
            <h3>선택한 결과</h3>
            {food}
        </>
    )
}

export default EventComponentQ;