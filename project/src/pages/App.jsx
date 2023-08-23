import { useState, useEffect } from "react";
import { api } from "../services/api";

import { Layout } from "../components/Layout";
import { Title } from "../components/Title";
import { Meetup } from "../components/Meetup";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const renderMeetups = async () => {
      const response = await api.get("/meetups.json");

      if (response.statusText === "OK") {
        const data = response.data;
        // data from Firebase does not come as a list
        // we must to format this data to make readable through map
        const meetupsList = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupsList.push(meetup);
        }
        setMeetups(meetupsList);
        setIsLoading(false);
      }
    };
    renderMeetups();
  }, []);

  return (
    <Layout>
      <Title title="Latest events" />
      {isLoading ? (
        <p>Loading meetups</p>
      ) : (
        <>
          {meetups.length === 0 ? (
            <p>No meetups registered</p>
          ) : (
            <ul>
              {meetups.map(({ id, title, image, description }) => (
                <li key={id}>
                  <Meetup
                    variant="preview"
                    title={title}
                    image={image}
                    description={description}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </Layout>
  );
};
