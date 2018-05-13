
const initState = {
    available: false,
    allCars: [],
    isLoading: false,
    isError:false
}

var getCar = () => {

}
export default function carReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_CAR':
            console.log("getting car")
            return {
                ...state,
            };
        case 'LOADED_CARS':
            return {
                ...state,
                allCars: action.payload
            }
        case 'LOADING':
        console.log("in loading the cars")
            return {
                ...state,
                isLoading: true
            }
        case 'ERR':
            console.log("in the error",action.payload)
            return {
                ...state,
                isError: true
            }
        default:
            return { ...state };
    }
}