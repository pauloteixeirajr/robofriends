import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    search: '',
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('should render MainPage without crashing', () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

it('should filter robots correctly', () => {
  expect(wrapper.instance().filterRobots([])).toEqual([]);
});
