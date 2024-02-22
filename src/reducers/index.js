import { combineReducers } from 'redux';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import firstReducer from './firstreducer';
import calculatorreducer from './calculatorreducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  firstReducer:firstReducer,
  calculatorreducer:calculatorreducer,
});
