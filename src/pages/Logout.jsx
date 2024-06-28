import { useAuth } from "../hooks/useAuth";

function Logout() {
  const [user, isAuthenticated, login, logout] = useAuth();

  function changePathname(newPathname) {
    if (window.location.pathname !== newPathname) {
      window.location.pathname = newPathname;
    }
  }

  const handleLogout = () => {
    logout();
    changePathname("/");
  };

  return (
    <div>
      {isAuthenticated && (
        <p>Hi {user.username}, are you sure you want to logout?!</p>
      )}
      <button
        onClick={handleLogout}
        className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="submit"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
