import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";

const API = ("http://localhost:6001/listings")

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(data => setListings(data))
  }, [])
  
  function searchForListings(e) {
    setSearch(e.target.value)
  }
  function deleteListing(id) {
    const oneLessListing = listings.filter((listing) => listing.id !== id)
    setListings(oneLessListing)
  }
  const searchedListings = listings.filter((l) => l.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <Search searchForListings={searchForListings} />
      <ListingsContainer listings={listings} searchedListings={searchedListings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
