import { NAVIGATION_OPEN } from '../constants/ActionTypes'
import React from 'react'

const initialState = {
    open: false
}
export default function update(state = initialState, action) {
    console.log("navigation - update, action:", action)
    switch (action.type) {
        case NAVIGATION_OPEN:
            return {
                open: action.open
            }
        default:
            return state
    }
}
