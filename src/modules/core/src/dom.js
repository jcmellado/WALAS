import { patch, elementOpen, elementClose, text, elementVoid }
  from 'incremental-dom';

function createChilds(childs) {
  let result = childs;

  if (Array.isArray(result)) {
    return result.map(c => createChilds(c));
  }
  if (typeof result === 'function') {
    return result();
  }
  if (typeof result === 'string') {
    return DOM.text(result);
  }
}

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
        let xxx = props || {};
        xxx['children'] = children;

        attrs = attrs || [];
        attrs.push('props');
        attrs.push(xxx);
      }
    }

    // https://github.com/skatejs/skatejs/blob/master/src/api/vdom.js
    // https://github.com/Lucifier129/react-lite/blob/master/src/virtual-dom.js
    // https://github.com/developit/preact/blob/master/src/h.js
    // https://github.com/metal/metal.js/blob/master/packages/metal-component/src/Component.js
    // https://github.com/jridgewell/babel-plugin-transform-incremental-dom
    // https://github.com/ferrugemjs/library
    // https://github.com/google/incremental-dom/blob/master/demo/customelement.html
    // https://github.com/google/incremental-dom/blob/master/demo/define_component.js
    // https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html
    // https://facebook.github.io/react/docs/lifting-state-up.html
    // https://github.com/google/incremental-dom/blob/master/src/core.js
    // https://www.polymer-project.org/1.0/docs/devguide/properties

    let element = attrs
      ? DOM.open(type, key, statics, ...attrs)
      : DOM.open(type, key, statics);

    if (isComponent) {
      console.log(`${type} ${children}`);

      element.update();
    } else {
      if (children) children.map(child => createChilds(child));
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
