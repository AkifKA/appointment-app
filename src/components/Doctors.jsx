import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import AddModal from "./AddModal";

const Doctors = ({ doctors }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 text-primary">Our Doctors</h3>
      <Row className="justify-content-center">
        {doctors.map((dr) => (
          <Col
            className="border border-primary m-1 p-2"
            key={dr.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
          >
            <img
              src={dr.img}
              alt="dr.name"
              className="img-thumbnail doctor-img"
              onClick={handleClick}
            />
            <h5>{dr.name}</h5>
            <h6>{dr.dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal show={show} handleClose={() => setShow(false)} />
    </Container>
  );
};

export default Doctors;
