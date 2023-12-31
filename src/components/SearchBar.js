import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Search Here</label>
      <input
        className="input"
        type="text"
        onChange={handleChange}
        value={term}
      />
    </form>
  );
}

export default SearchBar;
