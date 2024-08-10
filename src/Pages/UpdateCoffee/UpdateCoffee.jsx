import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  //   console.log(coffee);

  const { _id, name, supplier, taste, category, details, photoURL, price } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const updatedCoffee = {
      name,
      price,
      supplier,
      test,
      category,
      details,
      photoURL,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <>
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Update Coffee</h2>
          <p className="text-center mb-8 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <form onSubmit={handleUpdateCoffee}>
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
                <label className="block text-sm font-medium mb-1">
                  Supplier
                </label>
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
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Details
                </label>
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
              <input
                type="submit"
                value="Update Coffee"
                className="btn btn-primary w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCoffee;
