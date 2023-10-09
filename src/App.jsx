import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            type="text"
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
