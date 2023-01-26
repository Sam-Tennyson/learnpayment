import { combineReducers } from 'redux';
import dashboard from './Dashboard';

const appReducer = combineReducers({
  dashboard: dashboard
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
};

export default RootReducer;