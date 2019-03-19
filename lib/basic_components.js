import { Component, appendToDOMElement } from './component.js';

function renderDivLike(type) {
	const {
		children, onClick, style, href,
		src, className,
	} = this.props;
	const ret = document.createElement(type);

	if (children) appendToDOMElement(ret, children);
	if (onClick) ret.onclick = onClick;
	if (style) {
		for (var key in style) {
			if (style.hasOwnProperty(key)) {
				ret.style[key] = style[key];
			}
		}
	}
	if (href) ret.href = href;
	if (src) ret.src = src;
	if (className) ret.className = className;

	return ret;
}

export class div extends Component {
	render() {
		return renderDivLike.bind(this)("div");
	}
}

export class span extends Component {
	render() {
		return renderDivLike.bind(this)("span");
	}
}

export class h1 extends Component {
	render() {
		return renderDivLike.bind(this)("h1");
	}
}

export class img extends Component {
	render() {
		return renderDivLike.bind(this)("img");
	}
}

export class a extends Component {
	render() {
		return renderDivLike.bind(this)("a");
	}
}

export class header extends Component {
	render() {
		return renderDivLike.bind(this)("header");
	}
}

export class section extends Component {
	render() {
		return renderDivLike.bind(this)("section");
	}
}

export class article extends Component {
	render() {
		return renderDivLike.bind(this)("article");
	}
}

export class footer extends Component {
	render() {
		return renderDivLike.bind(this)("footer");
	}
}

export class nav extends Component {
	render() {
		return renderDivLike.bind(this)("nav");
	}
}
