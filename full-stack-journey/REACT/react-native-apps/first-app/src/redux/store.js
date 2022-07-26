import { rootreducer } from "./reducer";
import { createStore } from 'redux'

const Store = createStore(rootreducer);

export default Store;