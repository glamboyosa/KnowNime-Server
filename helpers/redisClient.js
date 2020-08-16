const redis = require('redis');
const REDIS_PORT = process.env.port || 6379;
client = redis.createClient(REDIS_PORT);
module.exports = client;
