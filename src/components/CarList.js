import { useReducer } from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeCars } from "../store";
function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({forms,cars:{cars, searchTerm}})=>{
   // console.log("GGGGGGGGGG==&&",cars);
    return  cars.filter(car=>car.name.toLowerCase().includes(searchTerm.toLowerCase()))

  });

  const delEntry = (car)=>{
    console.log(car.id);
    dispatch(removeCars(car.id));

  }
  
  const renderCars = cars.map(car=>{
return (
  <div key={car.id} >
<p>{car.name}----{car.cost}</p>
<button onClick={()=>delEntry(car)} className="button is-danger">Delete</button>
    
  </div>
)

  });
  
  return <div className="car-list">{renderCars}</div>;
}

export default CarList;
