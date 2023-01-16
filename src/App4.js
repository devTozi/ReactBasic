import EventComponent from "./component/EventComponent";
import EventComponent2 from "./component/EventComponent2";
import EventComponentQ from "./component/EventComponentQ";
import EventComponentQ2 from "./component/EventComponentQ2";

const App = () => {

    /* 교재 p.121 */

    return(
        <>
            <EventComponent/>
            <hr/>
            <EventComponent2/>
            <hr/>
            <EventComponentQ/>
            <hr/>
            <EventComponentQ2/>
        </>
    )
}

export default App;