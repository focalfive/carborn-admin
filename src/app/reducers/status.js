import { UPDATE_TITLE } from '../constants/ActionTypes'
import React from 'react'

const initialState = {
    title: "",
}
export default function update(state = initialState, action) {
    console.log("status - update, action:", action)
    switch (action.type) {
        case UPDATE_TITLE:
            return {
                title: action.title
            }
        default:
            return state
    }
}
