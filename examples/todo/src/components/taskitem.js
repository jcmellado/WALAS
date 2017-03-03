import * as walas from 'walas';
import { emitter } from '../services/emitter.js';

export class TaskItem extends walas.ComponentBase {

  static componentName() {
    return 'todo-taskitem';
  }

  constructor(task) {
    super();

    this._task = task;
  }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChanged(attr, oldValue, newValue) {
    this._task = newValue;
    this.refresh();
  }

  taskDone(event) {
    let style = event.target.style;
    style.textDecoration = style.textDecoration === '' ? 'line-through' : '';
  }

  removeTask(event) {
    emitter.emit('task.remove', this._task);
  }

  render() {
    return <span>
      <span onClick={this.taskDone}>{this._task}</span>
      <span onClick={this.removeTask}>x</span>
    </span>;
  }
}
