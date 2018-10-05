import * as actionTypes from '../actions';

const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({id: new Date(), val: action.result})
            }
        case actionTypes.DEL_RESULT:
            const updatedArray = state.result.filter((result, index) => result.id !== action.resultId);
            return {
                ...state,
                result: updatedArray
            }
        default:
}             
    return state;
}

export default reducer;