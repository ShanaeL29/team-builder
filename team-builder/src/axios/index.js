import { v4 as uuid } from "uuid";

// 👉 the shape of the list of friends from API
const initialTeamMemberList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: "Michael Lassiter",
    email: "michael@michael.com",
    role: "Back-End Engineer",
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
    justo, luctus id ultrices eget, condimentum vestibulum mi.
    Aliquam condimentum ipsum ac metus efficitur mattis. Quisque
    vehicula libero tellus, a ornare nunc faucibus in. Phasellus sed
    metus nec neque feugiat mollis vitae non arcu. Integer at enim
    pellentesque, maximus eros pellentesque, rutrum arcu. In aliquam
    facilisis arcu vulputate sodales. Donec pulvinar mattis
    placerat. Vivamus id volutpat libero, vel ultricies tellus.`,
  },
  {
    id: uuid(),
    name: "Shanae Leslie",
    email: "shanae@shanae.com",
    role: "Front-End Engineer",
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
    justo, luctus id ultrices eget, condimentum vestibulum mi.
    Aliquam condimentum ipsum ac metus efficitur mattis. Quisque
    vehicula libero tellus, a ornare nunc faucibus in.`,
  },
  {
    id: uuid(),
    name: "Elijah Stewart",
    email: "elijah@elijah.com",
    role: "Web Designer",
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
    justo, luctus id ultrices eget, condimentum vestibulum mi.
    Aliquam condimentum ipsum ac metus efficitur mattis. Quisque
    vehicula libero tellus, a ornare nunc faucibus in. Phasellus sed
    metus nec neque feugiat mollis vitae non arcu. Integer at enim
    pellentesque, maximus eros pellentesque, rutrum arcu.`,
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
  post(url, { name, email, role, about }) {
    const newTeamMember = { id: uuid(), name, email, role, about };
    return Promise.resolve({ status: 200, success: true, data: newTeamMember });
  },
};
