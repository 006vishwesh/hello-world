
import RestCard from "./RestCard";
import restList from "../utils.js/mockdata";
const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">
          {restList.restaurants.map((restaurant)=> (<RestCard  key = {restaurant.info.id} resData = {restaurant}/>))}
        </div>
      </div>
    );
  };
export default Body;