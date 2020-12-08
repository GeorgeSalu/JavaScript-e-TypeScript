import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../types';

function* loginRequest({ payload }) {}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
