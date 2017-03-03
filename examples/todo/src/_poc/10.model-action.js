import { model, field, id, rules } from 'walas';
import { required, period, length } from 'rules';

@model export class Customer {

  @id id;

  @field @rules([length, 50]) name;

  @field @rules([length, 50]) surname;

  @field @rules([length, 50]) surname2;

  @hasMany(Address) addresses;

  @hasMany(Phone) @rules(notEmpty) phones;

  @action('customer-manage-phones') addPhones() {
  }
  @action('customer-manage-phones') updatePhones() {
  }
  @action('customer-manage-phones') deletePhones() {
  }
}
