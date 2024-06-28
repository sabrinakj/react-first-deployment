import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateProduct } from "../store/productSlice";
import { useState } from "react";

export default function UpdateProduct() {
  const dispatch = useDispatch();
  const { idParams } = useParams();

  const products = useSelector((state) => state.products.value);
  const prod = products.find((product) => product.id === parseInt(idParams));
  console.log("products: ", products);
  console.log("prod: ", prod);

  const [editField, setEditField] = useState(prod);

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const editProd = {
      id: idParams,
      description: editField.description,
    };
    dispatch(updateProduct(editProd));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditField({
      ...editField,
      [name]: value,
    });
  };

  return (
    <div>
      <label htmlFor="description">
        Product Description to update - {editField.name}
      </label>
      <input
        name="description"
        value={editField.description}
        placeholder="Product Description"
        type="text"
        onChange={handleInputChange}
      ></input>

      <button onClick={handleUpdateBook}>Edit Product</button>

      <Link to="/" className="text-blue-500 hover:underline">
        Back to Product List
      </Link>
    </div>
  );
}
