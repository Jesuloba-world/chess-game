import { Fragment } from "react";
import BoardCell from "./BoardCell/BoardCell";
import { cells } from "../../objects/Cells";

const Boardcells = (props) => {
	return (
		<Fragment>
			{cells.map((cell) => (
				<BoardCell
					key={cell.position}
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
