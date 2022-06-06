import { useRef } from "react";

import Card from "../../ui/Card";
import classes from "./NewHouseForm.module.css";

function NewHouseForm(props) {
  const userIdRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventfault();

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
          <input type="text" required id="password" ref={userIdRef} />
        </div>
        <div className={classes.actions}>
          <button>Sign In</button>
        </div>
      </form>
    </Card>
  );
}

export default NewHouseForm;
