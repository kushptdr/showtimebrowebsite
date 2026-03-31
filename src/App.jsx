import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SearchJobsPage from './pages/SearchJobsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import BookingPage from './pages/BookingPage';
import BookingSummaryPage from './pages/BookingSummaryPage';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        {/* Main app routes: Home, Events, Event Details, Booking, and static summary */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/search-jobs" element={<SearchJobsPage />} />
          <Route path="/events/:eventId" element={<EventDetailsPage />} />
          <Route path="/booking/:eventId" element={<BookingPage />} />
          <Route path="/booking-summary" element={<BookingSummaryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;