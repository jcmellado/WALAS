import * as walas from 'walas';

export class Task {

  id;

  @walas.notBlank
  @walas.length(50)
  @walas.required
  name;

  @walas.required
  done;
}
