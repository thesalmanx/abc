import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "../src/data"

export default function App(){
    const places = Data.map(item => {
        return (
            <Card
                key={item.id}
                item = {item}
            />
        )
    })

    return (
        <div className="App">
            <Header />
            {places}
        </div>
    )
}