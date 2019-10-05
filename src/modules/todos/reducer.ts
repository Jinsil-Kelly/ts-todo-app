import produce from 'immer';
import {createReducer} from 'typesafe-actions';
import {TodosAction, TodosState} from './types';
import {INSERT, TOGGLE, REMOVE} from './actions';
// 초깃값 설정
const initialState: TodosState = {
  todos: [],
};
let id = 1; // insert 가 호출 될 때마다 1씩 더해집니다.

const todos = createReducer<TodosState, TodosAction>(initialState,
  {
    [INSERT]: (state, {payload: text}) => produce(state, draft => {
      draft.todos.push({
        id: id++,
        text,
        checked: false,
      });
    }),
    [TOGGLE]: (state, {payload: id}) => produce(state, draft => {
      draft.todos.find(todo => {
        if (todo.id === id) todo.checked = !todo.checked;
      });
    }),
    [REMOVE]: (state, {payload: id}) => produce(state, draft => {
      const index = draft.todos.findIndex(todo => todo.id === id);
      draft.todos.splice(index, 1);
    }),
  });

export default todos;
