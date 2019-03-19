export class Component {
	set DOM(val) {
		if (this._currentDom && this._currentDom.parentNode) {
			this._currentDom.parentNode.replaceChild(val, this._currentDom);
		}
		this._currentDom = val;
	}

	get DOM() {
		if (this._currentDom === undefined) {
			this.DOM = this.render();
		}
		return this._currentDom;
	}

	set props(val) {
		if (this._props === undefined) {
			this._props = val;
		} else {
			this._props = val;
			this.DOM = this.render();
		}
	}

	get props() {
		return this._props;
	}

	constructor(props) {
		this._rerendering = false;
		this.state = {};
		this.props = props;
		if (this.render === undefined) {
			throw new Error("A Component need to have a render method");
		}
	}

	setState(newState) {
		const nextState = Object.assign({}, this.state, newState);
		if (nextState != this.state) {
			this.state = nextState;
			this.DOM = this.render();
		}
	}
}

export function createComponent(component, props) {
	const subcomponent = new component(props || {});

	return subcomponent.DOM;
}

export function toDOMElement(elem) {
	if (elem instanceof Element || elem instanceof HTMLDocument) {
		return elem;
	} else if (typeof elem === "string") {
		return document.createTextNode(elem);
	} else {
		throw new Error(`can't create a DOM Element with a ${typeof elem}`);
	}
}

export function appendToDOMElement(appendTo, elem) {
	if (Array.isArray(elem)) {
		elem.forEach(elem => appendToDOMElement(appendTo, elem));
	} else {
		appendTo.appendChild(toDOMElement(elem));
	}
}
