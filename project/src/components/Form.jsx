import { useState, useEffect } from "react";

const INITIAL_STATE = {
  title: "",
  description: "",
  address: "",
  image: "",
};

export const Form = ({ onAddNewMeetup }) => {
  const [newMeetup, setNewMeetup] = useState(INITIAL_STATE);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const hasEmptyValue = Object.values(newMeetup).some((item) => item === "");
    hasEmptyValue ? setIsButtonEnabled(false) : setIsButtonEnabled(true);
  }, [newMeetup]);

  const handleInputChange = (e) => {
    const { value, id } = e.target;
    setNewMeetup((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // reset form
    onAddNewMeetup(newMeetup);
    setNewMeetup(INITIAL_STATE);
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={newMeetup.title}
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={newMeetup.description}
        rows="5"
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        value={newMeetup.address}
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="image">Image url</label>
      <input
        type="text"
        name="image"
        id="image"
        value={newMeetup.image}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className={isButtonEnabled ? "button cta" : "button disabled"}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
