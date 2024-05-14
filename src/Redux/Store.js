import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
    reducer:{
        app : appSlice,
        search: SearchSlice
    }
})

export default Store