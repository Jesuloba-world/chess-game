import { Fragment } from "react";
import { pieces } from "../../objects/Cells";
import Piece from "./Piece/Piece";

const Pieces = (props) => {
	return (
		<Fragment>
			{pieces.map((piece) => (
				<Piece
					key={piece.name}
					color={piece.color}
					type={piece.type}
					name={piece.name}
					initPos={piece.initialPosition}
				/>
			))}
		</Fragment>
	);
};

export default Pieces;
