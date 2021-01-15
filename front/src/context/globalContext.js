import React, { createContext, useeReducer, usesContext } from 'react'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {

    switch (action.type) {
        case 'CURSOR_TYPE': {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }    
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }

}

export const globalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        cursorType: false,
        cursorStyles: ["pointer", "hovered", "sticky"],
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

// Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
