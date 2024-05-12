import React from "react";
import InstantBooking from "../InstantBooking/InstantBooking";
import ScheduleBooking from "../ScheduleBooking/ScheduleBooking";

function MainPage({ optionValue }) {
  console.log(optionValue);
  return (
    <main class="ml-60 pt-16 max-h-screen overflow-auto">
      <div class="px-6 py-8">
        <div class="max-w-4xl mx-auto">
          {optionValue === 1 ? (
            <InstantBooking />
          ) : optionValue === 2 ? (
            <ScheduleBooking />
          ) : (
            <InstantBooking />
          )}
        </div>
      </div>
    </main>
  );
}

export default MainPage;
