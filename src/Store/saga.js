import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects'
import { checkUser, setLogin, setProcedure, setSpa } from "./Gym/action";
import Swal from "sweetalert2";
import UserChek from "../Pages/userChack";

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
        yield put(checkUser(true))
        navigate('/profile')
    }
}

function* profile() {
    let { data } = yield Axios.post("http://localhost:4000/profile")
    console.log(data);
    yield put(setLogin(data.user))
}


// function* logOUT({ navigate }) {
//     let logOut = yield Axios.post("http://localhost:4000/logout")
//     if (logOut) {
//         yield put(checkUser(false))
//         console.log(logOut);
//         navigate('/signin')
//     }

// }

function* usercheck({path,navigate}) {
    let {data} = yield Axios.post("http://localhost:4000/userCheck")
    console.log(data);
    yield put(checkUser(data))
    if(data){
        navigate(path)
    }else{
        navigate('/signin')
    }
}


export function* rootSaga() {
    yield takeEvery('showSpa', spa)
    yield takeEvery('showId', moreSpa)
    yield takeEvery('register', signup)
    yield takeEvery('log', login)
    yield takeEvery('userInfo', profile)
    // yield takeEvery('out', logOUT)
    yield takeEvery('checkUser',usercheck)
}