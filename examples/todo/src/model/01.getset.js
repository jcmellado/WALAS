import * as walas from 'walas';

export class Task {

  get id() {
    return this._id;
  };

  @walas.required
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  @walas.notBlank
  @walas.length(50)
  @walas.required
  set name(name) {
    this._name = name;
  }

  get done() {
    return this_.done;
  }

  @walas.required
  set done(done) {
    this._done = done;
  }
}
