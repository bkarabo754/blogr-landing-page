import React from "react";

const Buttons = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <button className="hover:bg-gray-400 font-bold py-5 px-8 rounded-full cursor-pointer">
              Login
            </button>
          </li>
          <li>
            <button className="text-cta-light-red-text hover:bg-gray-400 hover:text-white font-bold bg-white py-3 px-8 rounded-full cursor-pointer">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Buttons;
