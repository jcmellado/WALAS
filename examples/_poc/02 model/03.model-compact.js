import { model, field, id, rules } from 'walas';
import { required, period, length } from 'rules';

@rules([period, start, end])
@model export class Task {

  @id id;

  @field @rules(required, [length, 50]) name;

  @field @rules(required) start;

  @field @rules(required) end;

  timestamp;
}
