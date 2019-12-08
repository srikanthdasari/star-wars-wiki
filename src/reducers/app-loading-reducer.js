import * as ACTION_TYPES from "../constants/action-types";

export const initialState = {
    isAppReady:false
}

export const AppLoadingReducer = (state=initialState,action) => {
    switch(action.type) {
        case ACTION_TYPES.APP_LOADING_SUCCESS:
            return {
                ...state,
                isAppReady:true
            }
        case ACTION_TYPES.APP_LOADING_INPROGRESS:
            return {
                ...state
            }
        default: return state
    }
}