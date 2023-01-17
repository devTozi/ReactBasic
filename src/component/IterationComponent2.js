import { useState } from "react";

const IterationComponent2 = () => {

    // 1. 반복할 데이터(state로 관리)
    const arr = [
        {id: 1, topic: 'hello'},
        {id: 2, topic: 'bye'},
        {id: 3, topic: 'see you'}
    ]
    const [list, setList] = useState(arr);

    // 2. map 함수를 이용해서 li 태그 생성
    const newList = list.map(item =>
        <li key={item.id} onDoubleClick={() => handleRemove(item.id)}>
            {item.topic}
        </li>);

    // 3. 인풋데이터 관리
    const [data, setData] = useState('');
    const handleChange = (e) => setData(e.target.value);
 
    // 4. 추가하기 버튼 클릭 시 input의 값을 마지막에 추가
    const handleClick = () => {
        let obj = {id: list[list.length-1].id+1, topic: data};
        // list.push(obj); // state를 직접 변경하면 안됨
        // 원본 리스트를 수정하지 않고 새로운 배열을 반환시킴
        const newArr = list.concat(obj);
        setList(newArr);
        setData('');
    }

    // 5. 삭제 기능
    // 익명함수는 호이스팅 불가능
    // 이벤트 안에서 함수를 호출로 연결하는 방법
    // onClick={() => 함수()}
    const handleRemove = (a) => {
        // a값 === 해당 태그의 key값
        // filter 사용
        const newList = list.filter(item => item.id !== a);
        setList(newList);
    }

    return(
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data}/>
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IterationComponent2;