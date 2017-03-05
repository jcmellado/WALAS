import * as walas from 'walas';
import { emitter } from '../services/emitter.js';

export class TaskItem extends walas.Component {

  static name() {
    return 'todo-taskitem';
  }

  constructor() {
    super();
  }

  taskDone = (event) => {
    let style = event.target.style;
    style.textDecoration = style.textDecoration === '' ? 'line-through' : '';
  }

  render() {
    return (
      <span onclick={this.taskDone}>{this.props.children[0]}</span>
    );
  }
}

walas.Components.register(TaskItem);
