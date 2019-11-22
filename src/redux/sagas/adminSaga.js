import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addQuarterback(action) {
    try {
        yield axios.post('/api/admin', action.payload);
        yield put({ type: 'GET_QB' });
    }
    catch (error) {
        console.log('error sending qb to server', error);
    }
}

function* getQuarterbacks() {
    try {
        const qbResponse = yield axios.get('/api/admin');
        yield put({ type: 'SET_QB', payload: qbResponse.data})
    }
    catch (error) {
        console.log('error fetching quarterbacks', error);
    }
}

function* adminSaga() {
    yield takeEvery('ADD_QB', addQuarterback);
    yield takeEvery('GET_QB', getQuarterbacks);
}

export default adminSaga;