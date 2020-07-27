const roundToTwoDecimalPlaces = require('./roundToTwoDecimalPlaces');
// TODO: when you know exactly how many attributes you're using send only that to the client
exports.flattenArray = (data) => {
  return data.map((el) => {
    return {
      attributes: {
        ...el.attributes,
        averageRating: roundToTwoDecimalPlaces(
          parseFloat(el.attributes.averageRating / 10)
        ),
      },
      link: `${process.env.LOCAL_URL}/anime/${
        el.links.self.split('/')[el.links.self.split('/').length - 1]
      }`,
    };
  });
};
exports.flattenObject = (data) => {
  return {
    attributes: {
      ...data.attributes,
      averageRating: roundToTwoDecimalPlaces(
        parseFloat(data.attributes.averageRating / 10)
      ),
    },
  };
};
