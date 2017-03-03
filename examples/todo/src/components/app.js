import * as walas from 'walas';

export class App extends walas.ComponentBase {

  static componentName() {
    return 'todo-app';
  }

  constructor() {
    super();
  }

  render() {
    return <div>
      <todo-taskbar />
      <todo-tasklist />
    </div>;
  }
}
