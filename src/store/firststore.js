// firststore.js

import { createStore } from 'redux';
import rootReducer from './firstreducer';

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
