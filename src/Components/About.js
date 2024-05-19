import React from "react";
import img from "../assets/img-6.jpg";

const About = () => {
  return (
    <section id="about" className=" w-screen min-h-screen">
      <div className=" max-container flex justify-center items-center gap-24 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col">
        <div className=" flex-1 w-full">
          <div className=" bg-[orangered] flex justify-end pt-10 pl-10 max-sm:pt-5 max-sm:pl-5">
            <img
              src={img}
              alt="aboutImg"
              className=" object-cover object-center max-lg:w-full"
            />
          </div>
        </div>

        <div className=" flex-1">
          <p className=" text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]">
            ACERCA DE NUESTRO GIMNASIO
          </p>

          <div className=" my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl">
            <h1>
              FITNESS Y BIENESTAR CON UN ENFOQUE PROFESIONAL Y PERSONALIZADO.
            </h1>
          </div>

          <p className="font text-lg text-slate-800">
            Bienvenidos a Ares Gym, donde la pasión por el fitness y el
            bienestar se encuentran con un enfoque profesional y personalizado.
            Nos dedicamos a proporcionar un ambiente inspirador y de apoyo, con
            instalaciones de vanguardia, entrenadores expertos y una comunidad
            vibrante. Contamos con equipos de última generación, áreas
            especializadas y clases grupales dinámicas.
          </p>

          <p className=" font text-lg text-slate-800 mt-5 mb-5  max-xl:mb-8">
            Nuestra misión es empoderarte para alcanzar tu mejor versión.
            Nuestros entrenadores certificados te guiarán con programas
            personalizados y atención individualizada. Además, hemos
            implementado rigurosas medidas de limpieza y protocolos de
            seguridad.
          </p>
          <p className=" font text-2xl text-slate-500 mb-10  max-xl:mb-8">
            Únete a nosotros y descubre cómo transformar tu energía en fuerza y
            tus compromisos en resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
