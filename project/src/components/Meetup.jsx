import { useContext } from "react";
import { FavouritesContext } from "../store/context";

import { validUrl } from "../services/validUrl";

import { Heart } from "@phosphor-icons/react";

export const Meetup = ({ id, title, description, address, image, variant }) => {
  const context = useContext(FavouritesContext);
  const isFavourite = context.isFavourite(id);
  // variant: "preview" || "detailed"
  const descriptionClass = [
    "meetup--body-description",
    variant === "preview" ? variant : "",
  ].join(" ");

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
        <img className="meetup--body-image" src={renderImage(image)} alt="" />
        <p className={descriptionClass}>{description}</p>
        {variant === "detailed" && <address>{address}</address>}
      </div>
      <div className="meetup--footer">
        <button
          className="meetup--footer-button"
          onClick={() => handleFavouriteToggle(id)}
        >
          {isFavourite ? (
            <>
              <span>Remove from favourites</span>
              <Heart
                size={20}
                color="#f85454"
                weight="fill"
                aria-hidden={true}
              />
            </>
          ) : (
            <>
              <span>Add to favourites</span>
              <Heart size={20} aria-hidden={true} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
