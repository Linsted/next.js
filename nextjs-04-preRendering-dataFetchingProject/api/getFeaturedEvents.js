import axios from "axios";
import getEvents from "./getEvents";

export default async function getFeaturedEvents() {
  const events = await getEvents();

  return events.filter((event) => event.isFeatured);
}
