import classes from "./BoardCell.module.css";

const BoardCell = (props) => {
	const cellClasses = [
		classes[props.color],
		classes[props.position],
		classes.cell,
	];

	const Labelvertical = [classes.Label, classes.LabelVertical];
	const Labelhorizontal = [classes.Label, classes.LabelHorizontal];

	return (
		<div className={cellClasses.join(" ")}>
			{props.vertical ? (
				<p className={Labelvertical.join(" ")}>{props.vertical}</p>
			) : null}
			{props.horizontal ? (
				<p className={Labelhorizontal.join(" ")}>{props.horizontal}</p>
			) : null}
		</div>
	);
};

export default BoardCell;
