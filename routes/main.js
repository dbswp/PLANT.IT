const express = require('express');
const userDB = require('../controllers/userControllers');
const router = express.Router();

router.post('/', async (req, res) => {
  const duplicatedUser = await userDB.userCheck(req.body.id);
  if (duplicatedUser) {
    await res.status(200).render('main');
  } else {
    await res.status(400).send('이미 있음');
  }
});

module.exports = router;
