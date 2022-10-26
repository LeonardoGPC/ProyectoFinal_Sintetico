import React from 'react';
import teams from "./data"
import Card from "./Card/Card.jsx"

export default function Landing (){

    return (
        <Card teams={teams}/>
    )
}