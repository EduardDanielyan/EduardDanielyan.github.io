import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects'
import { setLogin, setProcedure, setSpa } from "./Gym/action";
import Swal from "sweetalert2";

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

function* signup({ data }) {
    yield Axios.post("http://localhost:4000/registration", { data: data })
    console.log(data);
}

function* login({ data, navigate }) {
    let result = yield Axios.post("http://localhost:4000/signin", data)
    console.log(result);
    if ('error' in result.data) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User not found!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    else {
        // yield put(checkUser(true))
        navigate('/profile')
    }
}

function* profile(){
   let {data} = yield Axios.post("http://localhost:4000/profile")
   console.log(data);
   yield put(setLogin(data.user))
}

export function* rootSaga() {
    yield takeEvery('showSpa', spa)
    yield takeEvery('showId', moreSpa)
    yield takeEvery('register', signup)
    yield takeEvery('log', login)
    yield takeEvery('userInfo' , profile)
}