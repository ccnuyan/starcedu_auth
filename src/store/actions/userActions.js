import actionTypes from '../actionTypes';
import utils from '../../utils';
import config from '../../frontend/config';
import fill from './messageMiddleware';

const base = config.serviceBase;

/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-return */

const signin = (info) => {
  return (dispatch) => {
    const payload = {
      method: 'POST',
      credentials: 'include',
      headers: utils.getHeaders(),
      body: JSON.stringify(info),
    };

    dispatch(fill({ type: actionTypes.USER_SIGNIN_START }));

    fetch(`${base}api/user/signin`, payload)
      .then(res => res.json())
      .then((ret) => {
        dispatch(fill({ type: actionTypes.USER_SIGNIN_END, payload: ret }));
        return;
      }).catch(() => {
        dispatch(fill({ type: actionTypes.USER_SIGNIN_ERROR }));
        return;
      });
  };
};

const signup = (info) => {
  return (dispatch) => {
    const payload = {
      method: 'POST',
      credentials: 'include',
      headers: utils.getHeaders(),
      body: JSON.stringify(info),
    };

    dispatch(fill({ type: actionTypes.USER_SIGNUP_START }));

    fetch(`${base}api/user/signup`, payload)
      .then(res => res.json())
      .then((ret) => {
        dispatch(fill({ type: actionTypes.USER_SIGNUP_END, payload: ret }));
        return;
      }).catch(() => {
        dispatch(fill({ type: actionTypes.USER_SIGNUP_ERROR }));
        return;
      });
  };
};

const signout = () => {
  return (dispatch) => {
    const payload = {
      method: 'GET',
      credentials: 'include',
      headers: utils.getHeaders(),
    };

    dispatch(fill({ type: actionTypes.USER_SIGNOUT_START }));

    fetch(`${base}api/user/signout`, payload)
      .then(res => res.json())
      .then((ret) => {
        dispatch(fill({ type: actionTypes.USER_SIGNOUT_END, payload: ret }));
        return;
      }).catch(() => {
        dispatch(fill({ type: actionTypes.USER_SIGNOUT_ERROR }));
        return;
      });
  };
};

const update_password = (info) => {
  return (dispatch) => {
    const payload = {
      method: 'PUT',
      credentials: 'include',
      headers: utils.getHeaders(),
      body: JSON.stringify(info),
    };

    dispatch(fill({ type: actionTypes.USER_UPDATE_PASSWORD_START }));

    fetch(`${base}api/user/update_password`, payload)
      .then(res => res.json())
      .then((ret) => {
        dispatch(fill({ type: actionTypes.USER_UPDATE_PASSWORD_END, payload: ret }));
        return;
      }).catch(() => {
        dispatch(fill({ type: actionTypes.USER_UPDATE_PASSWORD_ERROR }));
        return;
      });
  };
};

const oauth_signout = () => {
  return (dispatch) => {
    const payload = {
      method: 'GET',
      credentials: 'include',
      headers: utils.getHeaders(),
    };

    dispatch(fill({ type: actionTypes.USER_OAUTH_SIGNOUT_START }));

    fetch(`${base}api/oauth/signout`, payload)
      .then(res => res.json())
      .then((ret) => {
        if (ret.success) {
          dispatch(fill({ type: actionTypes.USER_OAUTH_SIGNOUT_END, payload: ret }));
        } else {
          dispatch(fill({ type: actionTypes.USER_OAUTH_SIGNOUT_ERROR }));
        }
        return;
      }).catch(() => {
        dispatch(fill({ type: actionTypes.USER_OAUTH_SIGNOUT_ERROR }));
        return;
      });
  };
};

const oauth_unlink = () => {
  return (dispatch) => {
    const payload = {
      method: 'POST',
      credentials: 'include',
      headers: utils.getHeaders(),
    };

    dispatch(fill({ type: actionTypes.USER_OAUTH_UNLINK_START }));

    fetch(`${base}api/oauth/unlink`, payload)
      .then(res => res.json())
      .then((ret) => {
        if (ret.success) {
          dispatch(fill({ type: actionTypes.USER_OAUTH_UNLINK_END, payload: ret }));
        } else {
          dispatch(fill({ type: actionTypes.USER_OAUTH_UNLINK_ERROR }));
        }
        return;
      }).catch(() => {
        dispatch(fill({ type: actionTypes.USER_OAUTH_UNLINK_ERROR }));
        return;
      });
  };
};

const setSubmitMode = (dispatch, mode) => {
  dispatch({
    type: actionTypes.USER_SET_SUBMIT_INFO,
    payload: {
      mode,
    },
  });
};

const setSubmitInfo = (dispatch, info) => {
  dispatch({
    type: actionTypes.USER_SET_SUBMIT_INFO,
    payload: info,
  });
};

export default {
  signin,
  signup,
  signout,
  update_password,
  oauth_unlink,
  oauth_signout,
  setSubmitMode,
  setSubmitInfo,
};
