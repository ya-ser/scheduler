import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

export default function InterviewerList(props) {
  const { interviewers, value, onChange } = props;
  const parsedInterviewer = interviewers.map((oneInterviewer) => {
    return <InterviewerListItem
      key={oneInterviewer.id}
      id={oneInterviewer.id}
      name={oneInterviewer.name}
      avatar={oneInterviewer.avatar}
      selected={oneInterviewer.id === value}
      setInterviewer={() => onChange(oneInterviewer.id)}
    />
  })
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewer}</ul>
    </section>
  )
}