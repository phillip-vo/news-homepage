import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { data } from "../../data/newData";
import New from "../New/New";
import "./Hero.scss";

const Hero = () => {
  return (
    <main className="app__hero">
      <div className="app__flex app__hero-main">
        <motion.img src={images.imageWeb3Desktop} alt="hero image" />
        <div className="app__hero-main-items">
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            The Bright Future of Web 3.0?
          </motion.h1>
          <div>
            <p className="p-text">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <motion.button
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              Read More
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div
        className="app__hero-side"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="app__hero-side-items">
          <h2>New</h2>
          <div>
            {data.map((item) => (
              <New item={item} />
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
