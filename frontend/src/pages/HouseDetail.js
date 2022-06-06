import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import AuthContext from "../Auth/authentication/AuthContext";
import Card from "../ui/Card";
import classes from "./pagesCss/HouseDetail1.module.css"
import { AiOutlineWifi } from "react-icons/ai";
import { GiWashingMachine, GiChickenOven, GiCoffeePot, GiFirstAidKit, GiGasStove, GiHanger, GiPartyPopper, GiRingingAlarm, GiTowel, GiWateringCan, GiWindSlap } from "react-icons/gi";
import { MdBalcony, MdIron, MdMicrowave, MdOutlineDesktopWindows, MdPets, MdSmokingRooms, MdWorkspacesFilled } from "react-icons/md";
import { FaFireExtinguisher, FaPumpSoap, FaToiletPaper, FaWheelchair } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import { BiRestaurant, BiCctv, BiFridge } from "react-icons/bi";



const HouseDetailPage = () =>{
  let { user } = useContext(AuthContext);
  const { id } = useParams();

  const[houses, sethouses] = useState([])
  const[isLoading,setIsLoading] = useState(true);

  useEffect(()=> {
    axios.get(`/housedata/${id}/`).
    then((res)=>{
      console.log(res)
      sethouses(res.data)
      setIsLoading(false)
    })
  },[])

  return (
    <div>
      <div className={classes.bar}>
        <label className={classes.title}>{houses.title}</label>
      </div>
      <div className={classes.bar}>
        <label className={classes.inputlabel}>Swap Window : {houses.swapIn}</label>
        <label className={classes.inputlabel}> ~ {houses.swapOut}</label>
      </div>
      <div className={classes.bar}>
        <label className={classes.inputlabel}>Address : {houses.address}</label>
      </div>
      <div className={classes.bar}>
        <label className={classes.inputlabel}>Province : {houses.province}</label>
      </div>
      <div className={classes.bar}>
        <label className={classes.inputlabel}>Post Code : {houses.postcode}</label>
      </div>
      <br />
        <label className={classes.inputlabel}>House Image : </label>
      <div className={classes.image}>
        <img src={`http://127.0.0.1:8000${houses.image}`}/>
      </div>
      <div className={classes.actions}>
      <Link to={`/sendRequest/${houses.id}`}>
        <button>Contact</button>
      </Link>
      </div>
      <Card>
      <div className={classes.bar}>
        <label className={classes.inputlabel}>Description : 
        <div className={classes.ds}>
        {houses.description}
        </div>
        </label>
      </div>
      </Card>
      <div className={classes.bar}>
          <h3 className={classes.title}>Amenities</h3>
            <ul className={classes.icon}>
              <div className={classes.litem}>
              {houses.Wifi ? (<span className={classes.bool}> O</span>) : (<span className={classes.bool}> X</span>)}
              <AiOutlineWifi size="2em" />  Wifi
              </div>
              <div className={classes.ritem}>
                {houses.Kitchen ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
                <BiRestaurant size="2em" /> Kitchen
              </div>
              <div className={classes.litem}>
              {houses.WashingMachine ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiWashingMachine size="2em" /> Washing Machine
              </div>
              <div className={classes.ritem}>
              {houses.Stove ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiGasStove size="2em" /> Stove
              </div>
              <div className={classes.litem}>
              {houses.Garden ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiWateringCan size="2em" /> Garden
              </div>
              <div className={classes.ritem}>
              {houses.Hairdryer ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiWindSlap size="2em" /> Hairdryer
              </div>
              <div className={classes.litem}>
              {houses.Balcony ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <MdBalcony size="2em" /> Balcony
              </div>
              <div className={classes.ritem}>
              {houses.Cctv ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <BiCctv size="2em" /> CCTV
              </div>
              <div className={classes.litem}>
              {houses.HotWater ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiCoffeePot size="2em" /> HotWater
              </div>
              <div className={classes.ritem}>
              {houses.Towel ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiTowel size="2em" /> Towel
              </div>
              <div className={classes.litem}>
              {houses.Soap ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <FaPumpSoap size="2em" /> Soap
              </div>
              <div className={classes.ritem}>
              {houses.ToiletPaper ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <FaToiletPaper size="2em" /> ToiletPaper
              </div>
              <div className={classes.litem}>
              {houses.Hanger ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiHanger size="2em" /> Hanger
              </div>
              <div className={classes.ritem}>
              {houses.Iron ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <MdIron size="2em" /> Iron
              </div>
              <div className={classes.litem}>
              {houses.Tv ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <MdOutlineDesktopWindows size="2em" /> TV
              </div>
              <div className={classes.ritem}>
              {houses.SmokeAlarm ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiRingingAlarm size="2em" /> SmokeAlarm
              </div>
              <div className={classes.litem}>
              {houses.CarbonAlarm ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <RiAlarmWarningFill size="2em" /> CarbonAlarm
              </div>
              <div className={classes.ritem}>
              {houses.FireExtinguisher ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <FaFireExtinguisher size="2em" /> FireExtinguisher
              </div>
              <div className={classes.litem}>
              {houses.FirstAidKit ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiFirstAidKit size="2em" /> FirstAidKit
              </div>
              <div className={classes.ritem}>
              {houses.Microwave ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <MdMicrowave size="2em" /> Microwave
              </div>
              <div className={classes.litem}>
              {houses.Oven ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiChickenOven size="2em" /> Oven
              </div>
              <div className={classes.ritem}>
              {houses.Workspace ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <MdWorkspacesFilled size="2em" /> Workspace
              </div>
              <div className={classes.litem}>
              {houses.Fridge ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <BiFridge size="2em" /> Fridge
              </div>
              <div className={classes.ritem}>
              {houses.WheelchairAccess ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <FaWheelchair size="2em" /> Wheelchair Access
              </div>
              <div className={classes.litem}>
              {houses.Smoke ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <MdSmokingRooms size="2em" /> Smoke
              </div>
              <div className={classes.ritem}>
              {houses.Pet ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <MdPets size="2em" /> Pet
              </div>
              <div className={classes.litem}>
              {houses.Party ? (<span className={classes.bool}>O</span>) : (<span className={classes.bool}>X</span>)}
              <GiPartyPopper size="2em" /> Party
              </div>
            </ul>
        </div>
    </div>
  );
}

export default HouseDetailPage;