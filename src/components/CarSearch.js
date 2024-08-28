import { changeSearchTerm } from "../store";
import { useDispatch,useSelector } from "react-redux";
function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>{return state.cars.searchTerm});
  let changeSearch = (event)=>{
  console.log("XXXXX", event.target.value)
  dispatch(changeSearchTerm(event.target.value));
  }
  return( <div className="list-header">
    <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input className="input" value={searchTerm} onChange={changeSearch}/>
      </div>
    </div>
    );
}

export default CarSearch;
