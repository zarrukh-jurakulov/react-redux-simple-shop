import {ActionTypes} from '../constants/actionTypes'
import axios from 'axios'

export const getProducts = () => async(dispatch) => {
    await axios
    .get("https://fakestoreapi.com/products")
    .then((response)=>
        dispatch({
            type : ActionTypes.SET_PRODUCTS,
            payload : response.data
        })
    ).catch((error) => {
        dispatch({
            type : ActionTypes.ERROR_GET_PRODUCTS,
            payload : error
        })
    })
}

export const getSingleProduct = () => async(dispatch) => {
    await axios
    .get("https://fakestoreapi.com/products/1")
    .then((response) => 
        dispatch({
            type : ActionTypes.SELECTED_PRODUCT,
            payload : response.data
        })
    ).catch((error) => {
        console.log(">> Error :", error);
        dispatch({
            type : ActionTypes.ERROR_GET_PRODUCTS
        })
    })

}