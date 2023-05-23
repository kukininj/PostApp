import * as React from "react";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { Users } from "../Api";
import { RegisterForm } from "PostAppAPI";

export const Register: React.FC<{}> = () => {

    const handlePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files[0].name);
        }
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let credentials: RegisterForm = {
            email: formData.get("email")?.toString() || "",
            password: formData.get("password")?.toString() || "",
            firstname: formData.get("firstname")?.toString() || "",
            surname: formData.get("surname")?.toString() || ""
        }

        Users.register({registerForm: credentials})
            .then(({user, error}) => {
                let pic = user?.picture?.filePath;
                
            })
    }
    return (
        <main className="container-lg">
            <Row className="gap-3 justify-content-center p-3">
                <Form action="#" method="POST" onSubmit={onSubmit}
                    encType="multipart/form-data"
                    className="col-md-auto bg-light rounded-5 p-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Adres e-mail</Form.Label>
                        <Form.Control name="email" type="email" placeholder="test@example.com" />
                        <Form.Text className="text-muted">
                            Nigdy nikomu nie przekażemy Twojego adresu e-mail. Obiecujemy ( ͡° ͜ʖ ͡°)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control name="password" type="password" placeholder="*******" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Informacje osobowe</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control name="surname" type="text" placeholder="Imie" />
                            <Form.Control name="firstname" type="text" placeholder="Nazwisko" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Zdjęcie profilowe</Form.Label>
                        <Form.Control name="picture" type="file" onChange={handlePictureChange} />
                    </Form.Group>

                    <Button variant="info" type="submit" >
                        Załóż konto
                    </Button>
                </Form>
                <Col>
                    <Row className="align-items-center h-100">
                        <Image className="w-100 d-block" style={{ maxHeight: "500px" }} src="/images/PostApp.svg" />
                    </Row>
                </Col>
            </Row>
        </main>
    );
}

