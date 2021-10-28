import './Location.css';

const Location = ({ location ,  }) => {
  return <div className="location">
      <p>Street No :  {location.street.number} </p>
      <p> Street Name: {newFunction()}</p>
      <p> City :  {location.city}</p>
      <p> State :  {location.state}</p>
      <p> Postal Code:  {location.postcode}</p>
      <p>Country:  {location.country}</p>
    </div>;

  function newFunction() {
    return location.street.name;
  }
};

export default Location;
