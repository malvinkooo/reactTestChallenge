import initialState from "./initialState.js";
import reducer from "./reducers.js";
import * as actionTypes from "./actionTypes.js";
import * as actions from "./actions.js";


const Store = {
    initialState,
    reducer,
    actionTypes,
    actions
};

export default Store;
