import classes from "./Background.module.css";

const background = (props) => (
	<div className={classes.background}>{props.children}</div>
);

export default background;
