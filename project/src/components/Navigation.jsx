import { Link } from "react-router-dom";

const links = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/meetups", label: "Meetups" },
  { id: 3, url: "/favourites", label: "Favourites" },
  { id: 4, url: "/new-meetup", label: "New Meetup" },
];

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation--list">
        {links.map(({ id, url, label }) => (
          <li className="navigation--list-link" key={id}>
            <Link to={url}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
