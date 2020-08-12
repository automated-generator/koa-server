const redis = require('redis')

module.exports = function createReids(config) {
  const redisClient = redis.createClient(config);

  redisClient.on('connect', () => {
    console.log('redis[' + (config.db || 0)  + ']connected:' + config.host);
  });

  redisClient.on('error', (err) => {
    console.log(err);
  });

  return redisClient;
}