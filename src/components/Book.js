import React from "react";

function Book(props) {
    return (
        <div className="card bg-secondary">
            <div className="card-header">
                <h5>Book Title</h5>
                <h6>Author(s)</h6>
                
            </div>
            <div className="card-body">
                <img className="bookImg"alt="placeholder" src="https://via.placeholder.com/150" />
                <p className="card-text">Summary</p>
                {props.children}
            </div>
        </div>
    )
}

export default Book;