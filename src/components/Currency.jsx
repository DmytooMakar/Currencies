import React from "react";

export default function Currency({currency}) {
    return (<>
        <tr>
            <td>{currency.cc}</td>
            <td>{currency.txt}</td>
            <td>{currency.rate}</td>
        </tr>
    </>)
}