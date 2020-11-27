import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import Header from "./Header";
import Book from "./Book"
import SaveBtn from "./SaveBtn"

function Search() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    function saveBook(book){
        console.log(book);
    }

    function handleSearchChange(event){
        const search = event.target.value;
        setSearchTerm(search)
    }

    function handleSearch(event){
        event.preventDefault();
        console.log(searchTerm)

    }


    return(<main class="container">
        <Jumbotron>
            <Header />
        </Jumbotron>
        <Jumbotron>
        <h4>Search Books</h4>
            <form class="form-inline row">
                <input class="form-control col-11" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange}/>
                <button class="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>
            </form>
        </Jumbotron>
        <Jumbotron>
        {books.length ? (
                books.map(book => {
                    return(<Book key={book._id} {...book}>
                        <SaveBtn onClick={() => saveBook(book._id)} />
                    </Book>)
                })) : (<h3>No results to display</h3>)}
        </Jumbotron>
    </main>
    )
}

export default Search;