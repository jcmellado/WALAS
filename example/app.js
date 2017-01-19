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
    return <div onClick={this.click}>Clicks: {this.text}</div>
  }
}

var app = Walas.Components.register(App);
Walas.bootstrap(document.getElementById('app'), app);