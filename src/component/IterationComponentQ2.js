import { useState } from "react";

const IterationComponentQ2 = () => {

    // 1. select는 컴포넌트 반복으로 option태그 생성
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    const optionArr = select.map(item => <option key={item}>{item}</option>)
    
    // 2. data는 state로 관리, 화면에 li 태그로 반복
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];
    const [info, setInfo] = useState(data);
    
    const viewArr = info.map(item => 
        <li key={item.id}>{item.type + " - " + item.teacher}</li>
    );

    // 3. 셀렉트박스가 체인지되면 이벤트 객체를 활용해서 
    //    선택된 값만 필터링해서 보여주기
    const handleChange = (e) => {
        const pick = data.filter(a => a.type === e.target.value);
        setInfo(pick);
    }

    // 4. 숙제: 검색 기능 만들기 (
    // 대소문자 구분X, teacher, type에 포함된 데이터만 필터링
    const [serch, setSerch] = useState('');
    const serchText = (e) => {
           setSerch(e.target.value);
    }
    const serchResult = () => {
        const temp = serch.toLocaleLowerCase();
        const result = data.filter(a =>
                a.type.toLocaleLowerCase().includes(temp)
                || a.teacher.toLocaleLowerCase().includes(temp)
            );
        setInfo(result);
        setSerch('');    
    }

    const enter = (e) => {
        if(e.keyCode === 13) serchResult();
    }

    return(
        <>
            <h3>컴포넌트 반복 실습</h3>
            <input type='text' onChange={serchText} onKeyDown={enter} value={serch}/>
            <button type="button" onClick={serchResult}>검색</button><br/>
            <select onChange={handleChange}>
                {optionArr}
            </select>
            <ul>
                {viewArr.length === 0 ? '검색된 데이터가 없습니다.' : viewArr}
            </ul>
        </>
    )

}

export default IterationComponentQ2;