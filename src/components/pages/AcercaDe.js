import React, { Component } from "react";
import "./AcercaDe.css";
import about from "../../assets/workshop.jpg";

export default class AcercaDe extends Component {
  render() {
    return (
      <>
        <div id="about">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <img src={about} class="img-responsive" alt="" />
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <h2>¿Quienes Somos?</h2>
                  <p>
                    Integrasys Computación es una compañía alojada en Chihuahua,
                    Chihuahua, México. Formada por profesionales con más de
                    veinte años de experiencia en el desarrollo, ingeniería de
                    servicios e integración de soluciones en el ámbito de las
                    tecnologías de la información.
                    <br /> A través de nuestros productos y servicios
                    especializados, nos hemos puesto como objetivo lograr la
                    satisfacción y rentabilidad de nuestros clientes, por medio
                    de la implementación de soluciones hechas a la medida de su
                    empresa o negocio.
                  </p>
                  <h3>Why Choose Us?</h3>
                  <div class="list-style">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>Lorem ipsum dolor</li>
                        <li>Tempor incididunt</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Incididunt ut labore</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact">
          <div class="container">
            <div class="col-md-12">
              <div class="row">
                <div class="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" novalidate="">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          id="name"
                          class="form-control"
                          placeholder="Name"
                          required=""
                        />
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                          placeholder="Email"
                          required=""
                        />
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="4"
                      placeholder="Message"
                      required=""
                    ></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" class="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div class="contact-info">
              <div class="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i class="fa fa-map-marker"></i> Direccion
                  </span>
                  Av.Mirador 301 Esquina con Privada de Juarez. Col. Mirador
                </p>
              </div>
              <div class="contact-item">
                <p>
                  <span>
                    <i class="fa fa-phone"></i> Phone
                  </span>{" "}
                  614 415 49 03 <span></span> 614 410 26 04
                </p>
              </div>
              <div class="contact-item">
                <p>
                  <span>
                    <i class="fas fa-envelope"></i>  Email
                  </span>{" "}
                  Ventas@IntegrasysComputacion.com.mx <span></span>
                  Soporte@IntegrasysComputacion.com.mx
                </p>
              </div>
              <div class="contact-item">
                <p>
                  <span>
                    <i class="fab fa-whatsapp"></i>  Whatsapp
                  </span>{" "}
                  614 273 6006
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
