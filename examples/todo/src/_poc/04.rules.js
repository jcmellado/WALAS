import * as walas from 'walas';
import * as Rules from 'rules';

export class Task {

  id;

  @walas.rules(Rules.notBlank, [Rules.length, 50], Rules.required)
  name;

  @walas.rules(Rules.required)
  done;
}

