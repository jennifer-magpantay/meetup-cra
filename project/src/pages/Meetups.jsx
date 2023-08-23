import { Layout } from "../components/Layout";
import { Title } from "../components/Title";
import { Meetup } from "../components/Meetup";

export const Meetups = () => {
  return (
    <Layout>
      <Title title="Meetups" />
      <Meetup
        title="Something happening this sunday"
        description="lorem ipsum"
        address="Piazza Duomo"
      />
    </Layout>
  );
};
