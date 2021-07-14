import { combineReducers } from "redux";
import people from "./reducer/peopleReducer"
import planet from "./reducer/planetReducer"
import ships from "./reducer/shipsReducer"
import single from "./reducer/singleReducer"

const rootReducer = combineReducers({
    people,
    ships,
    planet,
    single
})


export default rootReducer