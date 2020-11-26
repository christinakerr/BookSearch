import React from "react";
import Jumbotron from "./Jumbotron";
import Header from "./Header";
import Book from "./Book"

function Search() {
    return(<main class="container">
        <Jumbotron>
            <Header />
        </Jumbotron>
        <Jumbotron>
            <form class="form-inline row">
                <input class="form-control col-11" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-primary" type="submit">Search</button>
            </form>
        </Jumbotron>
        <Jumbotron>
            <Book />
        </Jumbotron>
    </main>
    )
}

export default Search;