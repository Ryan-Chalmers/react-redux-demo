import {combineReducers} from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cakeReducer: cakeReducer,
    iceCreamReducer: iceCreamReducer
})

export default rootReducer