import bishop_black from "../../assets/pieces/b_b.png";
import bishop_white from "../../assets/pieces/b_w.png";
import king_black from "../../assets/pieces/k_b.png";
import king_white from "../../assets/pieces/k_w.png";
import knight_black from "../../assets/pieces/n_b.png";
import knight_white from "../../assets/pieces/n_w.png";
import pawn_black from "../../assets/pieces/p_b.png";
import pawn_white from "../../assets/pieces/p_w.png";
import queen_black from "../../assets/pieces/q_b.png";
import queen_white from "../../assets/pieces/q_w.png";
import rook_black from "../../assets/pieces/r_b.png";
import rook_white from "../../assets/pieces/r_w.png";
import Piecara from "./Piecara/Piecara";

const pieceImg = (props) => {
	switch (props.color) {
		case "white":
			switch (props.type) {
				case "pawn":
					return <Piecara src={pawn_white} alt={props.name} />;
				case "rook":
					return <Piecara src={rook_white} alt={props.name} />;
				case "knight":
					return <Piecara src={knight_white} alt={props.name} />;
				case "bishop":
					return <Piecara src={bishop_white} alt={props.name} />;
				case "king":
					return <Piecara src={king_white} alt={props.name} />;
				case "queen":
					return <Piecara src={queen_white} alt={props.name} />;
				default:
					break;
			}
			break;
		case "black":
			switch (props.type) {
				case "pawn":
					return <Piecara src={pawn_black} alt={props.name} />;
				case "rook":
					return <Piecara src={rook_black} alt={props.name} />;
				case "knight":
					return <Piecara src={knight_black} alt={props.name} />;
				case "bishop":
					return <Piecara src={bishop_black} alt={props.name} />;
				case "king":
					return <Piecara src={king_black} alt={props.name} />;
				case "queen":
					return <Piecara src={queen_black} alt={props.name} />;
				default:
					break;
			}
			break;
		default:
			break;
	}
};

export default pieceImg;
