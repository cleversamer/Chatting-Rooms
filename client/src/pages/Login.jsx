import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/user";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import auth from "api/auth";
import toast from "services/toast";
import cookie from "../services/cookie";
import config from "config.json";

const routes = config.routes.client;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { email, password } = values;
      const { data } = await auth.login(email, password);
      cookie.set(data.token);
      dispatch(login(data.user));
      navigate(routes.chat);
    } catch (err) {
      toast.showError(err?.response?.data?.message || err.message);
    }
  };

  const handleChange = (key) => (e) =>
    setValues({ ...values, [key]: e.currentTarget.value });

  return (
    <Container>
      <Row>
        <Col md={5} className="login__bg"></Col>

        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form className="login-form" onSubmit={handleSubmit}>
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
              Login
            </Button>

            <div className="py-4">
              <p className="t3e">
                Don't have an account?{" "}
                <Link to={routes.register}>Register</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
