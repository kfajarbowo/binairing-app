import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import city from "./city";
import jadwal from "./jadwal";

export default combineReducers({
  authTable: auth,
  cityTable: city,
  jadwalTable: jadwal,
});
