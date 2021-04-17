import "./style.css";
import Lottie from "react-lottie";
import animationData from "../../assets/animation.json";
import { motion } from "framer-motion";
const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <h1 className="title">Habilidades</h1>
      <section className="skills">
        <div>
          
        </div>
      </section>
    </>
  );
};

export default Skills;