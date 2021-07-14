import { combineReducers } from "redux";
import people from "./reducer/peopleReducer";
import planet from "./reducer/planetReducer";
import ships from "./reducer/shipsReducer";
import single from "./reducer/singleReducer";
import { searchPeople, searchShips } from "./reducer/searchReducer";

const rootReducer = combineReducers({
  people,
  ships,
  planet,
  single,
  searchPeople,
  searchShips
});

export default rootReducer;
