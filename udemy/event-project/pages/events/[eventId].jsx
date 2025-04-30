import EventContent from "@/components/event-datail/event-content";
import EventLogistics from "@/components/event-datail/event-logistics";
import EventSummary from "@/components/event-datail/event-summary";
import EventItem from "@/components/events/EventItem";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No evnet found!</p>
        </ErrorAlert>
      </>
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
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
