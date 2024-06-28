import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

import { Provider } from "react-redux";
import store from "./store/store.jsx";
import NavBar from "./components/NavBar.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import UpdateProduct from "./pages/UpdateProduct.jsx";
import DeleteProduct from "./pages/DeleteProduct.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";

import { useAuth } from "./hooks/useAuth.jsx";

export default function App() {
  const [isAuthenticated] = useAuth();
  console.log("isAuthenticated", isAuthenticated);

  return (
    <Provider store={store}>
      <Router>
        <NavBar></NavBar>
        <div className=" bg-gray-100">
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/add-product" element={<AddProduct />} />

                <Route path="/update-product" element={<ProductList />} />
                <Route path="/update-product/:idParams" element={<UpdateProduct />}/>
                <Route path="/delete-product" element={<ProductList />} />
                <Route path="/delete-product/:idParams" element={<DeleteProduct />}/>
                <Route path="/logout" element={<Logout />} />
              </>
            ) : (
              <>
                <Route path="/" element={<ProductList />} />
                <Route path="/login" element={<Login />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
