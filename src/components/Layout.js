
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1>Shopping Website</h1>

      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/women">Women</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

export default Layout;
