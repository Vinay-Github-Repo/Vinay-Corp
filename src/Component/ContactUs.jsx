import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const ContactUs = () => {
  const containerStyle = {
    padding: '2rem 1rem',
    backgroundColor: '#f9f9f9'
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333'
  };

  const cardTextStyle = {
    fontSize: '1.1rem',
    color: '#555'
  };

  const cardStyle = {
    marginBottom: '1.5rem',
    border: '0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const cardBodyStyle = {
    padding: '2rem'
  };

  const listGroupItemStyle = {
    backgroundColor: 'transparent',
    border: '0',
    paddingLeft: '0'
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <Col sm="12" lg="12" xl="12">
          <Card style={cardStyle}>
            <CardBody style={cardBodyStyle}>
              <CardTitle style={cardTitleStyle}>Contact Us</CardTitle>
              <CardText style={cardTextStyle}>
                If you have any questions, feel free to reach out to us through the following channels:
              </CardText>
              <ListGroup>
                <ListGroupItem style={listGroupItemStyle}>
                  <a href="mailto:vinayvastrakar13@gmail.com">vinayvastrakar13@gmail.com</a>
                </ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>
                  <a href="https://www.linkedin.com/in/vinay-vastrakar/">LinkedIn</a>
                </ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>
                  <a href="https://twitter.com/">Twitter</a>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
          <Card style={cardStyle}>
            <CardBody style={cardBodyStyle}>
              <CardTitle style={cardTitleStyle}>Our Office</CardTitle>
              <CardText style={cardTextStyle}>
                Vinay Corporation<br/>
                H10/32 Khamtrai Raipur<br/>
                Raipur, Chhattisgarh<br/>
                Phone: (+91)7974678511
              </CardText>
            </CardBody>
          </Card>
          <Card style={cardStyle}>
            <CardBody style={cardBodyStyle}>
              <CardTitle style={cardTitleStyle}>Working Hours</CardTitle>
              <CardText style={cardTextStyle}>
                Monday - Friday: 9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 4:00 PM<br/>
                Sunday: Closed
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
