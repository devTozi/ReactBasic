import { useState } from "react";

const StateComponentQ = () => {
    let [data, setData] = useState(0);

    return (
        <>
            <h3>실습</h3>
            <h3>카운트: {data}</h3>
            {/* data++ or data-- 사용 시 직접적으로 data값을
                변경시키는 것이므로 올바르지 못한 방법임, 아래처럼 해야 함 */}
            <button onClick={() => setData(data+1)}>증가</button>
            <button onClick={() => setData(data-1)}>감소</button>
            <button onClick={() => setData(0)}>초기화</button>
        </>
    )
}

export default StateComponentQ;