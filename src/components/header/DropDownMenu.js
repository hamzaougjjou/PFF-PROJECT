
import { useState } from "react";
import img1 from "./../../assets/img/img-home-1.jpg";
function DropdownMenu() {
  const [showDropdown, setShowDropdown] = useState(true);
  const [loggedIn, setLoggedIn] = useState(!false);

  const [user, setUser] = useState({
    name: "John Doe",
    avatar: img1,
    profileLink: "/profile",
  });

  function handleDropdownClick() {
    setShowDropdown(!showDropdown);
  }

  function handleLogout() {
    setLoggedIn(false);
    setUser(null);
  }

  return (
    <div className="DropdownMenu">
      <button className="DropdownMenu-toggle" onClick={handleDropdownClick}>
        {loggedIn ? (
          <img
            className="DropdownMenu-avatar"
            src={user.avatar}
            alt={user.name}
          />
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </button>
      {showDropdown && (
        <ul className="DropdownMenu-list">
          {loggedIn ? (
            <li>
              <a href={user.profileLink}>
                <img
                  className="DropdownMenu-avatar"
                  src={user.avatar}
                  alt={user.name}
                />
                {user.name}
              </a>
            </li>
          ) : (
            <>
              <li>
                <a href="/login">Log In</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </>
          )}
          {loggedIn && (
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
