import { SETISCAPSULSE } from "../actions";

const spacex = (state={},action)=>{
    let newState;
    switch(action.type){
        case SETISCAPSULSE:
            newState = Object.assign({},state);
            newState.is_capsulse = action.is_capsulse;
            console.log(newState);
            return newState;
         default:
            return state;
    }
}
export default spacex