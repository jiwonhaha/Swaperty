import classes from "./Card1.module.css";

function Card1(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card1;
