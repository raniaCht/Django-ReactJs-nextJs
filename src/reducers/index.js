import { combineReducers } from 'redux';
import authReducer from './auth';
import drawerReducer from './drawer';

export default combineReducers({
    auth: authReducer,
    drawer: drawerReducer,
});