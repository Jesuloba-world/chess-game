import classes from "./Board.module.css";
import BoardCells from "../../components/BoardCells/BoardCells";

const Board = (props) => {
	return (
		<div className={classes.BoardContainer}>
			<div className={classes.Board}>
				<BoardCells />
			</div>
		</div>
	);
};

export default Board;
