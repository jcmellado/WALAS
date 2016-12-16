import { DOM } from './dom';
import { ElementBase } from './util';
export class ComponentBase extends ElementBase() {
    constructor() {
        super();
        this._patch = this.attachShadow({ mode: 'closed' });
        this._listeners = [];
    }
    get patch() {
        return this._patch;
    }
    connectedCallback() {
        this.created();
    }
    disconnectedCallback() {
        this.destroy();
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        this.changeAttribute(attr, oldValue, newValue);
    }
    render() {

    }
    refresh() {
        var render = this.render();
        this._unsuscribeEvents();
        DOM.patch(this.patch, render);
        this._suscribeEvents();
    }
    _unsuscribeEvents(){
        this._listeners.forEach((listener)=>{
            listener();
        });
        this._listeners = [];
    }
    _suscribeEvents() {
        var elements = [...this.patch.querySelectorAll('*')];
        var eventName = /on[A-Z]/;
        elements.forEach((element) => {
            Object.keys(element)
                .filter((event) => eventName.test(event))
                .forEach((event) => {
                    var listener = element[event].bind(this),
                        eventName = event.replace('on', '').toLowerCase();
                    element.addEventListener(eventName, listener);
                    this._listeners.push(function () {
                        element.removeEventListener(eventName,listener)
                    });
                });
        });
    }
    created() {
        this.refresh();

    }
    destroy() {
        this._unsuscribeEvents();
    }
    changeAttribute() {

    }
}

