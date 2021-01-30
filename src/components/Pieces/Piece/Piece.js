import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PieceImg from "../../PiecesImg/PiecesImg";
import classes from "./Piece.module.css";
import * as actions from "../../../store/action/index";

const Piece = (props) => {
	const [position, setPosition] = useState(props.initPos);

	const isActive = useSelector((state) => props.name === state.activePiece);

	const dispatch = useDispatch();

	const pieceClass = [classes[position], classes.pieceContainer];
	if (isActive) {
		pieceClass.push(classes.active);
	}

	return (
		<div
			className={pieceClass.join(" ")}
			onClick={() => dispatch(actions.pickPiece(props.name))}
		>
			<PieceImg type={props.type} color={props.color} name={props.name} />
		</div>
	);
};

export default Piece;
