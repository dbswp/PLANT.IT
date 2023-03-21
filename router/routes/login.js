const express = require('express');
const userDB = require('../../controllers/userControllers');
const fs = require('fs');

const router = express.Router();

// local:4000이 요청되면 login 페이지 실행

router.post('/', async (req, res) => {
  const duplicatedUser = await userDB.userCheck(req.body.id);
  if (!duplicatedUser) {
    res.status(200);
    fs.readFile('index.html');
  } else {
    res.status(400);
    res.send(
      '비밀번호가 다릅니다. <br><a href="/login">로그인 페이지로 이동</a>',
    );
  }
});
