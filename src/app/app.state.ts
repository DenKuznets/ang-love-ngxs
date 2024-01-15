import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddTodo } from './app.actions';
import { TodoModel, TodoStateModel } from './todo-state.model';

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: [],
  },
})
@Injectable()
export class TodoState {
  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    console.log('add todo action', action);
    const newItem: TodoModel = {
      id: Math.floor(Math.random() * 1000),
      title: action.title,
      isActive: true,
    };

    ctx.setState({
      ...state,
      items: [...state.items, newItem],
    });
  }
}
