import { createAction, handleActions } from 'redux-actions';

//action type
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

//set payload as action-type for request 요청을 위한 액션타입을 payload로 설정

//start loading/finish loading/making action function and export
//로딩 시작/끝 액션 함수를 만들고 외부에서 사용할 수 있도록 공개
export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);

// init states
const initialState = {};

// reducer
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
