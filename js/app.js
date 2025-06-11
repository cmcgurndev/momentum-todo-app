'use strict';

function Todo(id, title, isDone) {
  this.id = id;
  this.title = title;
  this.isDone = isDone;
}

Todo.prototype.setTitle = function (title) {
  if (!title) return;
  this.title = title;
};

Todo.prototype.setIsDone = function (isDone) {
  if (!isDone || typeof isDone !== 'boolean') return;
  this.isDone = isDone;
};
