import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iPhone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";

function LandingPageComponent() {
  return (
    <div className="landing-wrapper">
      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="para"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/Dashboard">
            <Button text="Dashboard"
              onClick={() => {
                console.log("btn-clicked!!!");
              }} />
          </Link>
          <RWebShare
            data={{
              text: "CryptoTracker, made using React JS.",
              url: "https://crypto-tracker-app-react.vercel.app/",
              title: "CryptoTracker.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share" outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="landing-right">
        <img src={gradient} className="gradient" />
        <motion.img
          src={iPhone}
          className="iphone"
          initial={{ y: -20 }}
          animate={{ y: 30 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPageComponent;