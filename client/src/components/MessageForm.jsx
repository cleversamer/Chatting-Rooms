import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const MessageForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Calling the server...
  };

  return (
    <>
      <div className="messages-output"></div>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control type="text" placeholder="Send a message..." />
            </Form.Group>
          </Col>

          <Col md={1}>
            <Button className="btn-send-msg" variant="primary" type="submit">
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MessageForm;
