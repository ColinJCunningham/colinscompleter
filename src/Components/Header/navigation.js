import React from "react";

import { Row, Container, Nav} from "react-bootstrap/";

function Navigation() {
  return (
  
    <Container>
      <Row style={{color: "whitesmoke",padding: "2%"}}>
        <h1> CFC </h1>
        <h5>Colin's File Completer</h5>
      </Row>
      <Row>
        {/* <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Lincoln Director</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Lincoln Alliance</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav> */}
      </Row>
    </Container>
 
  );
}

export default Navigation;
