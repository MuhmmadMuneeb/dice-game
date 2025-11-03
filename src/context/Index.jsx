import React, { createContext ,useRef} from 'react'

export const scrollContex = createContext()

const Index = ({children}) => {
    const playGame = useRef(scrollContex)
    const handlescroll = () => {
        playGame.current.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <div>
            <scrollContex.Provider value={{playGame,handlescroll}}>
                {children}
            </scrollContex.Provider>
        </div>
    )
}

export default Index
