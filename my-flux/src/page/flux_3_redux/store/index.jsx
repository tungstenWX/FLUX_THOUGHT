import {createStore,combineReducer} from 'redux'
import { countReducer } from './reducers/count'
//负责合并所有的reducer
const reducers = combineReducer({
    //state:对应的reducer
    count:countReducer,
    // ...
})

//页面初始会自动执行一次reducers
//所以需要有初始值处理
const store =createStore(reducers)

export default store