import { model, field, id, rules } from 'walas';
import { required, period, length, notBlank } from 'rules';

@rules([period, start, end])
@model export class Task {

  @id id;

  @field @rules(required, [length, 50], notBlank) name;

  @field @rules(required) start;

  @field @rules(required) end;

  timestamp;
}
