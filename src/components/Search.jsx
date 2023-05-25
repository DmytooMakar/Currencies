import React from "react";
import { Form } from "react-bootstrap"

export default function Search({currencies, setFilteredCurrencies, setValue}) {

    function filterCurrencies(value) {
        setValue(value)
        const result = currencies.filter(currency => currency.txt.toLowerCase().includes(value))
        setFilteredCurrencies(result);
    }

    return (<>
        <Form.Group className="w-25">
            <Form.Control size="sm" type="text" placeholder="search here" onKeyUp={e => filterCurrencies(e.currentTarget.value.trim().toLowerCase())}/>
        </Form.Group>
    </>)
}