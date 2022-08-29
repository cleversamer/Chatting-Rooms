import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import config from "config.json";

const routes = config.routes.client;

const Home = () => {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Share the world with your friends</h1>
          <p>Chatting Rooms allows you to connect with the world!</p>

          <LinkContainer to={routes.chat}>
            <Button variant="success">
              Get Started <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>

      <Col md={6} className="home__bg"></Col>
    </Row>
  );
};

export default Home;
