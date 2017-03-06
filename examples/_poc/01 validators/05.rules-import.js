import { rules } from 'walas';
import { required, notBlank, length } from 'rules';

export class Task {

  id;

  @rules(required, [length, {min: 50}], notBlank)
  name;

  @rules(required)
  done;
}
