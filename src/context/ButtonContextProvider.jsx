import React from 'react'
import ButtonContext from './ButtonContext'

const ButtonContextProvider = ({children}) => {
    const [clicked, setClicked] = React.useState(true)
  return (
    <ButtonContext.Provider value={{clicked, setClicked}}>
        {children}
    </ButtonContext.Provider>
  )
}

export default ButtonContextProvider