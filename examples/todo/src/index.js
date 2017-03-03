import * as walas from 'walas';
import { App } from './components/app.js';
import { TaskBar } from './components/taskbar.js';
import { TaskList } from './components/tasklist.js';
import { TaskItem } from './components/taskitem.js';

// Application

walas.Components.register(TaskBar);
walas.Components.register(TaskList);
walas.Components.register(TaskItem);
walas.Components.register(App);

let app = walas.Components.getComponent('todo-app');

walas.bootstrap(document.getElementById('app'), app);

// Model

class Task {

  id;

  @walas.notBlank
  @walas.length(10)
  @walas.required
  name;

  @walas.required
  done;
}

