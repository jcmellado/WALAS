import { required, notBlank, length } from 'walas';

export class Task {

  id;

  @notBlank
  @length(50)
  @required
  name;

  @required
  done;
}
