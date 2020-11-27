import axios from "axios";

const API = {
    getBooks: function() {
        return axios.get("/api/books");
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    }
};

export default API;