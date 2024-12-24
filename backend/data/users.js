import bcrypt from 'bcryptjs';

const users = [

  {
    name: 'Ken worw',
    email: 'ken@worw.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'asdf',
    email: 'asdf@asdf.com',
    password: bcrypt.hashSync('123456', 10),
  },

];

export default users;