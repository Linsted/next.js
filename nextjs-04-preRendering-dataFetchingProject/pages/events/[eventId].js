import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../data";
import EventSummary from "../../components/eventDetail/EventSummary";
import EventLogistics from "../../components/eventDetail/EventLogistics";
import EventContent from "../../components/eventDetail/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert/ErrorAlert";
import Button from "../../components/ui/Button";

export default function ConcreteEventPage() {
  const router = useRouter();

  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
}
