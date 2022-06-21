import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); //loading start
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      }); //in case success
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); // in case error
      dispatch(finishLoading(type));
      throw e; //showing error on component
    }
  };
}
