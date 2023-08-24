import { useContext } from "react";
import { FavouritesContext } from "../store/context";

import { Layout } from "../components/Layout";
import { Title } from "../components/Title";
import { Meetup } from "../components/Meetup";

export const Favorites = () => {
  const context = useContext(FavouritesContext);

  return (
    <Layout>
      <Title title="Favourites" />
      {context.favourites.length === 0 ? (
        <p>No favourites meetups added yet</p>
      ) : (
        <ul>
          {context.favourites.map(({ id, title, description, image }) => (
            <li>
              <Meetup
                variant="preview"
                id={id}
                title={title}
                description={description}
                image={image}
              />
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};
