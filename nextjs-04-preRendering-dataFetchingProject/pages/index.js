import React from "react";

import EventList from "../components/events/EventList";
import getEvents from "../api/getEvents";
import getFeaturedEvents from "../api/getFeaturedEvents";

export default function HomePage({ featuredEvents }) {
  getFeaturedEvents;

  return (
    <>
      <EventList events={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const featuredEvents = await getFeaturedEvents();
    return {
      props: {
        featuredEvents,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
