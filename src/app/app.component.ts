import { Component, Injectable } from '@angular/core';
import { Action, Select, State, StateContext, Store } from '@ngxs/store';
import { AddTodo } from './app.actions';
import { Observable } from 'rxjs';
import { TodoModel } from './todo-state.model';
import { TodoSelectors } from './app.selectors';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <label for="title">Enter your TODO item</label>
    <input id="title" name="title" [(ngModel)]="newTitle" />
    <button (click)="add()">add</button>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ang-love-ngxs';
  newTitle: string = '';

  @Select(TodoSelectors.items)
  items$!: Observable<TodoModel[]>;

  @Select(TodoSelectors.activeItems)
  activeItems$!: Observable<TodoModel[]>;

  @Select(TodoSelectors.doneItems)
  doneItems$!: Observable<TodoModel[]>;

  constructor(private store: Store) {}

  add() {
    this.store.dispatch(new AddTodo(this.newTitle));
    this.newTitle = '';
  }
}
