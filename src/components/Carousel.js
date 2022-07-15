import Carousel from "react-bootstrap/Carousel";
import acteck from "../assets/marcas/acteck.jpg";
import adata from "../assets/marcas/adata.png";
import amd from "../assets/marcas/amdRyzen.png";
import brother from "../assets/marcas/brother.png";
import canon from "../assets/marcas/canon.jpg";
import corsair from "../assets/marcas/corsair.png";
import hyperX from "../assets/marcas/hyperx.png";
import logitech from "../assets/marcas/logitech.png";
import epson from "../assets/marcas/epson.png";
import intel from "../assets/marcas/intel.png";
import nvidia from "../assets/marcas/nvidia.jpg";
import kingston from "../assets/marcas/Myproject.jpg";
import dell from "../assets/marcas/dell.jpg";
import "./Carousel.css";

function Uncontrolled() {
  return (
    
      <Carousel slide>
        <Carousel.Item>
          <img src={adata} alt="First slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={acteck} alt="Second slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={logitech} alt="Third slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={epson} alt="Third slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={kingston} alt="Forth slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={hyperX} alt="Forth slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={brother} alt="Forth slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={intel} alt="Forth slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={nvidia} alt="Forth slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={corsair} alt="Forth slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={canon} alt="Forth slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={amd} alt="Forth slide" class="small" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={dell} alt="Forth slide" class="small" />
        </Carousel.Item>
      </Carousel>
    
  );
}

export default Uncontrolled;
