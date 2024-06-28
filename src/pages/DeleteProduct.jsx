import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/productSlice";
import { Link, useParams } from "react-router-dom";

export default function DeleteProduct() {
  const dispatch = useDispatch();
  const { idParams } = useParams();

 console.log("id", idParams);
  dispatch(deleteProduct(idParams));

  return (
    <div>
      <p>Product deleted successfully</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Product List
      </Link>
    </div>
  );
}
