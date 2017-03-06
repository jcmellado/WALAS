import { rules } from 'walas';
import { required, period, lte, gte } from 'rules';

@rules([period, 'start', 'end'])
export class Task {

  id;

  @rules(required, [lte, 'end'])
  start;

  @rules(required, [gte, 'start'])
  end;
}
