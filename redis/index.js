const config = require('config')
const createRedis = require('./createRedis')
const createNohm = require('./createNohm')

const redis = createRedis({
  host: config.get('redis.host'),
  port: config.get('redis.port')
});

const nohm = createNohm({
  prefix: 'koa-redis-server',
  client: redis
});

module.exports = {
  redis,
  nohm
};
