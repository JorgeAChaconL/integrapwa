import React from "react";
import { Button } from "react-bootstrap";
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
  require.context("../../assets/consumibles", false, /\.(png|jpe?g|svg)$/)
);

function Consumibles() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={images["epsonInk.jpg"]}
              text="Armado De Computadoras A Tu Medida"
              label="REPARACION"
            />
            <CardItem
              src={images["canonInk.jpg"]}
              text="Instalación de sistemas de circuito cerrado"
              label="REPARACION"
            />
            <CardItem
              src={images["hpHeads.jpg"]}
              text="Equipo de computo como Laptops, Tablets, PCs y Más"
              label="REPARACION"
            />
            <CardItem
              src={images["canonHeads.jpeg"]}
              text="Instalación de sistemas de circuito cerrado"
              label="REPARACION"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images["aireComprimido.jpg"]}
              text="Diversos tipos de impresa: Laser, Tinta, Multifuncional"
              label="REPARACION"
            />
            <CardItem
              src={images["tonerCompatible.jpg"]}
              text="Instalación de Cable Estructurado "
              label="REPARACION"
            />
            <CardItem
              src={images["tonerOriginal.jpg"]}
              text="Distintos Dispositivos de Marca Apple"
              label="REPARACION"
            />
            <CardItem
              src={images["papel.jpg"]}
              text="Distintos Dispositivos de Marca Apple"
              label="REPARACION"
            />
          </ul>
        
        </div>
        <Button class='btn' disabled> Proximamente Tienda Online</Button>
        
      </div>
      
    </div>
  );
}

export default Consumibles;
