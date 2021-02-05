import * as actionTypes from "../action/actionTypes";

const initialState = {
	pieces: [
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 1",
			initialPosition: "B1",
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 2",
			initialPosition: "B2",
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 3",
			initialPosition: "B3",
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 4",
			initialPosition: "B4",
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 5",
			initialPosition: "B5",
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 6",
			initialPosition: "B6",
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 7",
			initialPosition: "B7",
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 8",
			initialPosition: "B8",
		},
		{
			color: "white",
			type: "rook",
			name: "White Rook 1",
			initialPosition: "A1",
		},
		{
			color: "white",
			type: "rook",
			name: "White Rook 2",
			initialPosition: "A8",
		},
		{
			color: "white",
			type: "knight",
			name: "White Knight 1",
			initialPosition: "A2",
		},
		{
			color: "white",
			type: "knight",
			name: "White Knight 2",
			initialPosition: "A7",
		},
		{
			color: "white",
			type: "bishop",
			name: "White Bishop 1",
			initialPosition: "A3",
		},
		{
			color: "white",
			type: "bishop",
			name: "White Bishop 2",
			initialPosition: "A6",
		},
		{
			color: "white",
			type: "king",
			name: "White King",
			initialPosition: "A4",
		},
		{
			color: "white",
			type: "queen",
			name: "White Queen",
			initialPosition: "A5",
		},

		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 1",
			initialPosition: "G1",
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 2",
			initialPosition: "G2",
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 3",
			initialPosition: "G3",
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 4",
			initialPosition: "G4",
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 5",
			initialPosition: "G5",
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 6",
			initialPosition: "G6",
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 7",
			initialPosition: "G7",
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 8",
			initialPosition: "G8",
		},
		{
			color: "black",
			type: "rook",
			name: "Black Rook 1",
			initialPosition: "H1",
		},
		{
			color: "black",
			type: "rook",
			name: "Black Rook 2",
			initialPosition: "H8",
		},
		{
			color: "black",
			type: "knight",
			name: "Black Knight 1",
			initialPosition: "H2",
		},
		{
			color: "black",
			type: "knight",
			name: "Black Knight 2",
			initialPosition: "H7",
		},
		{
			color: "black",
			type: "bishop",
			name: "Black Bishop 1",
			initialPosition: "H3",
		},
		{
			color: "black",
			type: "bishop",
			name: "Black Bishop 2",
			initialPosition: "H6",
		},
		{
			color: "black",
			type: "king",
			name: "Black King",
			initialPosition: "H4",
		},
		{
			color: "black",
			type: "queen",
			name: "Black Queen",
			initialPosition: "H5",
		},
	],
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
