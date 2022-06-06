import { useRef } from "react";
import { Link } from "react-router-dom";

import Card from "../../ui/Card";
import classes from "./SignInForm.module.css";

function SignInForm(props) {
  const userIdRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUserId = userIdRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userData = {
      userId: enteredUserId,
      password: enteredPassword,
    };

    props.signInUser(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="userID">User Id</label>
          <input type="text" required id="userID" ref={userIdRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">User password</label>
          <input type="password" required id="password" ref={passwordRef} />
        </div>
        <div className={classes.register}>
          <button>
            <Link to="/Gdpr">register</Link>
          </button>
        </div>
        <div className={classes.actions}>
          <button>Sign In</button>
        </div>
      </form>
    </Card>
  );
}

export default SignInForm;
