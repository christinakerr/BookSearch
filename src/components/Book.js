import React from "react";

function Book() {
    return (
        <div className="card bg-secondary">
            <div className="card-header">
                <h5>Book Title</h5>
                <h6>Author(s)</h6>
                
            </div>
            <div className="card-body">
                <img className="bookImg"alt="placeholder" src="https://via.placeholder.com/150" />
                <p className="card-text">Summary</p>
                <div className="save-btn"><button className="btn btn-primary save-btn">Save</button>
                <button className="btn btn-primary save-btn">Delete</button></div>
                
            </div>
        </div>
    )
}

export default Book;