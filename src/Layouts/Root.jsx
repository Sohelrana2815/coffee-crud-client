import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navabr/Navbar";

const Root = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-10">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
