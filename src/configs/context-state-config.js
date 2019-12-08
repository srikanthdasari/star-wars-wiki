import React, {useReducer} from 'react';
import Context from './context';
import * as ACTIONS from './../actions/actions';
import * as Reducer from './../reducers/app-loading-reducer';


export const ContextState = (props) => {
    const [stateReducer, dispatchReducer] = useReducer(Reducer.AppLoadingReducer,Reducer.initialState);

    const handleDispatchAppLoadingInProgress = () => {
        dispatchReducer(ACTIONS.appLoadingInprogress());
    }

    const handleDispatchAppLoadingSuccess = () => {
        dispatchReducer(ACTIONS.appLoadingSuccess());
    }

    return (
        <div>
            <Context.Provider
                value={{
                    // reducer
                    isAppReady: stateReducer.isAppReady,
                    dispatchAppLoading: () => handleDispatchAppLoadingInProgress(),
                    dispatchAppLoaded: () => handleDispatchAppLoadingSuccess()
                }}
            >
                {
                    props.children
                }
            </Context.Provider>
        </div>
    )
}