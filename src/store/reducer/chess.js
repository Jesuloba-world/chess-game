import * as actionTypes from "../action/actionTypes";

const initialState = {
	activePiece: null,
	validCells: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PICK_PIECE:
			return {
				...state,
				activePiece: action.pieceID,
			};
		case actionTypes.CLEAR_ACTIVE:
			return {
				...state,
				activePiece: null,
				validCells: [],
			};
		default:
			return state;
	}
};

export default reducer;
