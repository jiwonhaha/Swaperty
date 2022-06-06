import { useNavigate, useParams } from "react-router-dom";
import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import AuthContext from "../Auth/authentication/AuthContext";
import classes from "./pagesCss/HouseDetail.module.css"
import { AiOutlineWifi } from "react-icons/ai";
import { GiWashingMachine, GiChickenOven, GiCoffeePot, GiFirstAidKit, GiGasStove, GiHanger, GiPartyPopper, GiRingingAlarm, GiTowel, GiWateringCan, GiWindSlap } from "react-icons/gi";
import { MdBalcony, MdIron, MdMicrowave, MdOutlineDesktopWindows, MdPets, MdSmokingRooms, MdWorkspacesFilled } from "react-icons/md";
import { FaFireExtinguisher, FaPumpSoap, FaToiletPaper, FaWheelchair } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import { BiRestaurant, BiCctv, BiFridge } from "react-icons/bi";


const UpdateHousePage = () => {

    let {user} = useContext(AuthContext)
    const {id} = useParams();
    
    const[houses, setHouses] = useState([])
    const[title, setTitle] = useState(houses.title)
    const[address, setAddress] = useState(houses.address)
    const[province, setProvince] = useState(houses.province)
    const[postcode, setPostcode] = useState(houses.postcode)
    const[image, setImage] = useState([houses.image])
    const[description, setDescription] = useState(houses.description)
    const[swapIn, setSwapIn] = useState(houses.swapIn)
    const[swapOut, setSwapOut] = useState(houses.swapOut)
    const[Wifi, setWifi] = useState(houses.Wifi)
    const[Kitchen, setKitchen] = useState(houses.Kitchen)
    const[WashingMachine, setWashingMachine] = useState(houses.WashingMachine)
    const[Stove, setStove] = useState(houses.Stove)
    const[Garden, setGarden] = useState(houses.Garden)
    const[Hairdryer, setHairdryer] = useState(houses.Hairdryer)
    const[Balcony, setBalcony] = useState(houses.Balcony)
    const[Cctv, setCctv] = useState(houses.Cctv)
    const[HotWater, setHotWater] = useState(houses.HotWater)
    const[Towel, setTowel] = useState(houses.Towel)
    const[Soap, setSoap] = useState(houses.Soap)
    const[ToiletPaper, setToiletPaper] = useState(houses.ToiletPaper)
    const[Hanger, setHanger] = useState(houses.Hanger)
    const[Iron, setIron] = useState(houses.Iron)
    const[Tv, setTv] = useState(houses.Tv)
    const[SmokeAlarm, setSmokeAlarm] = useState(houses.SmokeAlarm)
    const[CarbonAlarm, setCarbonAlarm] = useState(houses.CarbonAlarm)
    const[FireExtinguisher, setFireExtinguisher] = useState(houses.FireExtinguisher)
    const[FirstAidKit, setFirstAidKit] = useState(houses.FirstAidKit)
    const[Microwave, setMicrowave] = useState(houses.Microwave)
    const[Oven, setOven] = useState(houses.Oven)
    const[Workspace, setWorkspace] = useState(houses.Workspace)
    const[Fridge, setFridge] = useState(houses.Fridge)
    const[WheelchairAccess, setWheelchairAccess] = useState(houses.WheelchairAccess)
    const[Smoke, setSmoke] = useState(houses.Smoke)
    const[Pet, setPet] = useState(houses.Pet)
    const[Party, setParty] = useState(houses.Party)
    const[imgData, setImgData] = useState(null);
    const[chg ,setChg] = useState(true);
    const[up, setUp] = useState(false);

    useEffect(()=> {
        axios.get(`/housedata/${id}`)
        .then((res) => {
            console.log(res)
            setHouses(res.data)
            setTitle(res.data.title)
            setAddress(res.data.address)
            setProvince(res.data.province)
            setPostcode(res.data.postcode)
            setImage(res.data.image)
            setDescription(res.data.description)
            setSwapIn(res.data.swapIn)
            setSwapOut(res.data.swapOut)
            setWifi(res.data.Wifi)
            setKitchen(res.data.Kitchen)
            setWashingMachine(res.data.WashingMachine)
            setStove(res.data.Stove)
            setGarden(res.data.Garden)
            setHairdryer(res.data.Hairdryer)
            setBalcony(res.data.Balcony)
            setCctv(res.data.Cctv)
            setHotWater(res.data.HotWater)
            setTowel(res.data.Towel)
            setSoap(res.data.Soap)
            setToiletPaper(res.data.ToiletPaper)
            setHanger(res.data.Hanger)
            setIron(res.data.Iron)
            setTv(res.data.Tv)
            setSmokeAlarm(res.data.SmokeAlarm)
            setCarbonAlarm(res.data.CarbonAlarm)
            setFireExtinguisher(res.data.FireExtinguisher)
            setFirstAidKit(res.data.FirstAidKit)
            setMicrowave(res.data.Microwave)
            setOven(res.data.Oven)
            setWorkspace(res.data.Workspace)
            setFridge(res.data.Fridge)
            setWheelchairAccess(res.data.WheelchairAccess)
            setSmoke(res.data.Smoke)
            setPet(res.data.Pet)
            setParty(res.data.Party)  
            setImgData(res.data.image)
        })
        .catch((err) => console.log(err))

    },[])

    const navigate = useNavigate();

    const onChangePicture = e => {
      if (e.target.files[0]) {
        console.log("picture: ", e.target.files);
        setImage(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
      setChg(false)
      setUp(true)
    }

    let handleSubmit = async (e) => {
        let form_data = new FormData();
        if(up){
          form_data.append("image", image, image.name);
        }
        form_data.append("user_id", user.user_id);
        form_data.append("title", title);
        form_data.append("address", address);
        form_data.append("province", province)
        form_data.append("postcode", postcode)
        form_data.append("description", description);
        form_data.append("swapIn", swapIn);
        form_data.append("swapOut", swapOut);
        form_data.append("Wifi", Wifi);
        form_data.append("Kitchen", Kitchen);
        form_data.append("WashingMachine", WashingMachine)
        form_data.append("Balcony", Balcony);
        form_data.append("Stove", Stove)
        form_data.append("Garden", Garden)
        form_data.append("Hairdryer", Hairdryer)
        form_data.append("Cctv", Cctv)
        form_data.append("HotWater", HotWater)
        form_data.append("Towel", Towel)
        form_data.append("Soap", Soap)
        form_data.append("ToiletPaper", ToiletPaper)
        form_data.append("Hanger", Hanger)
        form_data.append("Iron", Iron)
        form_data.append("Tv" , Tv)
        form_data.append("SmokeAlarm", SmokeAlarm)
        form_data.append("CarbonAlarm", CarbonAlarm)
        form_data.append("FireExtinguisher", FireExtinguisher)
        form_data.append("FirstAidKit", FirstAidKit)
        form_data.append("Microwave", Microwave)
        form_data.append("Oven", Oven)
        form_data.append("Workspace", Workspace)
        form_data.append("Fridge",Fridge)
        form_data.append("WheelchairAccess", WheelchairAccess)
        form_data.append("Smoke", Smoke)
        form_data.append("Pet", Pet)
        form_data.append("Party", Party)
        axios
          .put(`/housedata/${id}/`, form_data, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);
            navigate("/")
          })
          .catch((err) => console.log(err));
      };

      return(
        <div>
          <div className={classes.form}>
            <div className={classes.bara}>
              <label className={classes.inputlabel}>User ID</label>
              <input
                className={classes.inputItem}
                type="text"
                id="user_id"
                value={user.user_id}
                onChange={e=> setAddress(e.target.value)}
              />
            </div>
            <div className={classes.bar}>
              <label className={classes.inputlabel}>Title</label>
              <input
                className={classes.inputZ}
                type="text"
                id="title"
                placeholder="house name"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className={classes.bar}>
              <label className={classes.inputlabel}>Address</label>
              <input
                className={classes.inputAdd}
                type="text"
                id="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            <div className={classes.bar}>
              <label className={classes.inputlabel}>Province</label>
              <input
                className={classes.inputAdd}
                type="text"
                id="province"
                value={province}
                onChange={e => setProvince(e.target.value)}
              />
            </div>
            <div className={classes.bar}>
              <label className={classes.inputlabel}>Post code</label>
              <input
                className={classes.inputAdd}
                type="text"
                id="postcode"
                value={postcode}
                onChange={e => setPostcode(e.target.value)}
              />
            </div>
            <div className={classes.bar}>
              <label className={classes.inputlabel}>Property Image</label>
              <input
                className={classes.inputImage}
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                onChange={onChangePicture}
              />
                {chg ? (<div> {image && 
            <div style={{width: "100%"}}>
              <img
              src={`http://127.0.0.1:8000${houses.image}`}
              alt=""
              style={{width:  "90%",
                      height:"30vh",
                      objectFit: "contain"}}
                      />
                      </div>
            }</div>) : (<div> {image && 
              <div style={{width: "100%"}}>
                <img
                src={imgData}
                alt=""
                style={{width:  "90%",
                        height:"30vh",
                        objectFit: "contain"}}
                        />
                        </div>
              }</div>)}
            </div>
                <div className={classes.inputbox}>
                  <label className={classes.labelb}>Swap In</label>
                  <input
                    className={classes.inputZ}
                    type="text"
                    id="swapIn"
                    placeholder="Swap In date"
                    pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
                    value={swapIn}
                    onChange={e => setSwapIn(e.target.value)}
                  />
                  <small className={classes.inputs}>(dd.mm.yyyy)</small>
                </div>
              
                <div className={classes.inputbox}>
                  <label className={classes.labela}>Swap Out</label>
                  <input
                    className={classes.inputZ}
                    type="text"
                    id="swapOut"
                    placeholder="Swap Out date"
                    pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
                    value={swapOut}
                    onChange={e => setSwapOut(e.target.value)}
                  />
                  <small className={classes.inputs}>(dd.mm.yyyy)</small>
                </div>
                <br/>
                <br/>
            <div className={classes.bar}>
              <label className={classes.inputD}>Description</label>
              <textarea
                className={classes.descriptionText}
                type="text"
                id="description"
                placeholder="describe your house"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className={classes.bar}>
            <h3 className={classes.title}>Amenities</h3>
              <ul className={classes.icon}>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Wifi"
                  checked={Wifi}
                  onChange={e => setWifi(e.target.checked)}
                  />
                  <AiOutlineWifi size="2em" /> 
                  <div>Wifi</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Kitchen"
                  checked={Kitchen}
                  onChange={e => setKitchen(e.target.checked)} />
                  <BiRestaurant size="2em" />
                  <div>Kitchen</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="WashingMachine"
                  checked={WashingMachine}
                  onChange={e => setWashingMachine(e.target.checked)} />
                  <GiWashingMachine size="2em" /> 
                  <div>Washing machine</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Stove"
                  checked={Stove}
                  onChange={e => setStove(e.target.checked)} />
                  <GiGasStove size="2em" />
                  <div>Stove</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Garden"
                  checked={Garden}
                  onChange={e => setGarden(e.target.checked)} />
                  <GiWateringCan size="2em" /> 
                  <div>Garden</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Hairdryer"
                  checked={Hairdryer}
                  onChange={e => setHairdryer(e.target.checked)}/>
                  <GiWindSlap size="2em" />
                  <div>Hairdryer</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Balcony"
                  checked={Balcony}
                  onChange={e => setBalcony(e.target.checked)} />
                  <MdBalcony size="2em" /> 
                  <div>Balcony</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Cctv"
                  checked={Cctv}
                  onChange={e => setCctv(e.target.checked)} />
                  <BiCctv size="2em" />
                  <div>CCTV</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="HotWater"
                  checked={HotWater}
                  onChange={e => setHotWater(e.target.checked)} />
                  <GiCoffeePot size="2em" /> 
                  <div>HotWater</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Towel"
                  checked={Towel}
                  onChange={e => setTowel(e.target.checked)} />
                  <GiTowel size="2em" />
                  <div>Towel</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Soap"
                  checked={Soap}
                  onChange={e => setSoap(e.target.checked)} />
                  <FaPumpSoap size="2em" /> 
                  <div>Soap</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="ToiletPaper"
                  checked={ToiletPaper}
                  onChange={e => setToiletPaper(e.target.checked)} />
                  <FaToiletPaper size="2em" />
                  <div>ToiletPaper</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Hanger"
                  checked={Hanger}
                  onChange={e => setHanger(e.target.checked)} />
                  <GiHanger size="2em" /> 
                  <div>Hanger</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Iron"
                  checked={Iron}
                  onChange={e => setIron(e.target.checked)} />
                  <MdIron size="2em" />
                  <div>Iron</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Tv"
                  checked={Tv}
                  onChange={e => setTv(e.target.checked)} />
                  <MdOutlineDesktopWindows size="2em" /> 
                  <div>TV</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="SmokeAlarm"
                  checked={SmokeAlarm}
                  onChange={e => setSmokeAlarm(e.target.checked)} />
                  <GiRingingAlarm size="2em" />
                  <div>Smoke Alarm</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="CarbonAlarm"
                  checked={CarbonAlarm}
                  onChange={e => setCarbonAlarm(e.target.checked)} />
                  <RiAlarmWarningFill size="2em" /> 
                  <div>Carbon Alarm</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="FireExtinguisher"
                  checked={FireExtinguisher}
                  onChange={e => setFireExtinguisher(e.target.checked)} />
                  <FaFireExtinguisher size="2em" />
                  <div>Fire Extinguisher</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="FirstAidKit"
                  checked={FirstAidKit}
                  onChange={e => setFirstAidKit(e.target.checked)} />
                  <GiFirstAidKit size="2em" /> 
                  <div>First AidKit</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Microwave"
                  checked={Microwave}
                  onChange={e => setMicrowave(e.target.checked)} />
                  <MdMicrowave size="2em" />
                  <div>Microwave</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Oven"
                  checked={Oven}
                  onChange={e => setOven(e.target.checked)} />
                  <GiChickenOven size="2em" /> 
                  <div>Oven</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Workspace"
                  checked={Workspace}
                  value={Workspace}
                  onChange={e => setWorkspace(e.target.checked)} />
                  <MdWorkspacesFilled size="2em" />
                  <div>Workspace</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Fridge"
                  checked={Fridge}
                  onChange={e => setFridge(e.target.checked)} />
                  <BiFridge size="2em" /> 
                  <div>Fridge</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="WheelchairAccess"
                  checked={WheelchairAccess}
                  onChange={e => setWheelchairAccess(e.target.checked)} />
                  <FaWheelchair size="2em" />
                  <div>Wheelchair Access</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Smoke"
                  checked={Smoke}
                  onChange={e => setSmoke(e.target.checked)} />
                  <MdSmokingRooms size="2em" /> 
                  <div>Smoke</div>
                </div>
                <div className={classes.ritem}>
                  <input
                  type="checkbox"
                  id="Pet"
                  checked={Pet}
                  onChange={e => setPet(e.target.checked)} />
                  <MdPets size="2em" />
                  <div>Pet friendly</div>
                </div>
                <div className={classes.litem}>
                  <input 
                  type="checkbox"
                  id="Party"
                  checked={Party}
                  onChange={e => setParty(e.target.checked)} />
                  <GiPartyPopper size="2em" /> 
                  <div>Party Allow</div>
                </div>
              </ul>
            </div>
            <div className={classes.actions}>
                <button onClick={handleSubmit}>Update</button>
            </div>
    
          </div>
        </div>
      )
}

export default UpdateHousePage
