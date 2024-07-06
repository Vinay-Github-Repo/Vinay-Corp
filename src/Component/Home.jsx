import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Learn Code with Vinay";
  }, []);

  const navigate = useNavigate();
  
  const handleUpdateCourse = () => {
    navigate("/view-cources");
  };

  return (
    <div>
      <Container className="text-center">
        <Row>
          <Col>
            <div className="p-5 bg-light rounded-3">
              <h1>Vinay Corporation</h1>
              <p>
                This is developed by Vinay and I am a professional backend
                developer in Java Spring Boot
              </p>
              <div>
                <Button
                  color="primary"
                  outline
                  onClick={() => handleUpdateCourse()}
                >
                  Start Using my Application
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Container></Container>
      </Container>
    </div>
  );
};

export default Home;
