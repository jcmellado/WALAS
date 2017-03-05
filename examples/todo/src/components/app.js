import * as walas from 'walas';
import { emitter } from '../services/emitter.js';
import { TaskBar } from './taskbar.js';
import { TaskList } from './tasklist.js';

export class App extends walas.Component {

  _tasks = ['Wash the car', 'Meet Susan', 'Buy eggs'];

  static name() {
    return 'todo-app';
  }

  constructor() {
    super();
  }

  created() {
    emitter.on('task.add', this.addTask);
    emitter.on('task.remove', this.removeTask);
  }

  destroyed() {
    emitter.off('task.add', this.addTask);
    emitter.off('task.remove', this.removeTask);
  }

  addTask = (task) => {
    this._tasks.push(task);
    this.update();
  }

  removeTask = (task) => {
    let index = this._tasks.indexOf(task);
    if (index >= 0) {
      this._tasks.splice(index, 1);
      this.update();
    }
  }

  render() {
    return (
      <div>
        <h2>TODO</h2>
        <todo-taskbar></todo-taskbar>
        <todo-tasklist>{this._tasks}</todo-tasklist>
      </div>
    );
  }
}

walas.Components.register(App);
