import * as types from '../constants/ActionTypes'

export function increase(amount) {
    console.log("action - increase")
    return {
        type: types.INCREASE,
        amount: amount
    }
}

export function toggleNavigation(open) {
    console.log("action - toggleNavigation, open:", open)
    return {
        type: types.NAVIGATION_OPEN,
        open: open
    }
}

export function updateTitle(title) {
    console.log("action - updateTitle, title:", title)
    return {
        type: types.UPDATE_TITLE,
        title: title
    }
}
