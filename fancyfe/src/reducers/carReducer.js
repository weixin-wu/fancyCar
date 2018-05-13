
const initState = {
    available: false,
    allCars: [],
    isLoading: false,
    isError: false,
    showMenu: false
}
//this method is copied from stack overflow
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];

        x = x.toLowerCase();
        y = y.toLowerCase();

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
var sort = (name, state) => {
    let cars = state.allCars;
    if (name === 'name') {
        sortByKey(cars, name);
        return cars;
    } else {
        sortByKey(cars, "available");
        return cars;

    }
}

export default function carReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_CAR':
            console.log("getting car")
            return {
                ...state,
            };
        case 'LOADED_CARS':
            console.log("loaded car")
            return {
                ...state,
                allCars: action.payload,
                isLoading: false,
                isError: false
            }

        case 'LOADING':
            console.log("in loading the cars")
            return {
                ...state,
                isLoading: true
            }

        case 'ERR':
            console.log("in the error", action.payload)
            return {
                ...state,
                isError: true
            }
        case "SORT":
            let cars = sort(action.payload, state);
            return {
                ...state,
                allCars: cars
            }
        case "SHOW_MENU":
            let show = !state.showMenu;
            return {
                ...state,
                showMenu: show
            }
        default:
            return { ...state };
    }
}