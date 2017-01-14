# Walas
Minimalist framework based on [Web Components v1](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) that weighs less than 6 Kb.

Uses [Google Incremental DOM](https://github.com/google/incremental-dom) as render engine, and supports [Facebook JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) as syntax template.

# API

## Walas.ComponentBase

### componentName
_Static Method_

It must returns a string with the name of the component. This name must follow the Web Component specification, so it must contain a dash (`-`).

### render
_Method_

It must returns a valid JSX. This JSX will be rendered as a [shadow root](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom) attached to the component itself.

### refresh
_Method_

To be invoked after a property has changed. It calls to the `render` method.

### created
_Method_

Called every time the component is inserted into the DOM. It calls to the `refresh` method.

### destroy
_Method_

Called every time the component is removed from the DOM. It removes the event listeners.

### changeAttribute(name, oldValue, newValue)
_Method_

Called every time an attribute is added, removed, updated, or replaced.

## Walas.DOM

### create(type,  [attrs],  [...children])
_Method_

Creates and returns a new DOM element of the given `type`. Has the same behaviour as [React.CreateElement](https://facebook.github.io/react/docs/react-api.html#createelement).


## Walas.Components

### register(component)
_Method_

Registers a new component using the constructor of the given class.

### getComponent(name)
_Method_

Returns the component that matches the given `name`.


## Walas

### bootstrap(element, component)
_Method_

Adds a `component` into an existing DOM `element`.


# Example
```js
class App extends Walas.ComponentBase {

  static componentName() {
    return 'x-app';
  }
  
  constructor() {
    super();
    this._text = 0;
  }
  
  click() {
    this.text ++;
  }
  
  set text(value) {
    this._text = value;
    this.refresh();
  }

  get text() {
    return this._text;
  }
  
  render() {
    return Walas.Dom.create(
      'div',
      { onClick: this.click },
      'Clicked: ',
      this.text
    );
  }
}

var app = Walas.Components.register(App);
Walas.bootstrap(document.getElementById('app'), app);
```
