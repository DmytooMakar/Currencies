import React from "react";
import { Form } from "react-bootstrap"

export default function RenderByDate({setDate}) {

    function getDate(value) {
        setDate(value)
    }
    return (<>
       <Form.Group className="w-25">
            <Form.Control size="sm" type="date" onChange={e => getDate(e.currentTarget.value.replaceAll('-', ''))}/>
        </Form.Group> 
    </>)
}