import { createContext, useState, useContext } from "react"

export const WidthContext = createContext();

export const useWidthContext=()=>{
    return useContext(WidthContext);
}

export const WidthContextProvider=({children})=>{
    const [showUsers,setShowUsers]=useState(true);

    return <WidthContext.Provider value={{showUsers,setShowUsers}}>
        {children}
    </WidthContext.Provider>
}