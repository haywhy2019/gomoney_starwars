import { combineReducers } from "redux";
import people from "./reducer/peopleReducer"
import planet from "./reducer/planetReducer"
import ships from "./reducer/shipsReducer"

const rootReducer = combineReducers({
    people,
    ships,
    planet

})


export default rootReducer