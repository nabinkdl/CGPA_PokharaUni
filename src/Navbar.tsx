import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  text-slate-800 text-xl py-4 px-10  w-full flex justify-end gap-4">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
