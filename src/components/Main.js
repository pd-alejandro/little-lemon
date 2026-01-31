import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { useReducer } from "react";

function updateTimes() {
  return initializeTimes;
}

const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/menu" element={<Menu />}></Route> */}
        <Route path="/reservations" element={<BookingPage times={availableTimes} />}></Route>
        {/* <Route path="/order" element={<Order />}></Route> */}
        {/* <Route path="/login" element={<Login />}></Route> */}
      </Routes>
    </>
  );
};

export default Main;
