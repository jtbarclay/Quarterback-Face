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
        yield put({ type: 'SET_QB', payload: qbResponse.data});
    }
    catch (error) {
        console.log('error fetching quarterbacks', error);
    }
}

function* deleteQuarterback(action) {
    try {
        yield axios.delete(`/api/admin/${action.payload.qb.id}`);
        yield put({ type: 'GET_QB' });
    }
    catch (error) {
        console.log('error deleting qb', error);
    }
}

function* editQuarterback(action) {
    try {
        yield axios.put(`/api/admin`, action.payload);
        yield put({ type: 'GET_QB' });
    }
    catch (error) {
        console.log('error editing qb', error);
    }
}

function* adminSaga() {
    yield takeEvery('ADD_QB', addQuarterback);
    yield takeEvery('GET_QB', getQuarterbacks);
    yield takeEvery('DELETE_QB', deleteQuarterback);
    yield takeEvery('EDIT_QB', editQuarterback);
}

export default adminSaga;