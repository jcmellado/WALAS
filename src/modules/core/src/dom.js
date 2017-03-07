import { patch, elementOpen, elementClose, text, elementVoid }
  from 'incremental-dom';


function flattenAttributes(props) {
  if (!props || typeof props !== 'object') {
    return null;
  }
  let attrs = [];
  Object.keys(props).forEach(key => {
    attrs.push(key);
    attrs.push(props[key]);
  });
  return attrs;
}

function createChild(child) {
  if (typeof child === 'string') {
    return DOM.text(child);
  }
  if (typeof child === 'number') {
    return DOM.text(String(child));
  }
  if (typeof child === 'function') {
    return child();
  }
  if (Array.isArray(child)) {
    return child.map(item => createChild(item));
  }
}

function create(type, props, ...children) {
  return function() {
    let key;
    let statics;
    let attrs = flattenAttributes(props);
    let isComponent = customElements.get(type) !== undefined;

    if (props && props.key) {
      key = props.key;
    }

    if (isComponent) {
      if (children) {
        let xxx = props || {}; // TODO convert to String or another type
        xxx['children'] = children;

        attrs = attrs || [];
        attrs.push('props');
        attrs.push(xxx);
      }
    }

    let element = attrs
      ? DOM.open(type, key, statics, ...attrs)
      : DOM.open(type, key, statics);

    if (isComponent) {
      element.update(); // TODO observe "props" to avoid this call ??? set initial properties ???
    } else {
      if (children) children.forEach(child => createChild(child));
    }

    DOM.close(type);

    return element;
  };
}

export const DOM = {
  patch: patch,
  open: elementOpen,
  close: elementClose,
  void: elementVoid,
  text: text,
  create: create,
  INCREMENTALDATA: '__incrementalDOMData',
};
