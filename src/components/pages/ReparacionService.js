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
  require.context("../../assets/refacciones", false, /\.(png|jpe?g|svg)$/)
);



function ReparacionService() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={images["cargadores.jpg"]}
              text="Armado De Computadoras A Tu Medida"
              label="REPARACION"
            />
            <CardItem
              src={images["pcBuild.jpg"]}
              text="Instalación de sistemas de circuito cerrado"
              label="REPARACION"
            />
            <CardItem
              src={images["pantallaRota.jpg"]}
              text="Equipo de computo como Laptops, Tablets, PCs y Más"
              label="REPARACION"
            />
            <CardItem
              src={images["teclados.jpg"]}
              text="Instalación de sistemas de circuito cerrado"
              label="REPARACION"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images["printerRepair.jpg"]}
              text="Diversos tipos de impresa: Laser, Tinta, Multifuncional"
              label="REPARACION"
            />
            <CardItem
              src={images["mac.jpg"]}
              text="Instalación de Cable Estructurado "
              label="REPARACION"
            />
            <CardItem
              src={images["pcRepair.jpg"]}
              text="Distintos Dispositivos de Marca Apple"
              label="REPARACION"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReparacionService;
