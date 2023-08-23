import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

import { Layout } from "../components/Layout";
import { Title } from "../components/Title";
import { Form } from "../components/Form";

export const NewMeetup = () => {
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleAddNewMeetUp = async (newMeetup) => {
    setStatus("Saving data");
    const response = await api.post("/meetups.json", newMeetup, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      navigate("/");
    } else {
      setStatus("Something went wrong while saving the data");
    }
  };

  return (
    <Layout>
      <Title title="New Meetup" />
      <Form onAddNewMeetup={handleAddNewMeetUp} />
      {status !== "" && <p>{status}</p>}
    </Layout>
  );
};
