import { validUrl } from "../services/validUrl";

export const Meetup = ({ title, description, address, image, variant }) => {
  // variant: "preview" || "detailed"

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
        <button>Add to favourites</button>
      </div>
    </div>
  );
};
