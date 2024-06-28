import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function AddProduct() {
  const [ isAuthenticated ] = useAuth();

  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const [newField, setNewField] = useState({
    id: "",
    name: "",
    description: "",
  });

  const handleAddBook = (e) => {
    e.preventDefault();
    const generateId = products.length + 1;
    const newProd = {
      id: generateId,
      name: newField.name,
      description: newField.description
    }
    dispatch(addProduct(newProd));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewField({
      ...newField,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Product Name</label>
        <input
          name="name"
          value={newField.name}
          placeholder="Product Name"
          type="text"
          onChange={handleInputChange}
        ></input>
        <label htmlFor="description">Product Description</label>
        <input
          name="description"
          value={newField.description}
          placeholder="Product Description"
          type="text"
          onChange={handleInputChange}
        ></input>
        <button onClick={handleAddBook}>Add Product</button>
      </form>
    </div>
  );
}
