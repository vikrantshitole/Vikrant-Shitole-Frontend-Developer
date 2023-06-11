const spacex = (state={},action)=>{
    let newState;
    console.log(state,action);
    switch(action.type){
        case 'SET_ISCAPSULE':
            newState = Object.assign({},state);
            newState.is_capsulse = action.is_capsulse;
            console.log(newState);
            return newState;
         default:
            return state;
    }
}
export default spacex