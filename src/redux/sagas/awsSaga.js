import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* checkSymmetry(action) {
    try {
        const awsResponse = yield axios.post('/api/aws', action.payload);
        yield put({ type: 'SET_SYMMETRY', payload: awsResponse.data});
    }
    catch (error) {
        console.log('error sending image to server', error);
    }
}

function* awsSaga() {
    yield takeEvery('UPLOAD_PICTURE', checkSymmetry);
}

export default awsSaga;