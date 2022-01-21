export default function getAppointmentsForDay(state, day) {
  const appointments = [];
  const filteredDays = state.days.filter(days => days.name === day);
  // appointment for specific day, is an array
  if (filteredDays.length === 0) {
    return appointments;

  } else {
    for (const id of filteredDays[0].appointments) {
      appointments.push(state.appointments[id]);
    }
  }
  return appointments;
};

// 1. loop through appointments for a day array.
// inside loop compare every appointment id with key in state.appointments
// if there is a match add to appointments array
// fter loop return appointments