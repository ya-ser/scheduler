import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    })
  }, [])

  function updateSpots(day, increment) {
    const copyArr = [...state.days]
    let selectedDay = state.days.find(days => days.name === day)
    console.log("day: ", day);
    const findDay = copyArr.indexOf(selectedDay)
    copyArr[findDay].spots += increment
    setState((prev) => ({ ...prev, ...state.days}))
  };

  function bookInterview(day, id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({
          ...state,
          appointments
        });
      })
      .then(() => updateSpots(day, -1))
  }

  function cancelInterview(day, id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments
        });
      })
      .then(() => updateSpots(day, +1))
  }
  const setDay = day => setState({ ...state, day });

  return { state, setDay, bookInterview, cancelInterview };

}