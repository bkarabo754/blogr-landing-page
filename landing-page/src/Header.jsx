import { useState, useEffect } from "react";
import Logo from "./assets/images/logo.svg";
import { footer } from "./data/footer";
import Buttons from "./Buttons";
import Menu from "./Menu";
import ArrowDown from "./assets/images/icon-arrow-light.svg";
import ArrowUp from "./assets/images/icon-arrow-up.svg";

const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768);

  useEffect(() => {
    if (window.innerWidth > width) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <header className="absolute p-5 flex items-center justify-between w-full">
        <div className="md:mr-5">
          <img src={Logo} alt="Blogr logo Icon" />
        </div>
        {isOpen && (
          <nav className="navbar md:flex md:justify-between font-bold bg-white shadow-xl">
            <ul>
              {navLinks.map(({ id, title, links }) => (
                <li className="hover:underline cursor-pointer" key={id}>
                  {title}{" "}
                  <img
                    src={ArrowDown}
                    alt="Icon Arrow Down"
                    className="inline-block ml-1"
                  />
                </li>
              ))}
            </ul>
            <Buttons />
          </nav>
        )}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
