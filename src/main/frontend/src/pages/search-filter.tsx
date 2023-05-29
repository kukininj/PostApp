import { FilteredFindRequest, FilteredFindRequestFromJSON } from "PostAppAPI";
import * as React from "react";
import { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Filters: React.FC<{
    results: number,
    setFilters: (filters: FilteredFindRequest) => void
}> = ({ results = 0, setFilters }) => {
    const [params, setParams] = useState(new URLSearchParams(window.location.search));

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        console.log(Object.fromEntries(formData));
        setFilters(
            FilteredFindRequestFromJSON(Object.fromEntries(formData))
        );
    }

    return (
        <Form onSubmit={onSubmit} className="bg-light rounded-5 px-md-5 p-3 d-flex gap-3">
            <Form.Group className="mb-3" controlId="form_category" >
                <Form.Label>Kategoria</Form.Label>
                <Form.Select name="category" defaultValue={params.get("category") || ""}>
                    <option value="">Wybierz</option>
                    <option value="Motoryzacja">Motoryzacja</option>
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
                    <Form.Control name="minPrice" type="number" htmlSize={4} placeholder="Od" defaultValue={params.get("minPrice") || ""}/>
                    <Form.Control name="maxPrice" type="number" htmlSize={4} placeholder="Do" defaultValue={params.get("maxPrice") || ""}/>
                </InputGroup>
            </Form.Group>
            <div className="flex-grow-1">
                <p className="text-end">Wyniki: {results}</p>
                <button
                    type="submit"
                    className="col-sm-auto btn btn-info d-inline float-end" >
                    Zapisz
                </button>
            </div>
        </Form>
    );
}
