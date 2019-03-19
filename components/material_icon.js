import { Component } from '../../lib/component.js';

export default class Icon extends Component {
	render() {
		const { type, size, color, style } = this.props;
		const ret = document.createElement("i");

		ret.className = "material-icons";
		ret.innerHTML = type;
		ret.style.fontSize = (size) ? `${size}px` : '35px';
		ret.style.color = color || '#333';
		if (style) {
			for (var key in style) {
				if (style.hasOwnProperty(key)) {
					ret.style[key] = style[key];
				}
			}
		}
		return ret;
	}
}
