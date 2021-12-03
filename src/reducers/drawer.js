import {
    OPEN_DRAWER,
    CLOSE_DRAWER
} from '../actions/types';

const initialState = {
    Open: false
};

const drawerReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case OPEN_DRAWER:
            console.log(type)
            return {
                ...state,
                Open: payload
            }
        case CLOSE_DRAWER:
            return {
                ...state,
                Open: payload
            }
        default:
            return state
    }
}

export default drawerReducer;