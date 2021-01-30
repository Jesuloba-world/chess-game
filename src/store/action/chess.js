import * as actionTypes from "./actionTypes";

export const pickPiece = (ID) => {
	return {
		type: actionTypes.PICK_PIECE,
		pieceID: ID,
	};
};

export const clearActive = () => {
	return {
		type: actionTypes.CLEAR_ACTIVE,
	};
};
