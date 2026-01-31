import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { useEffect, useReducer } from "react";
import ConfirmedBooking from "./ConfirmedBooking";
// API
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};
const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};
// API

function updateTimes(state, action) {
  if (action.type === "INITIALIZE") return action.payload;
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function initializeTimes() {
  return [];
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const data = fetchAPI(new Date());
    dispatch({ type: "INITIALIZE", payload: data });
  }, []);

  const submitForm = (formData) => {
    return submitAPI(formData);
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/menu" element={<Menu />}></Route> */}
        <Route
          path="/reservations"
          element={
            <BookingPage times={availableTimes} submit={submitForm} />
          }></Route>
        {/* <Route path="/order" element={<Order />}></Route> */}
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;

export { initializeTimes, updateTimes };
