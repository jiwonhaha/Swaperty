import { Link } from "react-router-dom";
import { useContext, useEffect , useState} from "react";
import classes from "./MainNavigation.module.css";
import logo from "../Images/logo.svg";
import AuthContext from "../../Auth/authentication/AuthContext";
import letter from "../Images/letter.svg"

function MainNavigation() {
  let {user, logoutUser} = useContext(AuthContext)
  
  const[on, seton] = useState(false);
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} alt="swaperty logo"></img>
        </Link>
      </div>
      <nav>
        <ul>
          <li >
            <Link to={`/`}>Home</Link>
          </li>
          <li >
            {user ? (<Link to={`/myAccount/${user.user_id}`}>My Account</Link>) : (<Link to="/signIn"><div>My Account</div></Link>)}
          </li>
          <li >
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            {user ? (<Link to="/"><div onClick={logoutUser}>Log out</div></Link>) : <div><Link to="/signIn">
              <div>Sign In</div></Link></div>}
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
