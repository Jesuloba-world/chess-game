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

const pieceImg = (props) => (
	<img src={`${props.type}_${props.color}`} alt={props.name} />
);

export default pieceImg;
