const express = require('express');
const userDB = require('../controllers/userControllers');
const fs = require('fs');

const router = express.Router();

router.get('/', async (req, res) => {
  await res.render('login');
});
// local:4000이 요청되면 login 페이지 실행
router.post('/', async (req, res) => {
  const duplicatedUser = await userDB.userCheck(req.body.id);
  console.log(duplicatedUser, !duplicatedUser);
  if (duplicatedUser) {
    res.status(200).redirect('/main');
  } else {
    res.status(400);
    res.send(
      '저장된 ID가 없습니다.. <br><a href="/register">회원가입 페이지로 이동</a>',
    );
  }
});
module.exports = router;
