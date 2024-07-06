import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const AboutUs = () => {
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
              <CardTitle style={cardTitleStyle}>About Us</CardTitle>
              <CardText style={cardTextStyle}>
                Welcome to Vinay Corporation, your premier online learning platform for Udemy computer courses.
              </CardText>
              <CardText style={cardTextStyle}>
                Our mission is to make technology accessible to everyone.
              </CardText>
            </CardBody>
          </Card>
          <Card style={cardStyle}>
            <CardBody style={cardBodyStyle}>
              <CardTitle style={cardTitleStyle}>Our Team</CardTitle>
              <ListGroup>
                <ListGroupItem style={listGroupItemStyle}>Vinay Vastrakar - CEO</ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>Dakesh Sahu - Lead Instructor</ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>Deepesh Sahu - Developer</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
          <Card style={cardStyle}>
            <CardBody style={cardBodyStyle}>
              <CardTitle style={cardTitleStyle}>Our Courses</CardTitle>
              <ListGroup>
                <ListGroupItem style={listGroupItemStyle}>Programming languages (Python, Java, JavaScript, etc.)</ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>Web development (React, Angular, Vue, etc.)</ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>Data science and machine learning</ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>Cybersecurity and ethical hacking</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
          <Card style={cardStyle}>
            <CardBody style={cardBodyStyle}>
              <CardTitle style={cardTitleStyle}>Why Choose Us?</CardTitle>
              <ListGroup>
                <ListGroupItem style={listGroupItemStyle}>Convenience: Learn at your own pace, anytime, anywhere.</ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>Affordability: Affordable courses without compromising on quality.</ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>Expert instructors: Learn from experienced professionals in the industry.</ListGroupItem>
                <ListGroupItem style={listGroupItemStyle}>Interactive learning: Engaging content, quizzes, and projects to help you practice.</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
