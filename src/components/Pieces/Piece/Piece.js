import { useDispatch, useSelector } from "react-redux";
import PieceImg from "../../PiecesImg/PiecesImg";
import classes from "./Piece.module.css";
import * as actions from "../../../store/action/index";
import { rules } from "../../../functions/Rules";

const Piece = (props) => {
	const isActive = useSelector((state) => props.name === state.activePiece);

	const dispatch = useDispatch();

	const onClickHandler = () => {
		dispatch(actions.pickPiece(props.name));
		dispatch(
			actions.setValidMoves(
				rules(
					props.type,
					props.position,
					props.color === "black",
					props.isMoved
				)
			)
		);
		if (isActive) {
			dispatch(actions.clearActive());
		}
	};

	const pieceClass = [classes[props.position], classes.pieceContainer];

	if (isActive) {
		pieceClass.push(classes.active);
	}

	return (
		<div className={pieceClass.join(" ")} onClick={onClickHandler}>
			<PieceImg type={props.type} color={props.color} name={props.name} />
		</div>
	);
};

export default Piece;
