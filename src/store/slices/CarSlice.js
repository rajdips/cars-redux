import { createSlice, nanoid } from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm:'',
        cars: []
    },
    reducers:{
        addCars(state,action){
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()                
        });

        },
        removeCars(state,action){
            const filterCars = state.cars.filter((cars)=>{
                return cars.id !== action.payload
            });
            state.cars = filterCars;
        },
        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        }


    }
});

export const carReducer = carSlice.reducer;
export const {addCars, removeCars, changeSearchTerm} = carSlice.actions;