import classes from "./BoardCell.module.css";
import { useDispatch } from "react-redux";
import { clearActive } from "../../../store/action";

const BoardCell = (props) => {
	const cellClasses = [
		classes[props.color],
		classes[props.position],
		classes.cell,
	];

	const Labelvertical = [classes.Label, classes.LabelVertical];
	const Labelhorizontal = [classes.Label, classes.LabelHorizontal];

	const dispatch = useDispatch();

	const onClickHandler = () => {
		dispatch(clearActive());
	};

	return (
		<div className={cellClasses.join(" ")} onClick={onClickHandler}>
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
