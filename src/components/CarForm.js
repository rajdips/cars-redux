import { useDispatch,useSelector } from "react-redux";
import { changeName,addCars,changeCost } from "../store";
function CarForm() {
  const dispatch = useDispatch();
 // const name = '';
  const name1 = useSelector((state)=>{
    console.log("mmm", state);
    return state.form
  });

const {name, cost} = useSelector((state)=> {
  console.log(state.forms);
  return state.forms;
});
const handleNameChange = (event)=>{
console.log(event.target.value);
dispatch(changeName(event.target.value));

//dispatch(event.target.value);
}
const handleCostChange=(event)=>{
//console.log(event.target.value);
const carCost = parseInt(event.target.value) || 0;
dispatch(changeCost(carCost));
}

function addCarInArray(event){

  //console.log("AAAA",event);
  //console.log("+========+",name);

 event.preventDefault();
 dispatch(addCars({name,cost}));
 //dispatch(changeName(''));
 //dispatch(changeCost(0));
}

  return <div className="car-form panel">
  <h4 className="subtitle is-3">Add Car</h4>
  <form onSubmit={addCarInArray}>
    <div className="field-group">
      <div className="field">
        <label className="label">Name</label>
        <input
          className="input is-expanded"
          value={name}
          onChange={handleNameChange}
        />
              <label className="label">Cost</label>
        <input
          className="input is-expanded"
          value={cost || ''}
          onChange={handleCostChange}
        />
      </div>
    </div>
    <div className="field">
          <button className="button is-link">Submit</button>
        </div>
  </form>
</div>;
}


export default CarForm;
