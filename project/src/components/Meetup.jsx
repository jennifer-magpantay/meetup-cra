import { useContext } from "react";
import { FavouritesContext } from "../store/context";

import { validUrl } from "../services/validUrl";

export const Meetup = ({ id, title, description, address, image, variant }) => {
  const context = useContext(FavouritesContext);
  const isFavourite = context.isFavourite(id);
  // variant: "preview" || "detailed"

  const handleFavouriteToggle = (id) => {
    isFavourite
      ? context.removeFavourite(id)
      : context.addFavourite({ id, title, description, address, image });
  };

  const renderImage = (image) => {
    const isValid = validUrl(image);
    if (isValid) {
      return image;
    } else {
      return "https://placehold.co/600x400";
    }
  };

  return (
    <div className="meetup">
      <div className="meetup--header">
        <h3 className="meetup--header-title">{title}</h3>
      </div>
      <div className="meetup--body">
        <img src={renderImage(image)} alt="" />
        <p className="meetup--body-description">{description}</p>
        {variant === "detailed" && <address>{address}</address>}
      </div>
      <div className="meetup--footer">
        <button onClick={() => handleFavouriteToggle(id)}>
          {isFavourite ? "Remove from favourites" : "Add to favourites"}
        </button>
      </div>
    </div>
  );
};
