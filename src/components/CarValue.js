import { useDispatch,useSelector } from "react-redux";
function CarValue() {
const dispatch = useDispatch();
 
const totalValue = useSelector(({cars:{cars,searchTerm}})=>{
  //console.log("XXXXXXXXXXXXXXX",searchTerm);
   const filtercars = cars.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));
   //console.log("YYYYYYYYY",filtercars);
   const filterValue = filtercars.reduce((total,cars)=>{
    //console.log("total",total+cars.cost);
    //console.log("totcars",cars);
    return total+cars.cost
  },0);
  return filterValue;
});

  return <div>Total Cost - #{totalValue}</div>;
}

export default CarValue;
