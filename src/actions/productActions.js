import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PROUCT_CREATE_REQUEST,
    PROUCT_CREATE_SUCCESS,
    PROUCT_CREATE_FAIL,
    PROUCT_DELETE_REQUEST,
    PROUCT_DELETE_SUCCESS,
    PROUCT_DELETE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL
}
from '../constants/productConstant'
import axios from 'axios'

export const createProductAction = (pic , namecar , factory , distance , skills) = (dispatch,getState)=>{
    try{
        dispatch({type: PROUCT_CREATE_REQUEST})
        
        
    }catch(error){
         dispatch({
            type: NOTE_LIST_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
         });
    }
}