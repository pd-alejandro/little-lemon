import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

const Main = () => {
  return <>
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
    {/* <Route path="/about" element={<About />}></Route> */}
    {/* <Route path="/menu" element={<Menu />}></Route> */}
    <Route path="/reservations" element={<BookingPage />}></Route>
    {/* <Route path="/order" element={<Order />}></Route> */}
    {/* <Route path="/login" element={<Login />}></Route> */}
  </Routes>
  </>;
};

export default Main;
