import { useContext } from "react";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ButtonContext from "./context/ButtonContext";

function MainApp() {
    const { user } = useContext(UserContext);
    const { clicked } = useContext(ButtonContext);
    if(clicked && user)
      return(<Login/>);
    return (
      <>
        {!user && <Login />}
        {user && <Profile />}
      </>
    );
  }
  
  export default MainApp;