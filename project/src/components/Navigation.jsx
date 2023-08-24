import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../store/context";

const links = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/meetups", label: "Meetups" },
  { id: 3, url: "/new-meetup", label: "New Meetup" },
];

export const Navigation = () => {
  const context = useContext(FavouritesContext);
  const hasFavourites = context.favourites.length !== 0;
  const countClass = [
    "navigation--list-link",
    hasFavourites ? "count" : "",
  ].join(" ");

  return (
    <nav className="navigation">
      <ul className="navigation--list">
        {links.map(({ id, url, label }) => (
          <li className="navigation--list-link" key={id}>
            <Link to={url}>{label}</Link>
          </li>
        ))}
        <li className={countClass} data-count={context.totalFavourites}>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};
