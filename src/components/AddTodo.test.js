import React from 'react';
import { shallow } from 'enzyme';

import AddTodo from './AddTodo';

it('renders without crashing', () => {
  shallow(<AddTodo />);
});
