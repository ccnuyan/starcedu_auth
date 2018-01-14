import fetchMiddleware from './fetchMiddlware';
import utils from '../../utils';
import messageMiddleware from './messageMiddleware';


const getAction = (params) => {
  return (dispatch) => {
    const payload = {
      method: params.method,
      credentials: 'include',
      headers: utils.getHeaders(),
    };

    if (params.body) {
      payload.body = JSON.stringify(params.body);
    }

    if (params.actionTypes.start) {
      dispatch(messageMiddleware({ type: params.actionTypes.start }));
    }

    fetch(params.url, payload)
        .then(fetchMiddleware)
        .then((ret) => {
          if (params.actionTypes.end) {
            dispatch(messageMiddleware({ type: params.actionTypes.end, payload: ret }));
          }
        }).catch((err) => {
          if (params.actionTypes.error) {
            dispatch(messageMiddleware({ type: params.actionTypes.error, payload: err }));
          }
        });
  };
};

export default getAction;
