import classes from "./Piecara.module.css";

const piecara = (props) => (
	<img className={classes.piece} src={props.src} alt={props.alt} />
);

export default piecara;
