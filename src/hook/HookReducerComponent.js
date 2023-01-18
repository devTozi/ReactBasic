
const myReducer = (state, action) => {
    // action은 객체
    // console.log(state);
    // console.log(action);
    if(action.type === 'increase'){
        state = {value : state.value +1};
    }else if(action.type === 'decrease'){
        state = {value : state.value -1};
    }else if(action.type === 'reset'){
        state = {value : 0};
    }
    return state;
}

const nameReducer = (state, action) => {
    // console.log(action); // e.target
    state = {...state, [action.name] : action.value};
    // console.log(state);
    return state;
}

export {myReducer, nameReducer};