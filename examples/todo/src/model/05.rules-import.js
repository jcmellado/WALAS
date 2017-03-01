import { rules } from 'walas';
import { required, notBlank, length } from 'rules';

export class Task {

  id;

  @rules(notBlank, [length, 50], required)
  name;

  @rules(required)
  done;
}
