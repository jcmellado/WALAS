/* const _HTMLElement = HTMLElement;
export const ElementBase =function () {}
ElementBase.prototype = _HTMLElement.prototype;*/
export const ElementBase = function() {
  return HTMLElement;
};

let origHTMLElement = HTMLElement;
// TODO(justinfagnani): Tests!!
window.HTMLElement = function() {
  // prefer new.target for elements that call super() constructors or
  // Reflect.construct directly
  // let newTarget = new.target || this.constructor;
  let newTarget = this.constructor;
  return Reflect.construct(origHTMLElement, [], newTarget);
};

HTMLElement.prototype = Object.create(origHTMLElement.prototype, {
  constructor: {
    value: HTMLElement, configurable: true, writable: true,
  },
});
