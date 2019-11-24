import React from 'react';
import TodoInsert from './TodoInsert';
import { action } from '@storybook/addon-actions';

export default {
  component: TodoInsert,
  title: 'TodoInsert'
};

export const todoInsert = () => <TodoInsert onInsert={action('onInsert')} />;

todoInsert.story = {
  name: 'Default'
};
