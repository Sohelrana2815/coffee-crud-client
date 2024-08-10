import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

const AddedCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  console.log(coffees);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
};

export default AddedCoffee;
