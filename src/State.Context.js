import { createContext } from 'react'


const State = createContext({
    Menu : null,
    triggerMenu: () => {} 
})

export default State