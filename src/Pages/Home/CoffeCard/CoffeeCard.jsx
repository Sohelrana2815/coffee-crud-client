import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDelete }) => {
  const { name, price, supplier, photoURL, _id } = coffee;

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row border w-full justify-start">
        <img src={photoURL} className="rounded-lg shadow-2xl" />
        <div className="space-y-4  w-full">
          <h1>Name : {name}</h1>
          <p>Price : $ {price}</p>
          <p>Supplier : {supplier}</p>
        </div>
        <div className="join join-vertical space-y-2">
          <button className="btn  btn-info">View</button>
          <Link to={`/update/${_id}`}>
            <button className="btn  btn-success w-full">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn  btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
