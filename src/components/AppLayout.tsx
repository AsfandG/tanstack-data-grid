import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <header className="border-b border-neutral-500 p-4">
        <div className="container">
          <ul className="flex items-center gap-10 font-medium text-sm">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/shipments"}>Shipments</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="py-6">
        <Outlet />
      </div>
      <footer className="p-4">
        <div className="container">
          <p className="text-center text-sm font-medium">
            All Rights Reserved &copy;
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
