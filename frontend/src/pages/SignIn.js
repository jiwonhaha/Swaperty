import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Auth/authentication/AuthContext";
import classes from "./pagesCss/SignIn.module.css";
import Card from "../ui/Card";

const SignInPage = () => {
  let { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <Card>
      <form className={classes.form} onSubmit={loginUser}>
        <div className={classes.control}>
          <label htmlFor="username">Email</label>
          <input type="text" required id="username" name="username" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">User password</label>
          <input type="password" required id="password" name="password" />
        </div>
        <div className={classes.register}>
          <button onClick={e => {navigate("/Gdpr")}}>
            Register
          </button>
        </div>
        <div className={classes.actions}>
          <button>Sign In</button>
        </div>
      </form>
    </Card>
  );
};

export default SignInPage;