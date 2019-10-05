import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;

export interface Todo {
  readonly id: number;
  readonly text: string;
  readonly checked: boolean;
}

export interface TodosState {
  todos: Todo[]
}
