import React from 'react';
import teams from "./data"
import Card from "./Card/Card.jsx"
import Header from "./Header/header";

export default function Landing() {
    return(
        <div>
            <Header/>
            <Card teams={teams}/>
        </div>
    )
}