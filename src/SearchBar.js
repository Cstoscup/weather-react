import React from "react";
import "./searchbar.css";

export default function SearchBar() {
  return (
    <form className="SearchBar">
      <input
        type="search"
        className="search-bar"
        placeholder="Enter a location"
      />
      <input
        type="submit"
        className="btn btn-secondary shadow-sm search-button"
        value="Search"
      />
      <button className="btn btn-outline-secondary shadow-sm location-button">
        <i class="fa-solid fa-location-dot"></i>
      </button>
    </form>
  );
}
