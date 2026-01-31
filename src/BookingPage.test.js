import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";

const mockTimes = ["17:00", "18:00", "19:00"];

test("Renders the booking page heading", () => {
    render(<BookingPage times={mockTimes} />);
    const heading = screen.getByText(/Booking/i);
    expect(heading).toBeInTheDocument();
});