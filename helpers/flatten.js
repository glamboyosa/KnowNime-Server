import roundToTwoDecimalPlaces from './roundToTwoDecimalPlaces.js';
export const flattenArray = (data) => {
  return data.map((el) => {
    return {
      id: el.id,
      attributes: {
        synopsis: el.attributes.synopsis,
        canonicalTitle: el.attributes.canonicalTitle,
        averageRating: roundToTwoDecimalPlaces(
          parseFloat(el.attributes.averageRating / 10)
        ),
        ageRating: el.attributes.ageRating,
        posterImage: {
          medium: el.attributes.posterImage.medium,
          large: el.attributes.posterImage.large,
          original: el.attributes.posterImage.original,
        },
      },
      link: `${process.env.LOCAL_URL}/anime/${
        el.links.self.split('/')[el.links.self.split('/').length - 1]
      }`,
    };
  });
};
export const flattenObject = (data) => {
  return {
    id: data.id,
    attributes: {
      synopsis: data.attributes.synopsis,
      canonicalTitle: data.attributes.canonicalTitle,
      averageRating: roundToTwoDecimalPlaces(
        parseFloat(data.attributes.averageRating / 10)
      ),
      ageRating: data.attributes.ageRating,
      posterImage: {
        medium: data.attributes.posterImage.medium,
        large: data.attributes.posterImage.large,
        original: data.attributes.posterImage.original,
      },
    },
  };
};
