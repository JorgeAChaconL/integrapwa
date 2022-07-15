import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Consumibles from './pages/Consumibles';
import InstalacionServ from './pages/InstalacionServ';
import ReparacionService from './pages/ReparacionService';



function Tabsjustify() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 mt-3"
      style={{backgroundColor:'#fff'}}
      justify
    >
      <Tab eventKey="home" title=" Refacciones y Servicios">
        <ReparacionService />
      </Tab>
      <Tab eventKey="profile" title="Instalaciones">
        <InstalacionServ />
      </Tab>
      <Tab eventKey="longer-tab" title="Consumibles">
        <Consumibles />
      </Tab>
      
    </Tabs>
  );
}

export default Tabsjustify;