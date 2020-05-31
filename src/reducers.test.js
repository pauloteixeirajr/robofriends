import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    search: '',
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ search: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD ', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc',
      })
    ).toEqual({ search: 'abc' });
  });
});

describe('requestsRobots', () => {
  const initialStatesRobots = {
    error: '',
    robots: [],
    isPending: false,
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStatesRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStatesRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStatesRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: 'RobotTest',
            email: 'robot@gmail.com',
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 123,
          name: 'RobotTest',
          email: 'robot@gmail.com',
        },
      ],
      isPending: false,
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStatesRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Api error',
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: 'Api error',
    });
  });
});
