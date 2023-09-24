// Idhr hamary sary reducers save hongy aur agr multiple reducers hongy to yha p cobine hongy just
// Sab se pehly reducers import krlo
import Addingtocart from "./UpdatingCart";
// Mulitple reducers ko aik sath rkhny k lie combine krna prta hai,filhal aik increment use m ha agy jb ziada hongy tb combinereducer kam ata
import { combineReducers } from "redux";
// then aik root reducer m sary reducers ko combine kr k rakh dia
const rootReducer=combineReducers({
    Addingtocart
})
export default rootReducer;