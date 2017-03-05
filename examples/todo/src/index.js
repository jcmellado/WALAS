import * as walas from 'walas';
import { App } from './components/app.js';

// Application


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

