const router = require('koa-router')()
const { redis, nohm } = require('../redis')
const { UserModel } = require('../models/UserModel')

router.get('/', async (ctx, next) => {
  ctx.body = 'hello wrold';
  const user = new UserModel();
  const sortIds = await user.sort({
    field: 'name'
  });
  const users = await UserModel.loadMany(sortIds)
  ctx.body = users.map(user => ({
    id: user.id,
    name: user.property('name')
  }));
})

router.post('/', async (req, res, next) => {
  const query = req.query;
  const data = {
    name: query.name,
    password: query.password,
    email: query.email
  }
  const user = await nohm.factory('User');
  const datas = user.property(data);
  await user.save();
  res.end();
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
