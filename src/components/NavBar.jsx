import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function NavBar() {
  let basePath = "";
  let titlePath = "";
  const [user, isAuthenticated] = useAuth();

  if (!isAuthenticated) {
    basePath = "/login";
    titlePath = "Login";
  } else {
    basePath = "/logout";
    titlePath = "Logout";
  }
  console.log(basePath);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-500 p-4 shadow-md">
        <ul className="flex flex-row gap-10 mb-10 justify-around cursor-pointer">
          <li>
            <Link to={`/`} className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/add-product`} className="text-white">
              Add Product
            </Link>
          </li>
          <li>
            <Link to={`/update-product`} className="text-white">
              Update Product
            </Link>
          </li>
          <li>
            <Link to={`/delete-product`} className="text-white">
              Delete Product
            </Link>
          </li>
          <li>
            <button className="bg-slate-400">
              <Link to={`${basePath}`} className="text-black">
                {titlePath}
              </Link>
            </button>
          </li>
          {isAuthenticated && <li>Welcome {user.username}</li>}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
