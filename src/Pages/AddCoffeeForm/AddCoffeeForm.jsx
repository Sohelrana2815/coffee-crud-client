import React from "react";
import Swal from "sweetalert2";
const AddCoffeeForm = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const newCoffee = {
      name,
      price,
      supplier,
      test,
      category,
      details,
      photoURL,
    };
    console.log(newCoffee);

    // send data to the server

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New coffee added",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Add New Coffee</h2>
        <p className="text-center mb-8 text-gray-600">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Taste</label>
              <input
                type="text"
                name="test"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Details</label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffeeForm;
