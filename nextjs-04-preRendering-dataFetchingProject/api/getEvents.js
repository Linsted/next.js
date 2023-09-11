import axios from "axios";

const getEvents = async () => {
  const { data } = await axios.get(
    "https://nextcourse-83da0-default-rtdb.firebaseio.com/events.json"
  );

  const events = [];
  for (const key in data) {
    events.push(data[key]);
  }

  return events;
};

export default getEvents;
