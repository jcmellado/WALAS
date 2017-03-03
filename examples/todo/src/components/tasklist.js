import * as walas from 'walas';
import { emitter } from '../services/emitter.js';

export class TaskList extends walas.ComponentBase {

  _tasks = ['Wash the car', 'Meet Susan', 'Buy eggs'];

  static componentName() {
    return 'todo-tasklist';
  }

  constructor() {
    super();

    emitter.on('task.add', this.addTask.bind(this));
    emitter.on('task.remove', this.removeTask.bind(this));
  }

  addTask(task) {
    this._tasks.push(task);
    this.refresh();
  }

  removeTask(task) {
    let index = this._tasks.indexOf(task);
    if (index >= 0) {
      this._tasks.splice(index, 1);
    }
    this.refresh();
  }

  render() {
    return <div>
      <ul>
        {this._tasks.map((task) => <li><todo-taskitem name={task} /></li>)}
      </ul>
    </div>;
  }
}
