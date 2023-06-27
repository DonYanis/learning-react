import React, {createContext, useContext, useState} from 'react'

//create context
const ThemeContext = createContext()
const UpdateThemeContext = createContext()

//custom hooks
export function useTheme(){
    return useContext(ThemeContext)
}

export function useUpdateTheme(){
    return useContext(UpdateThemeContext)
}

//context provider
export function ThemeContextProvider({children}){
    //theme state
    const [darkTheme, setDarkTheme] = useState(true)

    //toggle theme function
    function toggleTheme(){
        setDarkTheme(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={toggleTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}