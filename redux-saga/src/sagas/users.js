import {takeEvery,takeLatest, call,fork,put} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users'
// import {getUsersSuccess} from '../actions/users'

function* getUsers(){
    try {
        const result= yield call(api.getUsers)
        yield put(actions.getUsersSuccess({
            items:result.data.data
        }))

    } catch (e) {
        
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

function* createUser(action){
    console.log(action);
    yield;
}

function* watchCreateUsersRequest(){
    yield takeLatest(actions.Types.CREATE_USERS_REQUEST,createUser)
}

const usersSagas=[
    fork(watchGetUsersRequest),
    fork(watchCreateUsersRequest)
]

export default usersSagas