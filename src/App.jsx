import { useState } from "react";
import axios from "axios";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyBjvRbisLc3Vh85QkkehF3D4ufLw9v7St4"
  );

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(book);
  }

  return (
    <div className="container">
      <h1>Book Finder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control mt-10"
            placeholder="search for books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger mt-3">
          search
        </button>
      </form>
    </div>
  );
}

export default App;
