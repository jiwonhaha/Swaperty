import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

/*
  Context 
  react hook is used to create common data that can be accessed throughout
  the component hierarchy without passing the props down manually to each level.
*/
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  // If there is token default value would be the token, otherwise null
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  // decrypt the token and get user otherwise null
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  let [loading, setLoading] = useState(true);

  const navigate = useNavigate();


  // UserID and password will be sent with JSON format to "api"
  // If the user successes login, token will be stored in localstorage and redirect to "home" page
  let loginUser = async (e) => {
    e.preventDefault();
    console.log("From submitted");
    let response = await fetch("/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body of that data to post to the address
      // Make sure that the target name must be same as <input *name= *>
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    // submit the form and we should get back access and refresh token
    // **The thing that we should do is refresh toekn will be stored in cookie

  let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
  };

  let logoutUser = () => {
    // let response = await fetch("/token/logout", {
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json",
    //     "Authorization": "Bearer",
    //   },
    //   body: JSON.stringify({
    //     refresh: authTokens.refresh,
    //   })
    // })
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  let updateToken = async () => {
    console.log("Update Token call");
    let response = await fetch("/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens.refresh,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  // Token should be updated every 3000 ms
  useEffect(() => {
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
