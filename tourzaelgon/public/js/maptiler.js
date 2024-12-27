/* eslint-disable */

export const displayMap = (locations) => {
  maptilersdk.config.apiKey = 'A1zBwtSa1ESrS4hUUVLl';
  const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.STREETS,
    center: locations[0].coordinates,
  });
};
