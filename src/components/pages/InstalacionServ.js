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
              text="Equipo de computo como Laptops, Tablets, PCs y Más"
              label="REPARACION"
            />
            <CardItem
              src={images["structuredCable.jpg"]}
              text="Instalación de sistemas de circuito cerrado"
              label="REPARACION"
            />
            <CardItem
              src={images["firetrace.jpg"]}
              text="Distintos Dispositivos de Marca Apple"
              label="REPARACION"
            />
            <CardItem
              src={images["controlAcceso.jpg"]}
              text="Diversos tipos de impresa: Laser, Tinta, Multifuncional"
              label="REPARACION"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images["software.jpg"]}
              text="Instalación de Cable Estructurado "
              label="REPARACION"
            />
            <CardItem
              src={images["antivirus.jpg"]}
              text="Armado De Computadoras A Tu Medida"
              label="REPARACION"
            />
            <CardItem
              src={images["Office.jpg"]}
              text="Instalación de sistemas de circuito cerrado"
              label="REPARACION"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstalacionServ;
