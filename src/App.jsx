import MainApp from './MainApp';
import UserContextProvider from './context/UserContextProvider'
import ButtonContextProvider from './context/ButtonContextProvider'

function App() {

  return (
    <UserContextProvider>
      <ButtonContextProvider>
        <MainApp />
      </ButtonContextProvider>
    </UserContextProvider>
  )
}

export default App;
