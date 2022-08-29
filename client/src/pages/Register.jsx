import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import config from "config.json";

const routes = config.routes.client;

const Register = () => {
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calling the server...
  };

  const handleChange = (key) => (e) =>
    setValues({ ...values, [key]: e.currentTarget.value });

  return (
    <Container>
      <Row>
        <Col md={5} className="register__bg"></Col>

        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={values.name}
                onChange={handleChange("name")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange("email")}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange("password")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>

            <div className="py-4">
              <p className="t3e">
                Already have an account? <Link to={routes.login}>Login</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
