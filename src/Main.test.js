import { initializeTimes, updateTimes } from "./components/Main";

test("initializeTimes function", () => {
  const initTimes = initializeTimes();

  expect(Array.isArray(initTimes)).toBe(true);
  expect(initTimes.length).toBeGreaterThan(0);
});

test("updateTimes function", () => {
  const updTimes = updateTimes();

  expect(Array.isArray(updTimes)).toBe(true);
  expect(updTimes.length).toBeGreaterThan(0);
});
