import axios from "axios";
import { useEffect, useState } from "react";
import CoffeeCard from "../CoffeCard/CoffeeCard";

const Home = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/coffees")
      .then((res) => {
        setCoffees(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/coffees/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          alert("Coffee Deleted Successfully!");
          const remaining = coffees.filter((coffee) => coffee._id !== id);
          setCoffees(remaining);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl">
        Coffee Available : {coffees.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            handleDelete={handleDelete}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
