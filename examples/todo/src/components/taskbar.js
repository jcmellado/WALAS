import * as walas from 'walas';
import { emitter } from '../services/emitter.js';


export class TaskBar extends walas.ComponentBase {

  static componentName() {
    return 'todo-taskbar';
  }

  constructor() {
    super();
  }

  addTask() {
    emitter.emit('task.add', this._task);
  }

  changed(event) {
    this._task = event.target.value;
  }

  render() {
    return <div>
      <h2>TODO</h2>
      <input type="text" placeholder="Task..." onChange={this.changed} />
      <button onClick={this.addTask}>Add</button>
    </div>;
  }
}

