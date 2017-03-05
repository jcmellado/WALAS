import * as walas from 'walas';
import { emitter } from '../services/emitter.js';

export class TaskBar extends walas.Component {

  static name() {
    return 'todo-taskbar';
  }

  constructor() {
    super();
  }

  addTask = (event) => {
    event.preventDefault();
    let text = this.root.querySelector('#text'); // TODO refs
    emitter.emit('task.add', text.value);
    return false;
  }

  render() {
    return (
      <div>
        <form onsubmit={this.addTask}>
          <input type='text' id='text' placeholder="Task..." />
          <input type='submit' value='Add' />
        </form>
      </div>
    );
  }
}

walas.Components.register(TaskBar);
