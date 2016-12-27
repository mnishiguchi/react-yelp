export function searchNearby(google, map, request) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map)
    const callback = (result, status, pagination) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(result, pagination)
      } else {
        reject(result, status)
      }
    }

    service.nearbySearch(request, callback)
  })
}
