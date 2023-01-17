
const IterationComponent = () => {

    const arr = [1,2,3,4,5];
    // 일반적인 반복처리
    // const newArr = arr.map(item => item*10);
    // console.log(newArr);

    // 반복처리(태그 사용)
    // 리액트에서 반복 처리 시 고유한 key값을 태그에 작성해야 한다.
    // key는 화면에서 렌더링할때 변화를 감지하기 위해 참조하는 값이다.
    const newArr = arr.map((item, index) => <li key={index}>{item}</li>);
    // console.log(newArr);

    return (
        <>
            <ul>
                {newArr}
            </ul>
        </>
    )
}

export default IterationComponent;