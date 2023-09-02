import React from "react";
import { getFeaturedEvents } from "../data";
import EventList from "../components/events/EventList";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList events={featuredEvents} />
    </>
  );
}
