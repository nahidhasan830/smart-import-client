export const coordinatesToLatLong = (coordinates: string) => {
  let [latitude, longitude] = coordinates.split(',');
  if (latitude && longitude) {
    latitude = latitude.trim();
    longitude = longitude.trim();
  }
  return { latitude, longitude };
};

export const isLatitude = (lat: number) => isFinite(lat) && Math.abs(lat) <= 90;

export const isLongitude = (lng: number) =>
  isFinite(lng) && Math.abs(lng) <= 180;

export const isValidCoordinate = (coordinate: string) => {
  const { latitude, longitude } = coordinatesToLatLong(coordinate);
  if (!latitude || !longitude) return false;
  return isLatitude(+latitude) && isLongitude(+longitude);
};
