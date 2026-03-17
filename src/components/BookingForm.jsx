import { useState } from 'react';

function BookingForm({ event, onConfirm }) {
  // Initialize booking controls with first available options.
  const [date, setDate] = useState(event.dateOptions[0]);
  const [time, setTime] = useState(event.timeOptions[0]);
  const [seatType, setSeatType] = useState(event.seatTypes[0].label);
  const [seatCount, setSeatCount] = useState(1);

  const selectedSeat = event.seatTypes.find((seat) => seat.label === seatType);
  const totalAmount = selectedSeat.price * Number(seatCount);

  const handleSubmit = (formEvent) => {
    formEvent.preventDefault();

    // Send selected booking values to parent page for summary rendering.
    onConfirm({
      eventId: event.id,
      eventTitle: event.title,
      venue: event.venue,
      date,
      time,
      seatType,
      seatCount: Number(seatCount),
      amount: totalAmount
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Tickets</h2>

      <label>
        Select Date
        <select value={date} onChange={(e) => setDate(e.target.value)}>
          {event.dateOptions.map((dateOption) => (
            <option key={dateOption} value={dateOption}>
              {dateOption}
            </option>
          ))}
        </select>
      </label>

      <label>
        Select Time
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {event.timeOptions.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </label>

      <label>
        Seat Category
        <select value={seatType} onChange={(e) => setSeatType(e.target.value)}>
          {event.seatTypes.map((seat) => (
            <option key={seat.label} value={seat.label}>
              {seat.label} (₹{seat.price})
            </option>
          ))}
        </select>
      </label>

      <label>
        Number of Seats
        <input
          type="number"
          min="1"
          max="10"
          value={seatCount}
          onChange={(e) => setSeatCount(e.target.value)}
        />
      </label>

      <div className="booking-total">
        <span>Total Amount</span>
        <strong>₹{totalAmount}</strong>
      </div>

      <button type="submit" className="primary-btn full-width">
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;