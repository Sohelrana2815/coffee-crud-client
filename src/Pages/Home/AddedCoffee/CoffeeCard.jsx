import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { photoURL, name, price, supplier, _id } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };

  return (
    <>
      <div className="card card-side bg-[#F5F4F1] shadow-xl flex flex-col md:flex-row">
        <figure>
          <img src={photoURL} alt={name} />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="space-y-4 mt-6 text-[#5C5B5B]">
              <h2>Name : {name}</h2>
              <p>Supplier : {supplier}</p>
              <p>Price : {price}</p>
            </div>
            <div className="card-actions flex flex-col md:flex-row justify-end join join-vertical">
              <button className="btn bg-[#D2B48C]">
                <FaEye className="text-white" />
              </button>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn bg-[#3C393B]">
                  <FaPen className="text-white" />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-[#EA4744]"
              >
                <FaTrash className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
