import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./Cards.css";
import Uncontrolled from "./Carousel";
import "./Carousel.css";

function Cards() {
  return (
    <div className="cards">
      <div>
        <h1>Algunos de nuetros servicios</h1>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="services/pcBuild.jpg"
              text="Armado De Computadoras A Tu Medida"
              label="CREAR"
              path="/services"
            />
            <CardItem
              src="services/cctvInstall.jpg"
              text="Instalación de sistemas de circuito cerrado"
              label="ASEGURAR"
              path="/services"
            />
            <CardItem
              src="services/repairLap.jpg"
              text="Equipo de computo como Laptops, Tablets, PCs y Más"
              label="REPARAR"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="services/printerRepair.jpg"
              text="Diversos tipos de impresa: Laser, Tinta, Multifuncional"
              label="Reparar"
              path="Servicios"
            />
            <CardItem
              src="services/structuredCable.jpg"
              text="Instalación de Cable Estructurado "
              label="COMUNICAR"
              path="/services"
            />
            <CardItem
              src="services/mac.jpg"
              text="Distintos Dispositivos de Marca Apple"
              label="REPARAR"
              path="/sign-up"
            />
          </ul>
          <div>
            <h2>Conocelos todos lo que podemos ofrecerte</h2>
            <Link to='/Servicios' class='lnk'><Button class='btn' to='/servicios'>AQUI</Button></Link>
          </div>
        </div>
        <h1> Contamos Con Las Mejores Marcas</h1>
        <Uncontrolled />
      </div>
    </div>
  );
}

export default Cards;
