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
            <option value="front-end">Front-End Engineer</option>
            <option value="back-end">Back-End Engineer</option>
            <option value="full-stack">Full-Stack Engineer</option>
            <option value="designer">Web Designer</option>
            <option value="mobile-developer">Mobile Developer</option>
            <option value="game-developer">Game Developer</option>
            <option value="data-scientist">Data Scientist</option>
            <option value="security-developer">Security Developer</option>
            <option value="devOps">DevOps</option>
          </select>
        </label>
        <label>
          Email
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
