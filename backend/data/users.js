import bcrypt from 'bcryptjs';

const users = [

  {
    name: 'User 1',
    email: 'user1@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'User 2',
    email: 'user2@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'User 3',
    email: 'user3@email.com',
    password: bcrypt.hashSync('123456', 10),
  },

];

export default users;