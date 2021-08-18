import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";
import TeamMembers from "./TeamMembers";
import MemberForm from "./MemberForm";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
  about: "",
};

// const teamMemberData = [
//   {}]
function App() {
  const [teamMemberData, setTeamMemberData] = useState([]);
  //could have renamed to teamMemberData
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      about: formValues.about.trim(),
    };
    if (
      !newMember.name ||
      !newMember.email ||
      !newMember.role ||
      !newMember.about
    ) {
      setError("All fields must be completed");
      return;
    }

    axios
      .post("fakeapi.com", newMember)
      .then((res) => {
        console.log(res);
        setTeamMemberData([res.data, ...teamMemberData]);
        setFormValues(initialFormValues);
        setError("");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get("fakeapi.com")
      .then((res) => {
        console.log(res);
        setTeamMemberData(res.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Oops! We are working on this issue, please come back later!");
      });
  }, []);

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <h1 className="Header">Team Member Roster</h1>
      <h2>New Member Form</h2>
      <MemberForm values={formValues} update={updateForm} submit={submitForm} />
      {/* {teamMemberData.map((teamMember) => {
        return <TeamMember key={teamMember.id} details={teamMember} />;
      })} */}
      <h2>Current Members</h2>
      <TeamMembers teamMemberData={teamMemberData} />
    </div>
  );
}

export default App;
