import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { setGarage, fetchGarageStatus } from "./services/service";
import { useEffect, useState } from "react";
function App() {
  const [garageStatus, setGarageStatus] = useState("closed");

  const garage = async () => {
    let status = await fetchGarageStatus();

    setGarageStatus(status.data);
  };

  useEffect(() => {
    garage();
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="row ">
          <h3> Garage is currently {garageStatus}</h3>
          <Button onClick={setGarage} as="a" variant="primary" className="m-1">
            {garageStatus === "closed" ? "Open garage" : "Close garage"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
