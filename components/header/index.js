import { Component, createComponent } from '../../lib/component.js';
import { header, div, h1, nav, a } from '../../lib/basic_components.js';
import Icon from '../material_icon.js';
import styles from './style.js';

class ElementMenu extends Component {
	constructor(props) {
		super(props);
		this.state = { isMouseOn: false };
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver() {
		this.setState({ isMouseOn: true });
	}

	handleMouseOut() {
		this.setState({ isMouseOn: false });
	}

	render() {
		const { icon, text } = this.props;
		const { isMouseOn } = this.state;
		const style = Object.assign(styles.nav_divMore_divMenu_divElement, (isMouseOn) ? { backgroundColor: '#eee' } : {});
		console.log(style);
		return createComponent(div, {
			onMouseOver: this.handleMouseOver,
			onMouseOut: this.handleMouseOut,
			style, children: [
				createComponent(Icon, { size: 17, style: styles.nav_divMore_divMenu_divElement_icon, type: icon }),
				text
			] });
	}
}

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = { isMouseOn: false };
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver() {
		this.setState({ isMouseOn: true });
	}

	handleMouseOut() {
		this.setState({ isMouseOn: false });
	}

	render() {
		const { isMouseOn } = this.state;

		return createComponent(div, {
			onMouseOver: this.handleMouseOver,
			onMouseOut: this.handleMouseOut,
			style: styles.nav_divMore,
			children: [
				createComponent(Icon, { style: (isMouseOn) ? styles.nav_divMore_icon_hover : undefined, type: "more_vert" }),
				...[(isMouseOn) ?
					createComponent(div, { style: styles.nav_divMore_divRelative, children:
						createComponent(div, { style: styles.nav_divMore_divMenu, children: [
							createComponent(ElementMenu, { icon: "face", text: "My profile" }),
							createComponent(ElementMenu, { icon: "power_settings_new", text: "Disconnect" }),
						] }),
					}) 
				: []],
			]
		});
	}
}

export default class Header extends Component {
	render() {
		return createComponent(header, { style: styles.header, children:
			createComponent(div, { style: styles.divHeader, children: [
				createComponent(h1, { style: styles.h1, children: "DuoQuadrastagram" }),
				createComponent(nav, { style: styles.nav, children: [
					createComponent(a, { style: styles.nav_a, href: "/photo.html", children:
						createComponent(Icon, { styleOnHover: styles.nav_a_icon_hover, type: "photo_camera" })
				   	}),
					createComponent(Menu),
				] }),
			] })
		});
	}
}
