import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <article className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-content">
        <div className="event-meta-row">
          <span className="event-badge">{event.category}</span>
          <span className="event-rating">{event.rating}</span>
        </div>
        <h3>{event.title}</h3>
        <p className="event-info">{event.venue}</p>
        <p className="event-info">
          {event.dateOptions[0]} • {event.timeOptions[0]}
        </p>
        <Link className="secondary-btn" to={`/events/${event.id}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}

export default EventCard;