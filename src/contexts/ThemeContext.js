import { createContext, useContext, useMemo, useState } from "react"

export const langs = {
    ka:'ვაჟკაცსა გული რკინისა',
    en: 'a brave mans heart is iron'
}

const ThemeContext = createContext(null)

const ThemeContextProvider = ({children}) => {
    const [eng, setEng] = useState(true)

    const contextVal = useMemo(() => ({
        theme: eng ? 'a brave mans heart is iron' : 'ვაჟკაცსა გული რკინისა',
        toggleLangs: () => setEng((prev) => !prev)
    }))

    return <ThemeContext.Provider value={contextVal}>
        {children}
    </ThemeContext.Provider>
}

export const useThemeContext = () => {
    const contextValue = useContext(ThemeContext)
    if(!contextValue) throw new Error('error')
    
    return contextValue
}


export default ThemeContextProvider