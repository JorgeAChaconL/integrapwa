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
              alt="Cargadores-Adaptadores Corriente"
              text="Adaptadores de Corriente de Distintas Marcas"
              label="Reparacion"
            />
            <CardItem
              src={images["pcBuild.jpg"]}
              alt="PCBuild-Armado PC-Computadoras-Chihuahua-CUU-Tecnologia"
              text="Armado De Computadoras A Tu Medida"
              label="Armado"
            />
            <CardItem
              src={images["pantallaRota.jpg"]}
              text="Reparacion Pantallas Rotas, Manchas o con Lineas"
              label="Refacciones"
            />
            <CardItem
              src={images["teclados.jpg"]}
              text="Teclados para diversos modelos de Laptop"
              label="Refacciones"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images["printerRepair.jpg"]}
              text="Diversos tipos de impresora: Laser, Tinta, Multifuncional"
              label="Reparacion"
            />
            <CardItem
              src={images["mac.jpg"]}
              text="Distintos Dispositivos de Marca Apple"
              label="Reparacion"
            />
            <CardItem
              src={images["pcRepair.jpg"]}
              text="Reparacion y actualizacion de equipos de computo"
              label="Reparacion"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReparacionService;
