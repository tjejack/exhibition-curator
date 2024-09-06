import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isShowNav, setShowNav] = useState<boolean>(false);
  const location = useLocation();
  const handleNavToggle = () => {
    setShowNav((prev: boolean) => !prev);
  };
  useEffect(() => {
    setShowNav(false);
  }, [location]);
  return (
    <>
      <button id="nav-bar-toggle" onClick={handleNavToggle}>
        <img
          id="nav-bar-toggle-img"
          src="https://e7.pngegg.com/pngimages/419/59/png-clipart-hamburger-button-computer-icons-marmon-keystone-canada-menu-red-sea-thumbnail.png"
        />
      </button>
      {isShowNav ? (
        <div id="nav-bar">
          <Link to="/" className="nav-button" id="nav-to-home">
            Home
          </Link>
          <br />
          <Link to="/art" className="nav-button" id="nav-to-art-explore">
            Explore Art
          </Link>
          <br />
          <Link
            to="/exhibitions/temp"
            className="nav-button"
            id="nav-to-temp-exhibition"
          >
            My Exhibition
          </Link>
        </div>
      ) : null}
    </>
  );
};
