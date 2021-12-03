import {
    CLOSE_DRAWER,
    OPEN_DRAWER
} from './types'

export const openDrawer = (open) => dispatch => {
    dispatch({ type: OPEN_DRAWER, payload: open })
}

export const closeDrawer = () => ({ type: CLOSE_DRAWER, payload: false })