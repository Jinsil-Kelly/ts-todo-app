import React from 'react';

type TodoTemplate = {
  children: object;
};
const TodoTemplate = ({ children }: TodoTemplate) => (
  <div className="TodoTemplate" data-testid="TodoTemplate">
    <div className="app-title">TODO LIST</div>
    <div className="content">{children}</div>
  </div>
);

export default TodoTemplate;
