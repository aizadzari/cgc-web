import React, { createContext, useEffect, useReducer } from 'react'
import { Reducer } from './Reducer'
import { ActionsType } from './ActionsType';
import { getPost } from './_api';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, {
        data_list: []
    });

    useEffect(() => {
        getPost().then(response => {
            dispatch({
                type: ActionsType.GET_POSTS,
                payload: response
            })
        }).catch(err => {

        })
    }, [])
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider