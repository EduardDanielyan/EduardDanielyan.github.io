import { SET_PRICE_LIST, SET_SPA, SET_SPA_INFO } from "./types";

export function setSpa(data) {
    return {
        type: SET_SPA,
        payload: data
    }
}

export function setLsit(data) {
    return {
        type: SET_PRICE_LIST,
        payload: data
    }
}

export function setProcedure(data) {
    return {
        type: SET_SPA_INFO,
        payload: data
    }
}