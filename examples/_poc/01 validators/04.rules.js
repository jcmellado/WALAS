import * as walas from 'walas';
import * as Rules from 'rules';

export class Task {

  id;

  @walas.rules(Rules.required, Rules.notBlank, [Rules.length, 50])
  name;

  @walas.rules(Rules.required)
  done;
}

