
import { Link, Outlet } from "react-router-dom";

function Women() {
  const items = [
    { id: 1, name: "Dress" },
    { id: 2, name: "Shoes" },
    { id: 3, name: "Handbag" }
  ];

  return (
    <>
      <h2>Women Category</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/women/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <hr />

      <Outlet />
    </>
  );
}

export default Women;
