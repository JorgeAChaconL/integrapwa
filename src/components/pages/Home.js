import React, { Component } from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
export default class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <Cards />
      </>
    );
  }
}
