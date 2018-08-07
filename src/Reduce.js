import * as ActionTypes from './ActionTypes'

export default (state, action) => {
    const {item} = action;

    switch (action.type) {
        case ActionTypes.ADD:
            return {...state, ['list']: state['list'].push(item)};
        case ActionTypes.EDIT:
            return {...state, ['list']: state['list'].splice(item.index, 1, item)}
        case ActionTypes.REMOVE:
            return {...state, ['list']: state['list'].splice(item.index, 1)}
    }
}