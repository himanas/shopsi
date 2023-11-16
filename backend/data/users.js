import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Manas Pachani",
    email: "mjp787828@gmail.com",
    password: bcrypt.hashSync("Manas@111", 10),
    isAdmin: false,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("54321", 10),
    isAdmin: false,
  },
];

export default users;
