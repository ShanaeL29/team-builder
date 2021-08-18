import React, { useState } from "react";
import TeamMember from "./TeamMember";

export default function TeamMembers(props) {
  //data it needs is being passed down as a prop. we would only need to add another state if we needed to extend the functionality
  const { teamMemberData } = props;
  return (
    <>
      {teamMemberData.map((teamMember) => {
        return <TeamMember key={teamMember.id} details={teamMember} />;
      })}
    </>
  );
}
//data persistence database and local storage. being able to still have the added data later when you reopen. local storage like an online cart
//form state is local to the form
