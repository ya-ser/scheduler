import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;
  const parsedInterviewer = interviewers.map((oneInterviewer) => {
    return <InterviewerListItem
      id={oneInterviewer.id}
      name={oneInterviewer.name}
      avatar={oneInterviewer.avatar}
      selected={oneInterviewer.id === interviewer}
      setInterviewer={(event) => props.setInterviewer(oneInterviewer.id)}
    />
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewer}</ul>
    </section>
  )
}