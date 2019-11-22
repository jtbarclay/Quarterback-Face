import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCompare() {
    try {
        const qbResponse = yield axios.get('/api/compare');
        yield put({ type: 'SET_COMPARE', payload: qbResponse.data});
    }
    catch (error) {
        console.log('error fetching compare', error);
    }
}

function* awsSaga() {
    yield takeEvery('GET_COMPARE', getCompare);
}

export default awsSaga;