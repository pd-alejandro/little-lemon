import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
import { MemoryRouter } from "react-router-dom";

const mockTimes = ["17:00", "18:00", "19:00"];

test("Renders the booking page heading", () => {
  render(<MemoryRouter><BookingPage times={mockTimes} /></MemoryRouter>);
  const heading = screen.getByText(/Booking/i);
  expect(heading).toBeInTheDocument();

  const dateInput = screen.getByLabelText("Date");
  const timeInput = screen.getByLabelText("Time");
  const guestsInput = screen.getByLabelText("Guests");

  expect(dateInput).toBeRequired();
  expect(timeInput).toBeRequired();
  expect(guestsInput).toBeRequired();
});
