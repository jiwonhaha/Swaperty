import HouseItem from "./HouseItem";
import classes from "./HouseList.module.css";

/* 
  We should add condition to check the property location 
  When the user search particular preferences using search bar 
*/
function HouseList(props) {
  return (
    <ul className={classes.list}>
      {props.houses.map((house) => (
        <HouseItem
          key={house.id}
          id={house.user_id}
          image={house.image}
          title={house.title}
          address={house.address}
          description={house.description}
        />
      ))}
    </ul>
  );
}

export default HouseList;
