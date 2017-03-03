import { entity, field, id, rules } from 'walas';
import { required, period, length, lte, gte } from 'rules';

@rules([period, start, end])
@entity
export class Task {

  @id
  id;

  @field
  @rules(required, [length, 50])
  name;

  @field
  @rules(required, [lte, end])
  start;

  @field
  @rules(required, [gte, start])
  end;
}
