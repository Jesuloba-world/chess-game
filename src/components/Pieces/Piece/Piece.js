import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PieceImg from "../../PiecesImg/PiecesImg";
import classes from "./Piece.module.css";
import * as actions from "../../../store/action/index";
import { rules } from "../../../functions/Rules";

const Piece = (props) => {
	const [position, setPosition] = useState(props.initPos);
	const [isMoved, setIsMoved] = useState(false);

	const isActive = useSelector((state) => props.name === state.activePiece);
	const toMoveTo = useSelector((state) => state.pieceMoveTo);

	const dispatch = useDispatch();

	const onClickHandler = () => {
		dispatch(actions.pickPiece(props.name));
		dispatch(
			actions.setValidMoves(
				rules(props.type, position, props.color === "black", isMoved)
			)
		);
	};

	const pieceClass = [classes[position], classes.pieceContainer];

	if (isActive) {
		pieceClass.push(classes.active);

		console.log(toMoveTo);
	}

	return (
		<div className={pieceClass.join(" ")} onClick={onClickHandler}>
			<PieceImg type={props.type} color={props.color} name={props.name} />
		</div>
	);
};

export default Piece;
