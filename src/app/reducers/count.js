import { INCREASE } from '../constants/ActionTypes'
import React from 'react'

const initialState = {
    number: 0
}
export default function update(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + action.amount
            }
        default:
            return state
    }
}
