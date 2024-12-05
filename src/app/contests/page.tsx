import React from "react";
import Header from '../../components/header'

export default function Contests() {
    return(
        <>
            <Header/>
            <h1>
                Contests
            </h1>
            <div className = "main">
                <h1 style = {{fontSize: "50px", margin: "35px"}}>Contests</h2>
                <center style = {{fontSize: "30px", margin: "35px"}}>Lorem ipsum dolor sit amet</center>
                <h2 style = {{fontSize: "50px", margin: "35px",border: "1px"}}>Upcoming Contests</h2>
                <h3 style = {{fontSize: "50px", margin: "35px",border: "1px"}}>contest</h3>
                <h2 style = {{fontSize: "50px", margin: "35px",border: "1px"}}>Past Contests</h2>
                <list><h2 style = {{fontSize: "50px", margin: "35px",border: "1px"}}>contest</h2></list>
            </div>
        </>
    );
}
