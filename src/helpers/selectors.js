// returns an array of appointments for the given day
export function getAppointmentsForDay(state, day) {
  const appointments = [];
  const filteredDays = state.days.filter(days => days.name === day);
  
  if (filteredDays.length === 0) {
    return appointments;
    // if appointment exist and is an array
  } else if (Array.isArray(filteredDays[0].appointments)){
    for (const id of filteredDays[0].appointments) {
      appointments.push(state.appointments[id]);
    }
  }
  return appointments;
};

// replaces the interviewer id with the actual interviewer object
export function getInterview(state, interview) {
  if (!interview) {
    return null; 
  }

  const interviewObj = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  }
  return interviewObj;
}

// returns an array of interviews for the given day
export function getInterviewsForDay(state, day) {
  const result = [];
  const filteredDays = state.days.filter(days => days.name === day);
  if (filteredDays.length === 0) {
    return result;
    // if interviewers exist and is an array
  } else if (Array.isArray(filteredDays[0].interviewers)) {
    for (const id of filteredDays[0].interviewers) {
      result.push(state.interviewers[id]);
    }
  }
  return result;
}