import React from "react";
import ListingCard from "./ListingCard";



function ListingsContainer( {searchedListings, deleteListing} ) {

  return (
    <main>
      <ul className="cards">
        {searchedListings.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} deleteListing={deleteListing}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
