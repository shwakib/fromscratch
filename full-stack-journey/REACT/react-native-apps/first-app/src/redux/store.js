import { rootreducer } from "./reducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const Store = createStore(rootreducer, applyMiddleware(thunk));

export default Store;