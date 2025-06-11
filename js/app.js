'use strict';

// Constructor functions

function List(id, listName) {
  this.id = id;
  this.listName = listName;
  this.listItems = [];
}

List.prototype.addItem = function (listItem) {
  if (!listItem) return;
  this.listItems.push(listItem);
};

List.prototype.removeItem = function (id) {
  if (!id) return;
  const itemToRemove = this.listItems.findIndex((item) => item.id === id);
  if (itemToRemove < 0) return;
  this.listItems.splice(itemToRemove);
};

List.prototype.getList = function () {
  return this.listItems;
};

List.prototype.getId = function () {
  return this.id;
};

List.prototype.getListName = function () {
  return this.listName;
};

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

// App main

const lists = [];
const addListName = document.querySelector('[data-list-name]');
const addListBtn = document.querySelector('[data-add-list]');
const listEntryPoint = document.querySelector('[data-list-entry]');

function handleAddList(event) {
  const list = new List(crypto.randomUUID(), addListName.value || 'Untitled');
  addListName.value = '';
}

addListBtn.addEventListener('click', handleAddList);
