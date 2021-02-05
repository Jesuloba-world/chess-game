const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const columns = [1, 2, 3, 4, 5, 6, 7, 8];

export const rules = (type, currentPosition, isBlack, isMoved) => {
	const [currentRow, currentColumn] = currentPosition.split("");

	const validPosition = [];

	switch (type) {
		case "pawn":
			// moves one step forward and can move two steps on first move
			const currentRowIndex = rows.indexOf(currentRow);
			if (isBlack) {
				validPosition.push(rows[currentRowIndex - 1] + currentColumn);
				if (!isMoved) {
					validPosition.push(
						rows[currentRowIndex - 2] + currentColumn
					);
				}
			} else {
				validPosition.push(rows[currentRowIndex + 1] + currentColumn);
				if (!isMoved) {
					validPosition.push(
						rows[currentRowIndex + 2] + currentColumn
					);
				}
			}

			// can only attack one step diagonally
			return validPosition;
		case "bishop":
			// can move anywhere diagonally and attacks diagonally too
			return ["D5"];
		case "king":
			// can move one step in any direction and attack too
			return ["D5"];
		case "queen":
			// can move any step in any direction
			return ["D5"];
		case "knight":
			// can move in L shapes, most land on an opposite color
			return ["D5"];
		case "rook":
			// moves straight horizontally and vertically
			return ["D5"];
		default:
			return [];
	}
};
