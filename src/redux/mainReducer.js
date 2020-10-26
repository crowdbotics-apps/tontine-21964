import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn15161797Reducer from '../features/SignIn15161797/redux/reducers'
import SignIn11161615Reducer from '../features/SignIn11161615/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn15161797: SignIn15161797Reducer,
SignIn11161615: SignIn11161615Reducer,

});