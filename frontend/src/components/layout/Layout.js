import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import React, { Fragment } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { DatePicker, Input } from "antd";

const Layout = ({ children }) => {
  const location = useLocation();
  const nativate=useNavigate()
  console.log(location.pathname)
  let urlName = "";
  let hd = "houseDetail"
  let ma = "myAccount"
  let re = "sendRequest"
  let up = "updateHouse"
  let de = "requestview"
  let li = "houseList"
  if(location.pathname.includes(hd)){
    urlName = "/houseDetail/"
  }
  else if(location.pathname.includes(ma)){
    urlName = "/myAccount/"
  }
  else if(location.pathname.includes(re)){
    urlName = "/sendRequest/"
  }
  else if(location.pathname.includes(up)){
    urlName = "/updateHouse/"
  }
  else if(location.pathname.includes(de)){
    urlName = "/requestview/"
  }
  else if(location.pathname.includes(li)){
    urlName = "/houseList/"
  }
  else {
    urlName = location.pathname
  }
  
  switch (urlName) {
    case "/":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
            </div>
          </section>

          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/myAccount/":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
              <br />
              <br />
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                My Account
              </div>
            </div>
          </section>

          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/contactUs":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Hi, there
              <br />
              <div
                style={{
                  margin: "auto",
                  color: "black",
                  fontWeight: "bold",
                  fontsize: 30,
                }}
              >
                How can we help?
              </div>
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                Contact Us
              </div>
            </div>
          </section>

          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/signIn":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
              <br />
              <br />
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                Sign In
              </div>
            </div>
          </section>

          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/register":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
              <br />
              <br />
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                Sign up
              </div>
            </div>
          </section>

          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/registerHouse":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
              <br />
              <br />
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                Register house
              </div>
            </div>
          </section>
          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/houseList/":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
              <br />
              <br />
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                House List 
              </div>
              {/* <br />
              <div className={classes.filters}>
                <DatePicker
                  placeholder="Swap in"
                  className={classes.input}
                  onChange={(e) => {}}
                />
                <DatePicker
                  placeholder="Swap out"
                  className={classes.input}
                  onChange={(e) => {}}
                />
                <span className={classes.label}>From</span>
                <Input
                  placeholder="Birmingham"
                  className={classes.input}
                ></Input>
                <span className={classes.label}>To</span>
                <Input
                  placeholder="2 adults    0 children"
                  className={classes.input}
                ></Input>
                <button className={classes.searchButton}>Search</button>
              </div> */}
            </div>
          </section>
          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/Gdpr":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
              <br />
              <br />
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                GDPR{" "}
              </div>
            </div>
          </section>
          <main className={classes.main}>{children}</main>
        </Fragment>
      );
      case "/ResetPassword":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Change the password
              <br />
              <br />
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
              </div>
            </div>
          </section>
          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/sendRequest/":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
              <br />
              <br />
              <div className={classes.filters}>
                <DatePicker
                  placeholder="Swap in"
                  className={classes.input}
                  onChange={(e) => {}}
                />
                <DatePicker
                  placeholder="Swap out"
                  className={classes.input}
                  onChange={(e) => {}}
                />
                <span className={classes.label}>From</span>
                <Input
                  placeholder="Birmingham"
                  className={classes.input}
                ></Input>
                <span className={classes.label}>To</span>
                <Input
                  placeholder="2 adults    0 children"
                  className={classes.input}
                ></Input>
                <button className={classes.searchButton}>Search</button>
              </div>
            </div>
          </section>
          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/houseDetail/":
      return (
        <Fragment>
          <MainNavigation />
          <section>
            <div className={classes.head}>
              Temporarily swap property for free
              <br />
            </div>
          </section>
          <main className={classes.main}>{children}</main>
        </Fragment>
      );
    case "/updateHouse/":
        return(
          <Fragment>
            <MainNavigation />
            <section>
              <div className={classes.head}>
                Update your house
                <br />
              </div>
            </section>
            <main className={classes.main}>{children}</main>
          </Fragment>
        )
    case "/requestview/":
          return (
            <Fragment>
              <MainNavigation />
              <section>
                <div className={classes.head}>
                  Send a request for swap
                  <br />
                </div>
              </section>
              <main className={classes.main}>{children}</main>
            </Fragment>
          );
    
          case "/houseListAll":
            return (
              <Fragment>
                <MainNavigation />
                <section>
                  <div className={classes.head}>
                    Send a request for swap
                    <br />
                  </div>
                </section>
                <main className={classes.main}>{children}</main>
              </Fragment>
            );
      default : 
            nativate('/')
  }
};

export default Layout;
