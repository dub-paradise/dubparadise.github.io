import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <section className="sobre">
      <h1>Sobre</h1>
      <motion.div
        transition={{ delay: 0.2, duration: 0.7 }}
        variants={{
          show: { opacity: 1, y1: "0" },
          hidden: { opacity: 0, y1: "70%" },
        }}
        initial="hidden"
        animate="show"
      >
        <p>
          A banda Dub Paradise teve início em 2018 e foi fundada por amigos de infância! Com o objetivo de levar uma mensagem positiva, a banda tem influências de várias banda de surf music, reggae e rock!<br/>

          Dub Paradise é<br/>

          Léo Aquino voz e violão <br/>
          Marcelo Montana no Cajón <br/>
          Paulo Brasil nas percussão <br/>
          Bruno Eduardo na bateria <br/>
          Diego Rodrigues na Guitarra <br/>
      </p>
      </motion.div>
    </section>
  );
};

export default Sobre;