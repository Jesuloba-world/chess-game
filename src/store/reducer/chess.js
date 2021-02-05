import * as actionTypes from "../action/actionTypes";

const initialState = {
	activePiece: null,
	validCells: [],
	pieceMoveTo: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PICK_PIECE:
			return {
				...state,
				activePiece: action.pieceID,
			};
		case actionTypes.SET_VALID_POSITION:
			return {
				...state,
				validCells: action.validPos,
			};
		case actionTypes.MOVE_TO:
			return {
				...state,
				pieceMoveTo: action.posId,
			};
		case actionTypes.CLEAR_ACTIVE:
			return {
				...state,
				activePiece: null,
				pieceMoveTo: null,
				validCells: [],
			};
		default:
			return state;
	}
};

export default reducer;
