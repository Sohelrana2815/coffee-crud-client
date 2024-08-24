import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  const { name, price, supplier, photoURL, _id, taste, category, details } =
    coffees;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const updatedCoffee = {
      name,
      price,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    console.log(updatedCoffee);

    axios
      .put(`http://localhost:5000/coffees/${_id}`, updatedCoffee)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          alert("Coffee Updated Successfully!!!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="w-full max-w-lg p-6  bg-base-300  shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Update Coffee</h2>

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
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
                defaultValue={photoURL}
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

export default UpdateCoffee;
