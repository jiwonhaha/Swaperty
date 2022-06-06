import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import {Row, Col} from "reactstrap";
import {useNavigate} from "react-router-dom"

function Footer() {
 
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year
};
const navigate = useNavigate();

  return(


    <footer className={classes.point}>
    <Row>
        <Col>
            <p>
                <div className= {classes.pong}>
                Swaperty 
                </div>
                <div className= {classes.mo}>
                <span className = {classes.mi}>
                Private policy 
                </span>
                <span className = {classes.ma}>
                Contact Us
                </span>
                </div>
                <div className= {classes.dong}>
                About Swaperty : Swaperty is the web application that allows users to swap their property for free. Swapterty is founded in March 2022 by Team 44-21.
               </div>
                <div className= {classes.di} >
                <button className= {classes.da} onClick={e=> navigate('/Gdpr')}>Private policy</button> 
                
                <button className= {classes.do} onClick={e=> navigate('/contactUs')}>Contact Us</button> 
                
                </div>
                <div className= {classes.mn}>
                Copyright &copy; <span>{thisYear()}</span> swaperty, inc.
                </div>
            </p>
        </Col>
    </Row>
</footer>

  );
}

export default Footer;
