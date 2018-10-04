import React,{ Component } from "react";
import { render } from "react-dom";

class App extends Component {
	render() {
		return (
			<div> <h1>Suresh Kumar </h1></div>
			);
	}
}
render(<App/>, window.document.getElementById("app"));