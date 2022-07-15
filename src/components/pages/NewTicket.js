import React, { Component } from "react";
import { Form, Row, Col, Stack, Button } from "react-bootstrap";
import isologo from "../../assets/isologoazul.png";
import "./newTicket.css";
import axios from "axios";
import {Link} from 'react-router-dom'



export default class NewTicket extends Component {
  constructor(props) {
    super(props);

    this.onChangeTicketId = this.onChangeTicketId.bind(this);
    this.onChangeTicketName = this.onChangeTicketName.bind(this);
    this.onChangeTicketPhone = this.onChangeTicketPhone.bind(this);
    this.onChangeTicketDevice = this.onChangeTicketDevice.bind(this);
    this.onChangeTicketCharger = this.onChangeTicketCharger.bind(this);
    this.onChangeTicketAccesories = this.onChangeTicketAccesories.bind(this);
    this.onChangeTicketBattery = this.onChangeTicketBattery.bind(this);
    this.onChangeTicketCables = this.onChangeTicketCables.bind(this);
    this.onChangeTicketReport = this.onChangeTicketReport.bind(this);
    this.onChangeTicketObservation = this.onChangeTicketObservation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      _id: "",
      ticket_clientName: "",
      ticket_phoneNumber: "",
      ticket_device: "",
      ticket_charger: false,
      ticket_accesories: false,
      ticket_battery: false,
      ticket_cables: false,
      ticket_report: "",
      ticket_observation: "",
      ticket_status: 1,
    };

    
  }

  onChangeTicketId(e) {
    this.setState({
      _id: e.target.value,
    });
  }
  onChangeTicketName(e) {
    this.setState({
      ticket_clientName: e.target.value,
    });
  }
  onChangeTicketPhone(e) {
    this.setState({
      ticket_phoneNumber: e.target.value,
    });
  }
  onChangeTicketDevice(e) {
    this.setState({
      ticket_device: e.target.value,
    });
  }
  onChangeTicketCharger(e) {
    this.setState({
      ticket_charger: !this.state.ticket_charger,
    });
  }
  onChangeTicketAccesories(e) {
    this.setState({
      ticket_accesories: !this.state.ticket_accesories,
    });
  }
  onChangeTicketBattery(e) {
    this.setState({
      ticket_battery: !this.state.ticket_battery,
    });
  }
  onChangeTicketCables(e) {
    this.setState({
      ticket_cables: !this.state.ticket_cables,
    });
  }
  onChangeTicketReport(e) {
    this.setState({
      ticket_report: e.target.value,
    });
  }
  onChangeTicketObservation(e) {
    this.setState({
      ticket_observation: e.target.value,
    });
  }

  
  onSubmit(e) {
    e.preventDefault();

    
         var dateId = new Date().toLocaleString("es-MX", {
          month: "2-digit",
          year: "numeric",
          weekday: "narrow",
          day: "2-digit",
          hour: "numeric"
        });
        const idUp = this.state.ticket_clientName.toLocaleUpperCase();

     
        const idFill = idUp.replace(/\s+/g, "");
        const val0 = idFill.charAt(0);
        const val1 = idFill.charAt(4);
        const val2 = idFill.charAt(7);
        const idConq = val0 + val1 + `-` + dateId + `-` + val2;
        const idRep = idConq.replace(",", "");
        const finalId = idRep.replace(/[\s , /]/g, "");

    console.log(`Form Submitted:`);
    console.log(`_id: ${finalId}`);
    console.log(`Ticket_clientName: ${this.state.ticket_clientName}`);
    console.log(`Ticket_phone: ${this.state.ticket_phoneNumber}`);
    console.log(`Ticket_device: ${this.state.ticket_device}`);
    console.log(`Ticket_charger: ${this.state.ticket_charger}`);
    console.log(`Ticket_accesories: ${this.state.ticket_accesories}`);
    console.log(`Ticket_battery: ${this.state.ticket_battery}`);
    console.log(`Ticket_cables: ${this.state.ticket_cables}`);
    console.log(`Ticket_report: ${this.state.ticket_report}`);
    console.log(`Ticket_observation: ${this.state.ticket_observation}`);
    console.log(`Ticket_status: ${this.state.ticket_status}`);


    const newTicket = {
      _id: finalId,
      ticket_clientName: this.state.ticket_clientName,
      ticket_phoneNumber: this.state.ticket_phoneNumber,
      ticket_device: this.state.ticket_device,
      ticket_charger: this.state.ticket_charger,
      ticket_accesories: this.state.ticket_accesories,
      ticket_battery: this.state.ticket_battery,
      ticket_cables: this.state.ticket_cables,
      ticket_report: this.state.ticket_report,
      ticket_observation: this.state.ticket_observation,
      ticket_status: this.state.ticket_status,
    };

    axios
      .post("http://localhost:8080/tickets/add", newTicket)
      .then((res) => console.log(res.data));

    this.setState({
      _id: "",
      ticket_clientName: "",
      ticket_phoneNumber: "",
      ticket_device: "",
      ticket_charger: false,
      ticket_accesories: false,
      ticket_battery: false,
      ticket_cables: false,
      ticket_report: "",
      ticket_observation: "",
      ticket_status: 1,
    });
  }

  render() {
      
    var date = new Date().toLocaleString("es-MX", {
      month: "short",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    var dateId = new Date().toLocaleString("es-MX", {
        month: "2-digit",
        year: "numeric",
        weekday: "narrow",
        day: "2-digit",
        hour: "numeric",
        minute:"numeric"
    });

    const idUp = this.state.ticket_clientName.toLocaleUpperCase();
    const idFill = idUp.replace(/\s+/g, "");
    const val0 = idFill.charAt(0);
    const val1 = idFill.charAt(4);
    const val2 = idFill.charAt(7);
    const idConq = val0 + val1 + `-` + dateId + `-` + val2;
    const idRep = idConq.replace(",", "");
    const finalId = idRep.replace(/[\s , / :]/g, "");

    return (
      <Form className="m-3" onSubmit={this.onSubmit}>
        <Row className="m-4" lg="4" md="3">
          <img alt="" src={isologo} width="250" height="auto" />
          <Form.Group class="left">
            <p class="date">Fecha: {date}</p>

            <p>
               ID: {finalId} 
            </p>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlid="formGridName" lg="8">
            <Form.Label>Nombre Cliente</Form.Label>
            <Form.Control
              controlid="none"
              type="text"
              placeholder="Ingresar Nombre cliente"
              minLength={10}
              required
              value={this.state.ticket_clientName}
              onChange={this.onChangeTicketName}
            />
          </Form.Group>

          <Form.Group as={Col} controlid="formGridPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              required
              maxLength={15}
              placeholder="xxx-xxx-xxxx"
              value={this.state.ticket_phoneNumber}
              onChange={this.onChangeTicketPhone}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlid="formGridDevice">
          <Form.Label>Equipo</Form.Label>
          <Form.Control
            placeholder="Marca/Equipo"
            value={this.state.ticket_device}
            required
            onChange={this.onChangeTicketDevice}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlid="formGridAdap">
            <Form.Check
              type="checkbox"
              label="Adapatador de corriente"
              name="extras"
              id="Adap"
              //revisar, no cambia
              onChange={this.onChangeTicketCharger}
              checked={this.state.ticket_charger}
              value={this.state.ticket_charger}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlid="formGridAccs"
            style={{ paddingLeft: 50 }}
          >
            <Form.Check
              type="checkbox"
              label="Accesorios"
              id="Accs"
              onChange={this.onChangeTicketAccesories}
              checked={this.state.ticket_accesories}
              value={this.state.ticket_accesories}
            />
          </Form.Group>

          <Form.Group as={Col} controlid="formGridBat">
            <Form.Check
              type="checkbox"
              label="Bateria"
              id="Bat"
              onChange={this.onChangeTicketBattery}
              checked={this.state.ticket_battery}
              value={this.state.ticket_battery}
            />
          </Form.Group>

          <Form.Group as={Col} controlid="formGridUSB">
            <Form.Check
              type="checkbox"
              label="Cables USB"
              id="USB"
              onChange={this.onChangeTicketCables}
              checked={this.state.ticket_cables}
              value={this.state.ticket_cables}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlid="formGridRepor">
          <Form.Label>Reporte</Form.Label>
          <Form.Control
            placeholder="Reporte del cliente"
            required
            value={this.state.ticket_report}
            onChange={this.onChangeTicketReport}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlid="formGridObserv">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control
            placeholder="Contraseña - Daños- Descripcion Accesorios"
            value={this.state.ticket_observation}
            onChange={this.onChangeTicketObservation}
          />
        </Form.Group>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary" type="submit" value="newTicket">
            Save changes
          </Button>
          <Link to={'/Tickets'}>
          <Button variant="outline-secondary" className="col-12" >
            Cancel
          </Button>
          </Link>
        </Stack>
      </Form>
    );
  }
}
