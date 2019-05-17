import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

//路由标题修改
import router_data from './router_redux'

let Reducer  = combineReducers({
    router_data
})

const store = createStore(Reducer, applyMiddleware(thunk))

export default store 