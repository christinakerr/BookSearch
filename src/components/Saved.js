import React from "react";
import Jumbotron from "./Jumbotron"
import Header from "./Header";
import Book from "./Book";

function Saved(){
    return(<main class="container">
        <Jumbotron>
            <Header />
        </Jumbotron>
        <Jumbotron>
            <h4>Saved Books</h4>
            <Book />
            <Book />
        </Jumbotron>
    </main>
    )
}

export default Saved;