import React,{ useContext,useState } from 'react';

const AppContext = React.createContext;

const AppProvider =({children}) => {
    const[test,setTest] = useState('hello')
    return (
        <AppContext.Provider value={{
test,
        }}>
            {children}
        </AppContext.Provider>
    )
    }

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
