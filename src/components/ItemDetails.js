
import { useParams } from "react-router-dom";

function ItemDetails() {
  const { id } = useParams();

  const items = {
    1: {
      name: "Dress",
      description: "Beautiful women's dress"
    },
    2: {
      name: "Shoes",
      description: "Comfortable women's shoes"
    },
    3: {
      name: "Handbag",
      description: "Stylish women's handbag"
    }
  };

  const item = items[id];

  if (!item) {
    return <h2>Item Not Found</h2>;
  }

  return (
    <>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </>
  );
}

export default ItemDetails;
