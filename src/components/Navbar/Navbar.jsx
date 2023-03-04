import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <motion.div
        className="app__navbar-logo"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img src={images.logo} alt="logo" />
      </motion.div>
      <ul className="app__navbar-links">
        {["Home", "New", "Popular", "Trending", "Categories"].map((item) => (
          <motion.li
            className="app__flex p-text"
            key={`link-${item}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
