import React, { Component } from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Uncontrolled from "../Carousel";
import "../Carousel.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <Cards />
        <div id="services" class="text-center">
          <div class="container">
            <div class="section-title">
              <h2>Certificaciones Y Licencias</h2>
              <p>
                Conoce todas las licencias y certificaciones que nos respaldan
                para ofrecerte el mejor servicio.
              </p>
            </div>
            <div class="row">
              <div class="col-md-4">
                <img class="sys" alt="" />
                <div class="service-desc">
                  <h3>SYSCOM</h3>
                  <p>
                    SYSCOM es el distribuidor global líder más importante en
                    telecomunicaciones y seguridad
  
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                {" "}
                <img class="xer" alt="" />
                <div class="service-desc">
                  <h3>XEROX</h3>
                  <p>
                    Xerox Corporation es el proveedor más grande del mundo de
                    fotocopiadoras de tóner y sus accesorios.
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <img class="dell" alt="" />

                <div class="service-desc">
                  <h3>DELL Partner</h3>
                  <p>
                    Los partners de Dell Technologies son expertos en tecnología
                    que ayudan a entender y solucionar los problemas de
                    negocios.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                {" "}
                <img class="asp" alt="" />
                <div class="service-desc">
                  <h3>ASPEL</h3>
                  <p>
                    Aspel es una compañía 100% mexicana con 39 años de
                    experiencia, líder en el mercado de Software administrativo,
                    brindando servicio a más de 1 millón de empresas en México y
                    Latinoamérica.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                {" "}
                <img class="cont" alt="" />
                <div class="service-desc">
                  <h3>CONTPAQ I</h3>
                  <p>
                    CONTPAQ i® es el único fabricante de software que además es
                    Proveedor Autorizado de Certificación (PAC) por parte del
                    Servicio de Administración Tributaria (SAT).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards__container">
          <h1> Contamos Con Las Mejores Marcas</h1>
          <Uncontrolled />
        </div>
      </>
    );
  }
}
