import * as ACTION_TYPES from "./../constants/action-types";

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}

export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}

export const appLoadingInprogress=()=>{
    
    return {
        type: ACTION_TYPES.APP_LOADING_INPROGRESS
    }
}

export const appLoadingSuccess = () => {
    return{
        type:ACTION_TYPES.APP_LOADING_SUCCESS
    } 
}