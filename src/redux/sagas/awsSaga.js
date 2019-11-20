import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* checkSymmetry(action) {
    try {
        yield put({ type: 'NEXT_PAGE' });
        const awsResponse = yield axios.post('/api/aws', action.payload);
        yield put({ type: 'SET_SYMMETRY', payload: awsResponse.data});
        yield put({ type: 'NEXT_PAGE' });
    }
    catch (error) {
        console.log('error sending image to server', error);
    }
}

function* awsSaga() {
    yield takeEvery('UPLOAD_PICTURE', checkSymmetry);
}

export default awsSaga;