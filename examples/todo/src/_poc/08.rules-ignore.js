import { entity, ignore, id, rules } from 'walas';
import { required, period, length } from 'rules';

@rules([period, start, end])
@entity
export class Task {

  @id
  id;

  @rules(required, [length, 50])
  name;

  @rules(required)
  start;

  @rules(required)
  end;

  @ignore
  timestamp;
}
