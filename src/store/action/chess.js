import * as actionTypes from "./actionTypes";

export const pickPiece = (ID) => {
	return {
		type: actionTypes.PICK_PIECE,
		pieceID: ID,
	};
};

export const setValidMoves = (validPos) => {
	return {
		type: actionTypes.SET_VALID_POSITION,
		validPos: validPos,
	};
};

export const moveTo = (posId) => {
	return {
		type: actionTypes.MOVE_TO,
		posId: posId,
	};
};

export const clearActive = () => {
	return {
		type: actionTypes.CLEAR_ACTIVE,
	};
};
