import { useState } from "react";
import { footer } from "./data/footer";
import Logo from "./assets/images/logo.svg";

import React from "react";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(footer);

  return (
    <>
      <footer className="footer text-center md:text-left px-5 rounded-tr-[7rem] bg-very-dark-black-blue-footer md:grid md:grid-cols-2 lg:py-10">
        <div>
          <img
            src={Logo}
            alt=""
            className="block mx-auto pt-10 md:mx-0 lg:ml-60"
          />
        </div>

        <div className="md:grid md:grid-cols-3 ">
          {footerLinks.map(({ id, title, links }) => (
            <ul key={id}>
              <h4 className="text-white-text mt-10 mb-5 text-lg">{title}</h4>
              {links.map((link) => (
                <li
                  className="text-grayish-blue-footer py-2 hover:underline cursor-pointer"
                  key={link}
                >
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
