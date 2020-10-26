import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfSignIn11161625Reducer from '../features/CopyOfSignIn11161625/redux/reducers'
import SignIn11161615Reducer from '../features/SignIn11161615/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfSignIn11161625: CopyOfSignIn11161625Reducer,
SignIn11161615: SignIn11161615Reducer,

});