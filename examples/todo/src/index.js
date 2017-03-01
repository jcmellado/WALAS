import * as walas from 'walas';

class App extends walas.ComponentBase {

  static componentName() {
    return 'x-app';
  }

  constructor() {
    super();
    this._text = 0;
  }

  click() {
    this.text++;
  }

  set text(value) {
    this._text = value;
    this.refresh();
  }

  get text() {
    return this._text;
  }

  render() {
    return <div onClick={this.click}>Clicks: {this.text}</div>;
  }
}

let app = walas.Components.register(App);

walas.bootstrap(document.getElementById('app'), app);
