import * as React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login: React.FC<{}> = () => {
    return (
        <main className="container-lg">
            <Row className="gap-3 justify-content-center p-3">
                <Form className="col-md-auto bg-light rounded-5 p-5" action="/login" method="POST">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Adres e-mail</Form.Label>
                        <Form.Control name="e-mail" type="email" placeholder="test@example.com" />
                        <Form.Text className="text-muted">
                            Nigdy nikomu nie przekażemy Twojego adresu e-mail. Obiecujemy ( ͡° ͜ʖ ͡°)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control name="password" type="password" placeholder="*******" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Zaloguj się
                    </Button>
                    <br />
                    <Form.Text>
                        Nie posiadasz konta? <Link to="/register">Zarejestruj się</Link>.
                    </Form.Text>
                </Form>
                <Col>
                    <Image className="w-100 d-block" style={{ maxHeight: "500px" }} src="/images/PostApp.svg" />
                </Col>
            </Row>
        </main>
    );
}

export default Login;
