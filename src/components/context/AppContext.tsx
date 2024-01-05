import React from "react";
import { createContext } from "react";

type AppContextType = {
    todo: {text: string, checked: boolean}[];
    user:{name: string, email: string}[];
 
}

export const AppContext = createContext<AppContextType>({
    todo: [],
    user: [],
 
})

export const AppContainer = ({children}: any) => {
    const [todo, setTodo] = React.useState<[]>([])
    const [user, setUser] = React.useState<[]>([])
 
    React.useEffect(() => {
        setUser([])
        setTodo([])
    }, [])

    const methodsToExport = {
        todo,
        user,
        setTodo,
        setUser
    }
    
    return (
        <AppContext.Provider value={methodsToExport}>
            {children}
        </AppContext.Provider>
    )
}