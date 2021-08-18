import React from "react";

export default function MemberForm(props) {
  const { values, update, submit } = props;

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Type in member full name"
            maxLength="30"
            onChange={onChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            maxLength="50"
            placeholder="Type in member email"
            onChange={onChange}
          />
        </label>
        <label>
          Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select Member Role --</option>
            <option value="Front-End Engineer">Front-End Engineer</option>
            <option value="Back-End Engineer">Back-End Engineer</option>
            <option value="Full-Stack Engineer">Full-Stack Engineer</option>
            <option value="Web Designer">Web Designer</option>
            <option value="Mobile Developer">Mobile Developer</option>
            <option value="Game Developer">Game Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Security Developer">Security Developer</option>
            <option value="DevOps">DevOps</option>
          </select>
        </label>
        <label>
          About
          <input
            type="text"
            name="about"
            value={values.about}
            maxLength="250"
            placeholder="Describe Yourself!"
            onChange={onChange}
          />
        </label>

        <div className="submit">
          <button>Add New Member</button>
        </div>
      </div>
    </form>
  );
}
