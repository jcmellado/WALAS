import * as walas from 'walas';
import { TaskItem } from './taskitem.js';

export class TaskList extends walas.Component {

  static name() {
    return 'todo-tasklist';
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.children.map(
            task => <li><todo-taskitem>{task}</todo-taskitem></li>)}
        </ul>
      </div>
    );
  }
}

walas.Components.register(TaskList);
