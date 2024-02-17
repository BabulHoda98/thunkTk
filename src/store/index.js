import{configureStore} from "@reduxjs/toolkit";
import{usersReducer} from "./usersSlice"
// import { editReducer } from "./editdataslice";

export const store =configureStore({
    reducer:{
        usersData:usersReducer
        // editdata:editReducer
    }
})