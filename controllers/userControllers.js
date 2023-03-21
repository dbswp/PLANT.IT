const mongoClient = require('./mongoConnect');

const userDB = {
  // 중복회원 확인

  userCheck: async (userID) => {
    console.log('중복됨?', userID);
    try {
      const client = await mongoClient.connect();
      const user = client.db('plantit').collection('users');
      const findUser = await user.findOne({ id: userID });
      return findUser;
    } catch (err) {
      return err;
    }
  },

  registerUser: async (newUser) => {
    try {
      const client = await mongoClient.connect();
      const user = client.db('plantit').collection('users');
      await user.insertOne(newUser);
      return true;
    } catch (err) {
      return err;
    }
  },
};

module.exports = userDB;
