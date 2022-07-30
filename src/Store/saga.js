import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects'
import { setProcedure, setSpa } from "./Gym/action";

const Axios = axios.create({
    withCredentials: true
})


function* spa() {
    let { data } = yield Axios.post("http://localhost:4000/spa")
    console.log(data);
    yield put(setSpa(data))
}

function* moreSpa({ id }) {
    let { data } = yield Axios.post("http://localhost:4000/procedure", { id: id })
    console.log(data);
    yield put(setProcedure(data))
}

export function* rootSaga() {
    yield takeEvery('showSpa', spa)
    yield takeEvery('showId', moreSpa)
}