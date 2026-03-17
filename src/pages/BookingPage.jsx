import { Link, useNavigate, useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { getEventById } from '../data/events';

function BookingPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = getEventById(eventId);

  const handleBookingConfirm = (bookingDetails) => {
    navigate('/booking-summary', {
      state: { bookingDetails }
    });
  };

  if (!event) {
    return (
      <section className="container section-gap">
        <h2>Event not found</h2>
        <Link className="secondary-btn" to="/events">
          Back to Events
        </Link>
      </section>
    );
  }

  return (
    <section className="container section-gap booking-layout">
      <article className="booking-info-card">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <ul className="details-list">
          <li>
            <strong>Venue:</strong> {event.venue}
          </li>
          <li>
            <strong>Available Dates:</strong> {event.dateOptions.join(', ')}
          </li>
          <li>
            <strong>Available Times:</strong> {event.timeOptions.join(', ')}
          </li>
        </ul>
      </article>

      <BookingForm event={event} onConfirm={handleBookingConfirm} />
    </section>
  );
}

export default BookingPage;