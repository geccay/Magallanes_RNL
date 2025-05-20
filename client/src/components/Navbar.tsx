import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FormEvent, useState } from "react";
import ErrorHandler from "../handler/ErrorHandler";
import SpinnerSmall from "./SpinnerSmall";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [loadingLogout, setLoadingLogout] = useState(false);

  const menuItems = [
    {
      route: "/",
      title: "Genders",
    },
    {
      route: "/users",
      title: "Users",
    },
  ];

  const handleLogout = (e: FormEvent) => {
    e.preventDefault();

    setLoadingLogout(true);

    logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        ErrorHandler(error, null);
      })
      .finally(() => {
        setLoadingLogout(false);
      });
  };

  const handleUserFullName = () => {
    const user = localStorage.getItem("user");

    if (!user) return "";

    try {
      const parsedUser = JSON.parse(user);

      if (!parsedUser || !parsedUser.first_name || !parsedUser.last_name) {
        return "";
      }

      const firstName = parsedUser.first_name;
      const lastName = parsedUser.last_name;
      const middleInitial = parsedUser.middle_name?.[0];

      return middleInitial
        ? `${lastName}, ${firstName} ${middleInitial}.`
        : `${lastName}, ${firstName}`;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return "";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        RnL Demo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {menuItems.map((menuItem, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link" to={menuItem.route}>
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>

        <span className="navbar-text mr-3">{handleUserFullName()}</span>

        <button
          type="submit"
          className="btn btn-danger"
          onClick={handleLogout}
          disabled={loadingLogout}
        >
          {loadingLogout ? (
            <>
              <SpinnerSmall /> Logging Out...
            </>
          ) : (
            "Logout"
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
