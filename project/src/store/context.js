import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (meetup) => {},
  removeFavourite: (meetupId) => {},
  isFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [favouritesMeetups, setFavouritesMeetups] = useState([]);

  const addToFavourites = (meetup) => {
    setFavouritesMeetups((prevState) => [...prevState, meetup]);
  };

  const removeFromFavourites = (meetupId) => {
    const updatedList = favouritesMeetups.filter(
      (meetup) => meetup.id !== meetupId
    );
    setFavouritesMeetups(updatedList);
  };

  const isFavouriteItem = (meetupId) => {
    return favouritesMeetups.some((item) => item.id === meetupId);
  };

  const context = {
    favourites: favouritesMeetups,
    totalFavourites: favouritesMeetups.length,
    addFavourite: addToFavourites,
    removeFavourite: removeFromFavourites,
    isFavourite: isFavouriteItem,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};
