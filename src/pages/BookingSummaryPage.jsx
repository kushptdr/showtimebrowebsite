import { Link, useLocation } from 'react-router-dom';

function BookingSummaryPage() {
  const location = useLocation();
  const bookingDetails = location.state?.bookingDetails;

  if (!bookingDetails) {
    return (
      <section className="container section-gap">
        <h2>No booking data found</h2>
        <p>Please complete a booking to view confirmation details.</p>
        <Link className="primary-btn" to="/events">
          Go to Events
        </Link>
      </section>
    );
  }

  return (
    <section className="container section-gap">
      <article className="summary-card">
        <h1>Booking Confirmed</h1>
        <p className="summary-subtext">This is a static confirmation summary for your selected event.</p>

        <div className="summary-grid">
          <p>
            <strong>Event:</strong> {bookingDetails.eventTitle}
          </p>
          <p>
            <strong>Venue:</strong> {bookingDetails.venue}
          </p>
          <p>
            <strong>Date:</strong> {bookingDetails.date}
          </p>
          <p>
            <strong>Time:</strong> {bookingDetails.time}
          </p>
          <p>
            <strong>Seat Type:</strong> {bookingDetails.seatType}
          </p>
          <p>
            <strong>Seats:</strong> {bookingDetails.seatCount}
          </p>
          <p>
            <strong>Total Paid:</strong> ₹{bookingDetails.amount}
          </p>
        </div>

        <Link className="primary-btn" to="/events">
          Book Another Event
        </Link>
      </article>
    </section>
  );
}

export default BookingSummaryPage;