import React from "react";
import SearchForm from "../components/layout/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../components/Images/1.jpg";
import image2 from "../components/Images/2.jpg";
import image3 from "../components/Images/3.jpg";
import image4 from "../components/Images/8.jpg";
import image5 from "../components/Images/9.jpg";
import image6 from "../components/Images/7.jpg";
import logo from "../components/Images/logo.svg";
import row_3_icon_1 from "../components/Images/row_3_icon_1.svg";
import row_3_icon_2 from "../components/Images/row_3_icon_2.svg";
import row_3_icon_3 from "../components/Images/shake.png";
import arrow from "../components/Images/pngegg.png"
import Card from "../ui/Card1";
import classes from "./pagesCss/Home1.module.css";
import { ArrowBackIos, ArrowForwardIos, CallMissedSharp } from "@material-ui/icons";
import { Link , useNavigate} from "react-router-dom";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "green", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "green", fontSize: "30px" }} />
    </div>
  );
};

const HomePage = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ margin: "10px auto", width: "90%", maxWidth: "60rem" }}>
        <SearchForm />
        <div style={{ margin: "10px" }}>
          <h2 style={{ height: "1rem", textAlign: "center" }}>
            Popular with Swappers
          </h2>
          <Slider
            autoplay
            autoplaySpeed={2000}
            dots
            initialSlide={5}
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            infinite
            slidesToShow={3}
          >
            <div style={{ width: "100%" }}>
              <div >
              <Link to="/houseList/London">
                <img
                    src={image1}
                    alt=""
                    style={{
                      width: "90%",
                      height: "50vh",
                      objectFit: "contain",
                    }}
                  />
                  </Link>
                  <div style={{ textAlign: "center", color: "#000" }}>
                    London
                  </div>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div>
              <Link to="/houseList/Birmingham">
                <img
                  src={image2}
                  alt=""
                  style={{ width: "90%", height: "50vh", objectFit: "contain" }}
                />
              </Link>
              </div>
              
              <div style={{ textAlign: "center", color: "#000" }}>
                Birmingham
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div>
                <Link to="/houseList/Bournemouth">
                <img
                  src={image3}
                  alt=""
                  style={{ width: "90%", height: "50vh", objectFit: "contain" }}
                  />
                  </Link>
              </div>
              <div style={{ textAlign: "center", color: "#000" }}>
                Bournemouth
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div>
              <Link to="/houseList/Manchester">
                <img
                  src={image6}
                  alt=""
                  style={{ width: "90%", height: "50vh", objectFit: "contain" }}
                />
                </Link>
              </div>
              <div style={{ textAlign: "center", color: "#000" }}>
                Manchester
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div>
              <Link to="/houseList/Edinburgh">
                <img
                  src={image4}
                  alt=""
                  style={{ width: "90%", height: "50vh", objectFit: "contain" }}
                />
                </Link>
              </div>
              <div style={{ textAlign: "center", color: "#000" }}>Edinburgh</div>
            </div>
            <div style={{ width: "100%" }}>
              <div>
              <Link to="/houseList/Liverpool">
                <img
                  src={image5}
                  alt=""
                  style={{ width: "90%", height: "50vh", objectFit: "contain" }}
                />
                </Link>
              </div>
              <div style={{ textAlign: "center", color: "#000" }}>Liverpool</div>
            </div>
          </Slider>
        </div>
      </div>
      <Card ><div className={classes.pong}>
        <div className={classes.pog}>
        How <img src={logo} alt="logo" /> works?
        </div>
        <div className={classes.boo} >
      1. Join the swapping revolution 
      </div>
                <img src={row_3_icon_1} alt="icon" />
              <div className={classes.con}>
                Fed up of bland budget hotels, tedious travel sites, expensive
                short term lets? We think there’s a better way. It starts with
                your place, which you’ll offer up in exchange for a fellow
                swappers. Hand us pretty pics, the groundrules, and a few of
                your details.
              </div>
              <div className={classes.arrow}>
              <img src={arrow} alt="icon" />
              </div>
              <div className={classes.boo} >2. Find the perfect place</div>
              <div >
                <img src={row_3_icon_2} alt="icon" />
              </div>
              <div className={classes.con} >
                Now your ready to start swapping. Maybe you are looking to
                explore a new area to live permanently, travelling for culture
                or on business. Whatever the purpose we’ll help you find
                swappable property and make it easy to request it.
              </div>
              <div className= {classes.arrow}>
              <img src={arrow} alt="icon" />
              </div>
              <div className={classes.boo} >3. Get your swap on</div>
              <div className={classes.shake}>
                <img src={row_3_icon_3} alt="icon" />
              </div>
              <div className={classes.con}>
                Your request is sent to your chosen properties swapper. If they
                fancy staying at your place too then (and only then) we’ll put
                you in touch by providing their contact details. Get ready to
                lay out the welcome matt.
              </div>
      </div>
      </Card>
    </div>
  );
};

export default HomePage;
