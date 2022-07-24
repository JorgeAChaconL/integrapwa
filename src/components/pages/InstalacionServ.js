import React from "react";
import CardItem from "../CardItem";
import "../Cards.css";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/instalaciones", false, /\.(png|jpe?g|svg)$/)
);

function InstalacionServ() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={images["cctvInstall.jpg"]}
              text="Instalación de sistemas de circuito cerrado-CCTV"
              label="Instalacion"
            />
            <CardItem
              src={images["structuredCable.jpg"]}
              text="Instalación de Cable Estructurado "
              label="Instalacion"
            />
            <CardItem
              src={images["firetrace.jpg"]}
              text="Sistemas contra incendios FIRETRACE"
              label="Instalacion"
            />
            <CardItem
              src={images["controlAcceso.jpg"]}
              text="Controles de Acceso, Puertas magneticas, Torniquetes."
              label="Instalacion"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images["software.jpg"]}
              text="Instalacion de Programas"
              label="Instalacion"
            />
            <CardItem
              src={images["antivirus.jpg"]}
              text="Antivirus de Diversas Marcas"
              label="Instalacion"
            />
            <CardItem
              src={images["Office.jpg"]}
              text="Instalación de Sistema Office." 
              label="Instalacion"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstalacionServ;
