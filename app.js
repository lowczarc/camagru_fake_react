import { Component, createComponent } from './lib/component.js';
import { div } from './lib/basic_components.js';
import Header from './components/header/index.js';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = { test: this.props.test || false };
	}

	render() {
		console.log("render Button");
		let test;
		test = document.createTextNode("tutu");
		if (this.state.test) {
			test = document.createTextNode("tata");
		}
		let ret = document.createElement("div");
		ret.appendChild(test);
		ret.onclick = () => { this.setState({ test: !this.state.test }) };
		return ret;
	}
}

class App extends Component {
	render() {
		return createComponent(Header);
	}
}

document.body.appendChild(createComponent(App, {}));
