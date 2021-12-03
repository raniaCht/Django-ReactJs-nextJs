import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    RESET_REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    REFRESH_SUCCESS,
    REFRESH_FAIL,
    REMOVE_AUTH_LOADING,
    SET_AUTH_LOADING
} from './types';

export const reset_register_success = () => dispatch => {
    dispatch({
        type: RESET_REGISTER_SUCCESS
    });
};

export const check_auth_status = () => async dispatch => {
    try {
        const res = await fetch('/api/account/verify', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (res.status === 200) {
            dispatch({
                type: AUTHENTICATED_SUCCESS
            });
            dispatch(load_user());
        } else {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

export const request_refresh = () => async dispatch => {
    try {
        const res = await fetch('/api/account/refresh', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (res.status === 200) {
            dispatch({
                type: REFRESH_SUCCESS
            });
            dispatch(check_auth_status());
        } else {
            dispatch({
                type: REFRESH_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: REFRESH_FAIL
        });
    }
};

export const load_user = () => async dispatch => {
    try {
        const res = await fetch('/api/account/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: LOAD_USER_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: LOAD_USER_FAIL
        });
    }
};

export const logout = () => async dispatch => {
    try {
        const res = await fetch('/api/account/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (res.status === 200) {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: LOGOUT_FAIL
        });
    }
};

export const verify = (uid, token) => async dispatch => {

    const body = JSON.stringify({ uid, token });
    try {
        await fetch('/api/account/activate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        dispatch({
            type: ACTIVATION_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};

export const login = (email, password) => async (dispatch) => {

    const body = JSON.stringify({
        email,
        password
    });
    dispatch({
        type: SET_AUTH_LOADING,
    });

    try {
        const res = await fetch('/api/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS
            });
            dispatch(load_user());
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }

    dispatch({
        type: REMOVE_AUTH_LOADING
    });
};

export const register = (
    name,
    email,
    password,
    re_password
) => async dispatch => {
    const body = JSON.stringify({
        name,
        email,
        password,
        re_password
    });

    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await fetch('/api/account/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        });
        if (res.status === 201) {
            dispatch({
                type: REGISTER_SUCCESS
            });
        } else {
            dispatch({
                type: REGISTER_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }

    dispatch({
        type: REMOVE_AUTH_LOADING
    });
};