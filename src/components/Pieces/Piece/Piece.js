import { useState } from "react";
import PieceImg from "../../PiecesImg/PiecesImg";
import classes from "./Piece.module.css";

const Piece = (props) => {
	const [position, setPosition] = useState(props.initPos);

	const pieceClass = [classes[position], classes.pieceContainer];

	return (
		<div className={pieceClass.join(" ")}>
			<PieceImg type={props.type} color={props.color} name={props.name} />
		</div>
	);
};

export default Piece;
