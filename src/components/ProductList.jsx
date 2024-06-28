import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.products.value);
  const location = useLocation();

  let basePath = "";
  let titlePath = ""
  if(location.pathname.includes("delete")) {
    basePath = "/delete-product";
    titlePath = "Choose a product to delete"
  } else if (location.pathname.includes("update")) {
    basePath = "/update-product";
    titlePath = "Choose a product to update"
  } else {
    basePath = "/product";
    titlePath = "Product List - Home"
  }
  // switch (true) {
  //   case location.pathname.includes("delete"):
  //     basePath = "/delete-product";
  //     break;
  //   case location.pathname.includes("update"):
  //     basePath = "/update-product";
  //     break;
  //   default:
  //     basePath = "/product";
  //     break;
  // }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{titlePath}</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 bg-white rounded shadow">
            <Link
              to={`${basePath}/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
