const routeNames = require('../helpers/routeNames');
const client = require('../helpers/redisClient');
module.exports = (req, res, next) => {
  console.log();
  const route = req.baseUrl.split('/')[2];
  console.log(route);
  console.log(route === routeNames.anime);
  if (route === routeNames.anime) {
    client.get(routeNames.anime, (err, data) => {
      if (err) {
        console.log('some error');
        return next();
      }
      if (!data) {
        console.log('no data');
        return next();
      }
      res.status(200).json({
        status: 'success',
        data,
      });
    });
  }
  if (route === routeNames.newAnime) {
    console.log("shouldn't happen yet");
  }
  if (route === routeNames.trendingAnime) {
    console.log('should also not work');
  }
  console.log('we get here');
  return next();
};
