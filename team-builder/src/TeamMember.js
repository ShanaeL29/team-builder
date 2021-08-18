import React from "react";

export default function TeamMember(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working on fetching your team member&apos;s details...</h3>;
  }

  return (
    <div className="member container">
      <div className="left">
        <h3>{details.name}</h3>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
      <p className="about">About Me: {details.about}</p>
    </div>
  );
}
