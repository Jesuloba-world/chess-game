import classes from "./Board.module.css";
import BoardCells from "../../components/BoardCells/BoardCells";
import Pieces from "../../components/Pieces/Pieces";

const Board = (props) => {
	return (
		<div className={classes.BoardContainer}>
			<div className={classes.Board}>
				<BoardCells />
				<Pieces />
			</div>
		</div>
	);
};

export default Board;
