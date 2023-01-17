/*
    이미지를 가져오는 방법
    1. 외부 서버에서 경로를 참조받음 (가장 일반적인 방법)
    2. src폴더 밑에 img 파일 참조 (선호되지 않는 방법)
    3. public폴더 밑에 넣는 경우 이미지 바로 참조 가능
*/

import { useState } from "react";

/* import img1 from '../img/img1.png'; */

const IterationComponentQ = () => {

    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ]
    const newArr = arr.map((item, idx) =>
        <div key={item.src} onClick={() => handlePick(idx)}>
            <img src={item.src} alt="제목" width="100" />
            <p>제목: {item.title}</p>
            <p>가격: {item.price}</p>
        </div>
    );
    
    const [img, setImg] = useState('');
    const handlePick = (a) => {
        // console.log(newArr[a].props.children[0]);
        setImg(newArr[a].props.children[0]);
    };

    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="200px" />
            <img src={img1} alt="제목" width="200px" /> */}
            {/* <img src="/img/img1.png" alt="제목" width="200px" /> */}


            {/* 선택영역 */}
            {img}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {/* 리스트영역 */}
                {newArr}
            </div>
        </>
    )
}

export default IterationComponentQ;