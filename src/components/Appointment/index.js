import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import "./styles.scss";
import Form from './Form';
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVING = "ERROR_SAVING";
const ERROR_DELETING = "ERROR_DELETING";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  console.log("student: ", props.interview);
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => {
        console.log("success")
        transition(SHOW)
      })
      .catch(() => {
        transition(ERROR_SAVING, true)
      })
  }

  function cancel() {
    transition(DELETING)
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETING, true))
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
          />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && (
        <Status message="SAVING..." />
      )}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure?"
          onCancel={back}
          onConfirm={cancel}
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === DELETING && (
        <Status
          message="Deleting..."
        />
      )}
      {mode === ERROR_SAVING && (
        <Error
          message="There was an Error during Saving..."
          onClose={back}
        />
      )}
      {mode === ERROR_DELETING && (
        <Error
          message="There was an Error during Deleting..."
          onClose={back}
        />
      )}
    </article>
  );
}