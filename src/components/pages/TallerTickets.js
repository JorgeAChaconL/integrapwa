import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./TallerTickets.css";

let estado 
const Ticket = (props) => (

      <tr>
          <td>{props.ticket._id}</td>
    <td>{props.ticket.ticket_clientName}</td>
    <td>{props.ticket.ticket_phoneNumber}</td>
    <td>{props.ticket.ticket_device}</td>
    <td>{String(props.ticket.ticket_charger)}</td>
    <td>{String(props.ticket.ticket_accesories)}</td>
    <td>{String(props.ticket.ticket_battery)}</td>
    <td>{String(props.ticket.ticket_cables)}</td>
    <td>{props.ticket.ticket_report}</td>
    <td>{ estado = props.ticket.ticket_observation}</td>
    <td
      
      
      style={props.ticket.ticket_status === 1 ? { background: "red" } : {background:'blue'}}
    ></td>
    <td>
      <Link to={"/EditTicket/" + props.ticket._id} >Edit</Link>
    </td>
  </tr>
);

export default class TallerTitckets extends Component {
  constructor(props) {
    super(props);
    this.state = { tickets: [] };
    
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/tickets/")
      .then((response) => {
        this.setState({ tickets: response.data });
      })
      .catch(function (error) {
        console.error(error);
        
      });
  }

  ticketList() {
    return this.state.tickets.map(function (currentTicket, i) {
      return <Ticket ticket={currentTicket} key={i} estado={currentTicket.ticket_status}/>;
    });
    
   
  }

  render() {
    return (
      <div>
        <NavLink to="NewTicket">Nuevo</NavLink>
        <h3>Tickets de Servicio</h3>
        <Table responsive="sm" className="m-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Equipo</th>
              <th>AC</th>
              <th>Accesorios</th>
              <th>Bateria</th>
              <th>Cables</th>
              <th>Reporte</th>
              <th>Observaciones</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{this.ticketList()}</tbody>
        </Table>
      </div>
    );
  }
}
