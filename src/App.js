import { Fragment } from "react"
// CSS 파일 링크
import './css/App.css';

// CSS 모듈 파일 링크
import styled from './css/App.module.css';

const App = () => {

    // 직접 스타일링에서 - 은 카멜표기법으로 변경
    const myStyle = {
        color : '#fff',
        textAlign : 'center',
    }

    return(
        <Fragment>
            <header style={{backgroundColor : 'black'}} className='app_header'>
                <p style={myStyle}>헤더(직접 스타일링)</p>
            </header>
            <article className="app_article">
                CSS 파일로 디자인하기
            </article>
            <section className={styled.app_wrap}>
                <div className={styled.app_item}>
                    <p>CSS디자인</p>
                    <input type="text" className="input_control"/>
                    <input type="password" className="input_control"/>
                </div>
            </section>
        </Fragment>
    )
}

export default App;