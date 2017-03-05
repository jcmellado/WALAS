import { DOM } from './dom';
import { ElementBase } from './util';

export class Component extends ElementBase() {

  constructor() {
    super();

    this._root = this.attachShadow({ mode: 'closed' });
  }

  get root() {
    return this._root;
  }

  connectedCallback() {
    this.created();
  }

  disconnectedCallback() {
    this.destroyed();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.attributeChanged(attr, oldValue, newValue);
  }

  created() {
    // uh, oh    this.refresh();
  }

  destroyed() {
  }

  attributeChanged() {
  }

  render() {
  }

  update() {
    let render = this.render();
    DOM.patch(this.root, render);
  }
}
