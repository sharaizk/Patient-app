import { combineReducers } from "redux";
import authSlice from "./authSlice";
import patientSlice from "./patientSlice";
export default combineReducers({ authSlice, patientSlice });
