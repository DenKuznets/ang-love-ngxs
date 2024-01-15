import { Selector } from '@ngxs/store';
import { TodoStateModel } from './todo-state.model';
import { TodoState } from './app.state';

export class TodoSelectors {
  @Selector([TodoState])
  static items(state: TodoStateModel) {
    return state.items;
  }

  @Selector([TodoState])
  static doneItems(state: TodoStateModel) {
    return state.items.filter((it) => !it.isActive);
  }

  @Selector([TodoState])
  static activeItems(state: TodoStateModel) {
    return state.items.filter((it) => it.isActive);
  }
}
