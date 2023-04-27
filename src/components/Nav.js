import { Link, Outlet } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
        <Link to="/">
        <div>Dashboard</div>
      </Link>

      <Link to="/about">
        <div>About</div>
      </Link>

      <main>
         <Outlet />
      </main>
    </div>
  );
}