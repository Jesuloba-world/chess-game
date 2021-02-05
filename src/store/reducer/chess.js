import * as actionTypes from "../action/actionTypes";

const initialState = {
	pieces: [
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 1",
			position: "B1",
			isMoved: false,
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 2",
			position: "B2",
			isMoved: false,
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 3",
			position: "B3",
			isMoved: false,
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 4",
			position: "B4",
			isMoved: false,
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 5",
			position: "B5",
			isMoved: false,
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 6",
			position: "B6",
			isMoved: false,
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 7",
			position: "B7",
			isMoved: false,
		},
		{
			color: "white",
			type: "pawn",
			name: "White Pawn 8",
			position: "B8",
			isMoved: false,
		},
		{
			color: "white",
			type: "rook",
			name: "White Rook 1",
			position: "A1",
			isMoved: false,
		},
		{
			color: "white",
			type: "rook",
			name: "White Rook 2",
			position: "A8",
			isMoved: false,
		},
		{
			color: "white",
			type: "knight",
			name: "White Knight 1",
			position: "A2",
			isMoved: false,
		},
		{
			color: "white",
			type: "knight",
			name: "White Knight 2",
			position: "A7",
			isMoved: false,
		},
		{
			color: "white",
			type: "bishop",
			name: "White Bishop 1",
			position: "A3",
			isMoved: false,
		},
		{
			color: "white",
			type: "bishop",
			name: "White Bishop 2",
			position: "A6",
			isMoved: false,
		},
		{
			color: "white",
			type: "king",
			name: "White King",
			position: "A4",
			isMoved: false,
		},
		{
			color: "white",
			type: "queen",
			name: "White Queen",
			position: "A5",
			isMoved: false,
		},

		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 1",
			position: "G1",
			isMoved: false,
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 2",
			position: "G2",
			isMoved: false,
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 3",
			position: "G3",
			isMoved: false,
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 4",
			position: "G4",
			isMoved: false,
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 5",
			position: "G5",
			isMoved: false,
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 6",
			position: "G6",
			isMoved: false,
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 7",
			position: "G7",
			isMoved: false,
		},
		{
			color: "black",
			type: "pawn",
			name: "Black Pawn 8",
			position: "G8",
			isMoved: false,
		},
		{
			color: "black",
			type: "rook",
			name: "Black Rook 1",
			position: "H1",
			isMoved: false,
		},
		{
			color: "black",
			type: "rook",
			name: "Black Rook 2",
			position: "H8",
			isMoved: false,
		},
		{
			color: "black",
			type: "knight",
			name: "Black Knight 1",
			position: "H2",
			isMoved: false,
		},
		{
			color: "black",
			type: "knight",
			name: "Black Knight 2",
			position: "H7",
			isMoved: false,
		},
		{
			color: "black",
			type: "bishop",
			name: "Black Bishop 1",
			position: "H3",
			isMoved: false,
		},
		{
			color: "black",
			type: "bishop",
			name: "Black Bishop 2",
			position: "H6",
			isMoved: false,
		},
		{
			color: "black",
			type: "king",
			name: "Black King",
			position: "H4",
			isMoved: false,
		},
		{
			color: "black",
			type: "queen",
			name: "Black Queen",
			position: "H5",
			isMoved: false,
		},
	],
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
		case actionTypes.SET_VALID_POSITION:
			return {
				...state,
				validCells: action.validPos,
			};
		case actionTypes.MOVE_TO:
			const updatedPieces = [...state.pieces];
			const toChange = updatedPieces.findIndex(
				(piece) => piece.name === state.activePiece
			);
			updatedPieces[toChange] = {
				...updatedPieces[toChange],
				position: action.posId,
				isMoved: true,
			};

			return {
				...state,
				pieces: updatedPieces,
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
