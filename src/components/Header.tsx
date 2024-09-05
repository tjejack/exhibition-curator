import { useState } from "react";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [isShowNav, setShowNav] = useState<boolean>(false);
  const handleNavToggle = () => {
    setShowNav((prev: boolean) => !prev);
  };
  return (
    <div id="header-bar">
      <h1>SMART Gallery</h1>
      <button id="nav-bar-toggle" onClick={handleNavToggle}>
        <img
          id="nav-bar-toggle-img"
          src="https://e7.pngegg.com/pngimages/419/59/png-clipart-hamburger-button-computer-icons-marmon-keystone-canada-menu-red-sea-thumbnail.png"
        />
      </button>
      {isShowNav ? <NavBar /> : null}
    </div>
  );
};
