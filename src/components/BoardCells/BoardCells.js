import { Fragment } from "react";
import BoardCell from "./BoardCell/BoardCell";

const Boardcells = (props) => {
	const cells = [
		{ color: "white", position: "H1", labelVertical: "H" },
		{ color: "black", position: "H2" },
		{ color: "white", position: "H3" },
		{ color: "black", position: "H4" },
		{ color: "white", position: "H5" },
		{ color: "black", position: "H6" },
		{ color: "white", position: "H7" },
		{ color: "black", position: "H8" },
		{ color: "white", position: "G8" },
		{ color: "black", position: "G7" },
		{ color: "white", position: "G6" },
		{ color: "black", position: "G5" },
		{ color: "white", position: "G4" },
		{ color: "black", position: "G3" },
		{ color: "white", position: "G2" },
		{ color: "black", position: "G1", labelVertical: "G" },
		{ color: "white", position: "F1", labelVertical: "F" },
		{ color: "black", position: "F2" },
		{ color: "white", position: "F3" },
		{ color: "black", position: "F4" },
		{ color: "white", position: "F5" },
		{ color: "black", position: "F6" },
		{ color: "white", position: "F7" },
		{ color: "black", position: "F8" },
		{ color: "white", position: "E8" },
		{ color: "black", position: "E7" },
		{ color: "white", position: "E6" },
		{ color: "black", position: "E5" },
		{ color: "white", position: "E4" },
		{ color: "black", position: "E3" },
		{ color: "white", position: "E2" },
		{ color: "black", position: "E1", labelVertical: "E" },
		{ color: "white", position: "D1", labelVertical: "D" },
		{ color: "black", position: "D2" },
		{ color: "white", position: "D3" },
		{ color: "black", position: "D4" },
		{ color: "white", position: "D5" },
		{ color: "black", position: "D6" },
		{ color: "white", position: "D7" },
		{ color: "black", position: "D8" },
		{ color: "white", position: "C8" },
		{ color: "black", position: "C7" },
		{ color: "white", position: "C6" },
		{ color: "black", position: "C5" },
		{ color: "white", position: "C4" },
		{ color: "black", position: "C3" },
		{ color: "white", position: "C2" },
		{ color: "black", position: "C1", labelVertical: "C" },
		{ color: "white", position: "B1", labelVertical: "B" },
		{ color: "black", position: "B2" },
		{ color: "white", position: "B3" },
		{ color: "black", position: "B4" },
		{ color: "white", position: "B5" },
		{ color: "black", position: "B6" },
		{ color: "white", position: "B7" },
		{ color: "black", position: "B8" },
		{ color: "white", position: "A8", labelHorizontal: "8" },
		{ color: "black", position: "A7", labelHorizontal: "7" },
		{ color: "white", position: "A6", labelHorizontal: "6" },
		{ color: "black", position: "A5", labelHorizontal: "5" },
		{ color: "white", position: "A4", labelHorizontal: "4" },
		{ color: "black", position: "A3", labelHorizontal: "3" },
		{ color: "white", position: "A2", labelHorizontal: "2" },
		{
			color: "black",
			position: "A1",
			labelVertical: "A",
			labelHorizontal: "1",
		},
	];

	return (
		<Fragment>
			{cells.map((cell) => (
				<BoardCell
					color={cell.color}
					position={cell.position}
					vertical={cell.labelVertical}
					horizontal={cell.labelHorizontal}
				/>
			))}
		</Fragment>
	);
};

export default Boardcells;
