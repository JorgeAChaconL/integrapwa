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
              text="Tintas marca Epson."
              text2="Distintos modelos"
              label="Consumibles"
            />
            <CardItem
              src={images["canonInk.jpg"]}
              text="Tintas marca Canon."
              label="Consumibles"
            />
            <CardItem
              src={images["hpHeads.jpg"]}
              text="Cartuchos, Tinta y cabezales marca HP"
              label="Consumibles"
            />
            <CardItem
              src={images["canonHeads.jpeg"]}
              text="Cartuchos y Cabezales Distintos modelos Marca Canon"
              label="Consumibles"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images["aireComprimido.jpg"]}
              text="Aire Comprimido Para Equipo de Computo"
              label="Consumibles"
            />
            <CardItem
              src={images["tonerCompatible.jpg"]}
              text="Toner Compatible para Distintos Equipos"
              label="Consumibles"
            />
            <CardItem
              src={images["tonerOriginal.jpg"]}
              text="Toner Original para Distintos Equipos"
              label="Consumibles"
            />
            <CardItem
              src={images["papel.jpg"]}
              text="Papel para impresora, Plotter u Otros Equipos"
              label="Consumibles"
            />
          </ul>
        </div>
        <Button class="btn" disabled>
          {" "}
          Proximamente Tienda Online
        </Button>
      </div>
    </div>
  );
}

export default Consumibles;
