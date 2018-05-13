
const initState={
    allCars:[]
}

export default function carReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_CAR':
            return {
                ...state,
               
            };
        default:
            return {...state};
    }
    return state;
}