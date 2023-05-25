import * as React from "react";
import { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Filters: React.FC<{}> = () => {
    const params = new URLSearchParams(window.location.pathname);

    const [category, setCategory] = useState(params.get("category") || "");

    return (
        <Form className="bg-light rounded-5 px-md-5 p-3 d-flex gap-3">
            <Form.Group className="mb-3" controlId="form_category" >
                <Form.Label>Kategoria</Form.Label>
                <Form.Select name="category" onChange={select => setCategory(select.currentTarget.value)}>
                    <option value="moto">Motoryzacja</option>
                    <option value="elektronika">Elektronika</option>
                    <option value="hobby">Hobby</option>
                    <option value="kolarstwo">Kolarstwo</option>
                    <option value="bizuteria">Biżuteria</option>
                    <option value="narzedzia">Narzędzia</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form_category" >
                <Form.Label>Cena</Form.Label>
                <InputGroup>
                    <Form.Control name="min_price" type="number" htmlSize={4} placeholder="Od" />
                    <Form.Control name="max_price" type="number" htmlSize={4} placeholder="Do" />
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form_category" >
                <Form.Label>Stan</Form.Label>
                <Form.Select name="condition">
                    <option value="all">Wszystkie</option>
                    <option value="new">Nowe</option>
                    <option value="used">Używane</option>
                    <option value="broken">Uszkodone</option>
                </Form.Select>
            </Form.Group>
        </Form>
    );
}
