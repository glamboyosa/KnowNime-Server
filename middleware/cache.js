const routeNames = require('../helpers/routeNames');
const client = require('../helpers/redisClient');
module.exports = (req, res, next) => {
  const route = req.baseUrl.split('/')[2];
  if (route === routeNames.anime) {
    return client.get(routeNames.anime, (err, data) => {
      if (err) {
        return next();
      }
      if (!data) {
        return next();
      }
      res.status(200).json({
        status: 'success',
        data: JSON.parse(data),
      });
    });
  }
  if (route === routeNames.newAnime) {
    return client.get(routeNames.newAnime, (err, data) => {
      if (err) {
        return next();
      }
      if (!data) {
        return next();
      }
      res.status(200).json({
        status: 'success',
        data: JSON.parse(data),
      });
    });
  }
  if (route === routeNames.trendingAnime) {
    return client.get(routeNames.trendingAnime, (err, data) => {
      if (err) {
        return next();
      }
      if (!data) {
        return next();
      }
      res.status(200).json({
        status: 'success',
        data: JSON.parse(data),
      });
    });
  }
  return next();
};
