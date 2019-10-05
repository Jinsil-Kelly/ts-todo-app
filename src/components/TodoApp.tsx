import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import { RootState } from '../modules';
import { remove, insert, toggle } from '../modules/todos/actions';

const TodoApp = () => {
  const todos = useSelector(({ todos }: RootState) => todos.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(insert(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggle(id));
  };

  const onRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default TodoApp;
