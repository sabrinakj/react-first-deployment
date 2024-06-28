import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const products = useSelector((state) => state.products.value);
  console.log("products: ", products);
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <h2 className="text-red-500">Product not found</h2>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded shadow">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Product List
        </Link>
      </div>
    </div>
  );
}
