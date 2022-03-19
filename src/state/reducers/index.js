import {combineReducers} from 'redux';
import store from './store';
import customer from './customer';
import items from './items';
import orders from './orders';
import placeorder from './placeorder';
import putItems from './putItems';

const reducers = combineReducers({
    store,
    customer,
    items,
    orders,
    placeorder,
    putItems
})

export default reducers