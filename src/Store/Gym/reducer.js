import { logState } from "./state"
import { CHECK_USER, SET_LOGIN_DATA, SET_PRICE_LIST, SET_SPA, SET_SPA_INFO } from "./types"

export const logReducer = (state = logState, option) => {
    switch (option.type) {
        case SET_SPA:
            state.spa = option.payload
            break
        case SET_PRICE_LIST:
            state.priceList = option.payload
            break
        case SET_SPA_INFO:
            state.spaInformation = option.payload
            break
        case SET_LOGIN_DATA:
            state.login = option.payload
            break
        case CHECK_USER:
            state.auth = option.payload
            break
        default:
            break
    }
    return { ...state }
}