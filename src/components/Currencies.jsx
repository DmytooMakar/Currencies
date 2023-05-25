import React, { useEffect } from "react";
import Table from "react-bootstrap/Table"
import Currency from "./Currency";

export default function Currencies({currencies, setCurrencies, value, filteredCurrencies, date}) {
    const currentDate = new Date;
    const today = currentDate.toJSON().split('T')[0].replaceAll('-', '');

    useEffect(() => {
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${ date ? date : today }&json`)
        .then(res => res.json())
        .then(data => setCurrencies(data.map(currency => ({
            cc: currency.cc,
            txt: currency.txt,
            rate: currency.rate
        }))))
    }, [date])

    return (<div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Title</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {(value.length ? filteredCurrencies : currencies).map(currency => 
                <Currency key={currency.cc} currency={currency}/>)}
            </tbody>
        </Table>
    </div>)
}