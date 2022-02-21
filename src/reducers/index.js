import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import inputReducer from "./InputReducer";

import listReducer from "./ListReducer";
const allReducers=combineReducers({
    list:listReducer,
    input:inputReducer,
    counter:counterReducer

})
export default allReducers