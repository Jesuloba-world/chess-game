import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// REDUX
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import chessReducer from "./store/reducer/chess";

const composeEnhancers =
	(process.env.NODE_ENV !== "production"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null) || compose;

const store = createStore(chessReducer, composeEnhancers());

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
