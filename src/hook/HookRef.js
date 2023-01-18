import { useRef, useState } from "react";


const HookRef = () => {
    // 사용자 입력값 data, 화면에 출력값 result
    const [form, setForm] = useState({data : '', result : ''});
    const handleChange = (e) => {
        setForm({...form, ['data'] : e.target.value});
    }
    // console.log(form);

    // 등록
    const handleClick = () => {
        setForm({data: '', result: form.data});

        // console.log(inputTag.current.value);
        inputTag.current.focus();
    }

    // 특정 태그에 이름달기 useRef()
    // 반환된 이름을 사용할 태그에 ref 속성에 넣는다.
    const inputTag = useRef();

    return(
        <>
            내용: <input type='text' onChange={handleChange} value={form.data} ref={inputTag}/>
            <button onClick={handleClick}>등록</button>
            <br/>
            결과: {form.result}
        </>
    )
}

export default HookRef;