import {applyMiddleware, combineReducers, createStore} from "redux";
import AddCartReducer from "./reducers/addCartReducer";
import CounterReducer from "./reducers/counterReducer";
import thunk from 'redux-thunk'
import dataImgReducer from "./reducers/dataImgReducer";

const rootReducer = combineReducers({
	AddCartReducer,
	CounterReducer,
	dataImgReducer
})

const customMiddleware = store => next => action => {

	const actionModif = {
		type:'ADDCART',
		payload:789
	}
	next(actionModif)

}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;