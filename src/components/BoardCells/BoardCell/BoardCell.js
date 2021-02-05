import classes from "./BoardCell.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearActive, moveTo } from "../../../store/action";

const BoardCell = (props) => {
	const cellClasses = [
		classes[props.color],
		classes[props.position],
		classes.cell,
	];

	const Labelvertical = [classes.Label, classes.LabelVertical];
	const Labelhorizontal = [classes.Label, classes.LabelHorizontal];

	const dispatch = useDispatch();
	const isActive = useSelector((state) => {
		return state.validCells.includes(props.position);
	});

	if (isActive) {
		cellClasses.push(classes.active);
	}

	const onClickHandler = () => {
		if (isActive) {
			dispatch(moveTo(props.position));
		}
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
