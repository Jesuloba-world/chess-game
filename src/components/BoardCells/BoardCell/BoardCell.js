import classes from "./BoardCell.module.css";

const BoardCell = (props) => {
	const cellClasses = [classes[props.color], classes[props.position]];

	return <div className={cellClasses.join(" ")}></div>;
};

export default BoardCell;
