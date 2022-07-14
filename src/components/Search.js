import React from "react";

function Search( { search, searchForListings}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => searchForListings(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
