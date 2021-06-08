import {combineReducers} from 'redux'
import {setProductsReducer, selectedProductReducer} from './productReducer'

const reducer = combineReducers({
    allProducts : setProductsReducer,
    selectedProduct : selectedProductReducer
})

export default reducer