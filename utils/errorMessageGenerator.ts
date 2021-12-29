const errorMessageGenerator = (errors: any) => {
  let errorMessage: any = {};

  if (errors.name) {
    errorMessage.name = errors.name.message;
  }
  if (errors.description) {
    errorMessage.description = errors.description.message;
  }
  if (errors.latitude) {
    errorMessage.latitude = errors.latitude.message;
    if (errors.latitude.type === 'isLatitude')
      errorMessage.latitude = 'Invalid Latitude';
  }
  if (errors.longitude) {
    errorMessage.longitude = errors.longitude.message;
    if (errors.longitude.type === 'isLongitude')
      errorMessage.longitude = 'Invalid Longitude';
  }
  if (errors.coordinates) {
    errorMessage.coordinates = errors.coordinates.message;
    if (errors.coordinates.type === 'isValidCoordinate')
      errorMessage.coordinates = 'Invalid Coordinate';
  }
  return errorMessage;
};

export default errorMessageGenerator;
