import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/resultsTitle/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert/ErrorAlert";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filteredRoute = router.query.slug;

  if (!filteredRoute) {
    return <p className="center">Loading... </p>;
  }

  const year = Number(filteredRoute[0]);
  const month = Number(filteredRoute[1]);

  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 2021 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <ErrorAlert>
        <p className="center">Invalid data. Please check your values</p>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No events found. Try another date.</p>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}
