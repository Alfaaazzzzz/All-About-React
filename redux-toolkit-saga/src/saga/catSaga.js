import {call, put, takeEvery} from 'redux-saga/effects'
import { getCatsSuccess } from '../store/cat-Slice'

//worker function
function* workGetCatsFetch(){
    const cats= yield call(()=> fetch('https://api.thecatapi.com/v1/breeds')) //calling the api
    const formattedCats= yield cats.json()
    const formatedCatsShortened= formattedCats.slice(0,30) //slicing to only 10 cats data
    yield put(getCatsSuccess(formatedCatsShortened)) //sending the data as action to getCatsSuccess acion
}

//watcher function
function* catSaga(){
    yield takeEvery('cats/getCatsFetch',workGetCatsFetch)
    //cats --> name of slice
    //getCatsFetch--> reducer Function
}

export default catSaga