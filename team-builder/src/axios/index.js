import { v4 as uuid } from "uuid";

// 👉 the shape of the list of friends from API
const initialTeamMemberList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: "Michael Lassiter",
    email: "michael@michael.com",
    role: "backend engineer",
  },
  {
    id: uuid(),
    name: "Shanae Leslie",
    email: "shanae@shanae.com",
    role: "frontend engineer",
  },
  {
    id: uuid(),
    name: "Elijah Stewart",
    email: "elijah@elijah.com",
    role: "designer",
  },
];

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({
      status: 200,
      success: true,
      data: initialTeamMemberList,
    });
  },
  post(url, { name, email, role }) {
    const newTeamMember = { id: uuid(), name, email, role };
    return Promise.resolve({ status: 200, success: true, data: newTeamMember });
  },
};
