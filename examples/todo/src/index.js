import * as walas from 'walas';
import { App } from './components/app.js';

import * as validatorjs from 'validator.js';



// Rules - 1

class Task1 {

  id;

  @walas.notBlank
  @walas.length(10)
  @walas.required
  name;

  @walas.required
  done;
}

let task1 = new Task1();
task1.name = '                   ';
task1.done = false;
let errors1 = walas.validate_old(task1);

console.log('**** Errors (1)');

errors1.forEach(error => console.log(error));

// Rules - 2

const required = function(key, value, params) {
 return value == null ? `${key}: Required` : '';
};
const length = function(key, value, params) {
  return value.length < params.min ? `${key}: Wrong length` : '';
};
const notBlank = function(key, value, params) {
  return value && value.trim() === '' ? `${key}: Can\'t be blank` : '';
};

class Task2 {

  id;

  @walas.rules(required, [length, {min: 10}], notBlank)
  name;

  @walas.rules(required)
  done;
}

let task2 = new Task2();
task2.name = '                    ';
task2.done = false;
let errors2 = walas.validate(task2);

console.log('**** Errors (2)');

errors2.forEach(error => console.log(error));



// Rules - 3

const requiredjs = function(key, value, params) {
  return validatorjs.validator().validate(value+'', validatorjs.Assert.required());
};
const lengthjs = function(key, value, params) {
  return validatorjs.validator().validate(value+'', validatorjs.Assert.ofLength(params));
};
const notBlankjs = function(key, value, params) {
  return validatorjs.validator().validate(value+'', validatorjs.Assert.notBlank());
};

class Task3 {

  id;

  @walas.rules(requiredjs, [lengthjs, {min: 10, max: 20}], notBlankjs)
  name;

  @walas.rules(requiredjs)
  done;
}

let task3 = new Task3();
task3.name = '                        ';
task3.done = false;
let errors3 = walas.validate(task3);

console.log('**** Errors (3)');

errors3.forEach(error => console.log(error));



// TODO

console.log('**** App');

let app = walas.Components.getComponent('todo-app');

walas.bootstrap(document.getElementById('app'), app);



