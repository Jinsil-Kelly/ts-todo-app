import React, {useCallback} from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import {Todo} from '../modules/todos/types';

type TodoListItem = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  style: object
};

const TodoListItem = ({
                        todo, onRemove, onToggle, style,
                      }: TodoListItem) => {
  const {id, text, checked} = todo;
  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          data-testid={`toggleBtn-${id}`}
          className={cn('checkbox', {checked})}
          onClick={toggle}
        >
          {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
          <div className="text">{text}</div>
        </div>
        <div
          className="remove"
          data-testid={`removeBtn-${id}`}
          onClick={remove}
        >
          <MdRemoveCircleOutline/>
        </div>
      </div>
    </div>
  );
};

TodoListItem.defaultProps = {
  onRemove: (id: number) => console.log(`${id} is removed`),
  onToggle: (id: number) => console.log(`${id} is toggled`),
};
export default React.memo(TodoListItem);
