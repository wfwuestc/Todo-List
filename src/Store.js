import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    'list': [
        {
            index:'1',
            value:'代办内容',
            status: 1
        }
    ]
}

const store = createStore(reducer, initValues);

export default store;