import { combineReducers } from 'redux'

import {
    LOAD_JSON,

    RREMOVE_ITEM,
    SHOW_RESULT,
    CLEAR_DATA,
    CHANGE_QUANTITY

 } from '../../config';


const initialState = {dataList:[]}

const dataList = (state = initialState, action) => {
    
    switch (action.type) {
        case LOAD_JSON:
            return{
                ...state,
                dataList : action.dataList,
            }
        
        case RREMOVE_ITEM:
            return {
                ...state,
                dataList : action.dataList,
            }
        
        case CHANGE_QUANTITY:
            return {
                ...state,
                dataList : action.dataList,
            }

        case CLEAR_DATA:
            return initialState

        default:
            return state
    }
}

export default combineReducers({
    dataList
}) 