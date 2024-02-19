// firststore.js

import { createStore } from 'redux';
import rootReducer from './firstreducer';

const store = createStore(rootReducer);

export default store;
