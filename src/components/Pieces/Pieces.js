import { Fragment } from "react";
import Piece from "./Piece/Piece";
import { useSelector } from "react-redux";

const Pieces = (props) => {
	const pieces = useSelector((state) => state.pieces);

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
