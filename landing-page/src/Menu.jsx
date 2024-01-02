import Open from "./assets/images/icon-hamburger.svg";
import Close from "./assets/images/icon-close.svg";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <img src={Close} alt="" /> : <img src={Open} alt="" />}
      </button>
    </>
  );
};

export default Menu;
