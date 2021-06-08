import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers/index'
import thunk from 'redux-thunk'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(reducer, composedEnhancer)

export default store