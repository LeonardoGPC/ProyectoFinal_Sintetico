const { getHash, getSalt } = require('../hash');

var user1 = {
  name: 'juan',
  lastName: 'carlos',
  userName: 'juan-carlos',
  email: 'juancarlo@gmail.com',
  phone: '123123',
  password: '123123',
  image: "https://4.bp.blogspot.com/_eICF6G065V4/SXibSfmohlI/AAAAAAAAAJI/JcYoW8kRmFY/s320/house.JPG",
};

var user2 = {
  name: 'Agustin',
  lastName: 'Garnero',
  userName: 'agus123',
  email: 'agusgarnero3@gmail.com',
  phone: '123123',
  password: '123123',
};

var user3 = {
  name: 'Nicolas',
  lastName: 'Rodriguez',
  userName: 'Nico',
  email: 'nicolasrodriguezh77@gmail.com',
  phone: '123123',
  password: '123123',
  type: 'club',
  planType: 'club',
};

var user4 = {
  name: 'Gina',
  lastName: 'Suarez',
  userName: 'Gina',
  email: 'ginin_95@hotmail.com',
  phone: '1231231231',
  password: '123123',
  type: 'club',
  planType: 'club',
}

var user5 = {
  name: 'Maximiliano',
  lastName: 'Jayme',
  userName: 'Maxi',
  email: 'maxijayme@gmail.com',
  phone: '1231231231',
  password: '123123',
  type: 'club',
  planType: 'premium',
}

var user6 = {
  name: 'Developers',
  lastName: 'Team',
  userName: 'admin',
  email: 'devTeam@sintetico.com',
  phone: '1231231231',
  password: 'sintetico',
  type: 'admin'
}

function addHash(user) {
  var salt = getSalt();
  var hashedPassword = getHash(user.password, salt);
  user.password = hashedPassword;
  user.salt = salt;
  return user;
}

module.exports = {
  USERS: [addHash(user1), addHash(user2), addHash(user3), addHash(user4), addHash(user5), addHash(user6),],
};
