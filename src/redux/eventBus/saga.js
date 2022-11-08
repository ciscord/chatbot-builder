import { eventChannel } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';

import { eventEmitter } from '../../lib/event-bus';
import { CUSTOM_EVENTS } from '../../constants/customEvents';

import { authActions } from '../auth/actions';

function createChannel() {

  return eventChannel(emit => {

    const refreshTokenHandler = () => {
      emit(authActions.tokenRefresh());
    };

    eventEmitter.on(CUSTOM_EVENTS.refreshToken, refreshTokenHandler);

    return () => {
      eventEmitter.off(CUSTOM_EVENTS.refreshToken, refreshTokenHandler);
    };
  });
}

export default function* eventBusSaga() {
  const channel = yield call(createChannel);
  try {
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }

  } finally {
    console.log('Event Bus Channel terminated');
  }
}
