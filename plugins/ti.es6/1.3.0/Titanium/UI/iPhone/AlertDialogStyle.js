export default class AlertDialogStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone.AlertDialogStyle')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.AlertDialogStyle.apiName;
	}
	static get DEFAULT () {
		return Titanium.UI.iPhone.AlertDialogStyle.DEFAULT;
	}
	static get PLAIN_TEXT_INPUT () {
		return Titanium.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT;
	}
	static get SECURE_TEXT_INPUT () {
		return Titanium.UI.iPhone.AlertDialogStyle.SECURE_TEXT_INPUT;
	}
	static get LOGIN_AND_PASSWORD_INPUT () {
		return Titanium.UI.iPhone.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT;
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get bubbleParent () {
		return this._object.bubbleParent;
	}
	set bubbleParent (value) {
		this._object.bubbleParent = value;
	}
	get DEFAULT () {
		return this._object.DEFAULT;
	}
	get PLAIN_TEXT_INPUT () {
		return this._object.PLAIN_TEXT_INPUT;
	}
	get SECURE_TEXT_INPUT () {
		return this._object.SECURE_TEXT_INPUT;
	}
	get LOGIN_AND_PASSWORD_INPUT () {
		return this._object.LOGIN_AND_PASSWORD_INPUT;
	}

	// methods
	addEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addEventListener(name, resolve));
		}
		return this._object.addEventListener(name, callback);
	}
	applyProperties (props) {
		props = normalize(props);
		return this._object.applyProperties(props);
	}
	fireEvent (name, event) {
		event = normalize(event);
		return this._object.fireEvent(name, event);
	}
	removeEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.removeEventListener(name, resolve));
		}
		return this._object.removeEventListener(name, callback);
	}
	getApiName () {
		return this._object.getApiName();
	}
	getBubbleParent () {
		return this._object.getBubbleParent();
	}
	setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
};
Object.freeze(AlertDialogStyle);

function normalize (object) {
	if (typeof object === 'object') {
		if (object._object) {
			return object._object;
		}

		for (let key in object) {
			if (typeof object[key] === 'object') {
				if (object[key]._object) {
					object[key] = object[key]._object;
				}
			}
		}
	}

	return object;
}