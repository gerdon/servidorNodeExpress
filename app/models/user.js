module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    });
  
    return user;
}

// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('user', {
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//     });
  
//     return User;
// }