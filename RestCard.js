import { CDN_URL } from "../utils.js/constants";

const RestCard = (props) => {
    const {resData} = props;
    const{name, areaName,  costForTwo, cloudinaryImageId} = resData.info;
    return (
      <div className="rescard">
        <div className="reslogo">
          <img
            className="resimg"
            alt="res-logo"
            src={CDN_URL+ cloudinaryImageId}
          />
        </div>
        <h3>{name}</h3>
        <h3>{areaName}</h3>
        {/* <h3>{cuisines}</h3> */}
        <h3>{costForTwo}</h3>
  
      </div>
    );
  };

  export default RestCard;