'use strict';

function Todo(id, title, isDone) {
  this.id = id;
  this.title = title;
  this.isDone = isDone;
}

Todo.prototype.getId = function () {
  return this.id;
};

Todo.prototype.setTitle = function (title) {
  if (!title) return;
  this.title = title;
};

Todo.prototype.getTitle = function () {
  return this.title;
};

Todo.prototype.setIsDone = function (isDone) {
  if (!isDone || typeof isDone !== 'boolean') return;
  this.isDone = isDone;
};

Todo.prototype.getIsDone = function () {
  return this.isDone;
};
