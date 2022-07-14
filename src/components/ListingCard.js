import React, {useState} from "react";

function ListingCard( {listing, deleteListing, id} ) {
  const [isFavorite, setIsFavortite] = useState(false)

  function handleClick(event) {
    setIsFavortite(!isFavorite)
  }

  function handleDeleteClick() {
    console.log("delete")
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }) 
    deleteListing(id);    
  }

  
  return (
    <li className="card" >
      <div className="image" key={listing.id}>
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
