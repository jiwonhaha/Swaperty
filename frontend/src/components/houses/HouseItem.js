import Card from "../../ui/Card";
import classes from "./HouseItem.module.css";
import { Link } from "react-router-dom";

function HouseItem(props) {

  // let idd = props.house_id
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <Link to="/houseDetail">
            <button>More detail</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default HouseItem;
