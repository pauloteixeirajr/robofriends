import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as actions from './actions';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'da';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('requestRobots', () => {
  it('should handle robots API request', async () => {
    const store = mockStore();
    await store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedPendingAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    const expectedSuccessAction = {
      type: REQUEST_ROBOTS_SUCCESS,
    };
    expect(action[0]).toEqual(expectedPendingAction);
    expect(action[1].type).toEqual(expectedSuccessAction.type);
  });
});
