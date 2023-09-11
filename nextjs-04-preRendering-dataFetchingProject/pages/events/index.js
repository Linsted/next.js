import React from "react";
import { getAllEvents } from "../../data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { useRouter } from "next/router";

export default function EventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  const findEventsHandler = ({ selectedYear, selectedMonth }) => {
    const fullPath = `/events/${selectedYear}/${selectedMonth}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}
