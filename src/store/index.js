import { configureStore } from "@reduxjs/toolkit";
import { carReducer, addCars, removeCars, changeSearchTerm} from "./slices/CarSlice";
import { formReducer, changeCost, changeName } from "./slices/FormSlice";
const store=configureStore({
    reducer:{
        cars: carReducer,
        forms: formReducer
    }
});
export {store, carReducer, addCars, removeCars, changeSearchTerm, formReducer, changeCost, changeName};