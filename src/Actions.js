import * as Actiontypes from './ActionTypes'

export const add = (item) => {
    return {
        type: Actiontypes.ADD,
        item: item
    }
}

export const edit = (item) => {
    return {
        type: Actiontypes.EDIT,
        item: item
    }
}

export const remove = (item) => {
    return {
        type: Actiontypes.REMOVE,
        item: item
    }
}