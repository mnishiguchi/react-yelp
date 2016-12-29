// https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/#getting-a-list-of-places
export function searchNearby(google, map, request) {

  console.log(`searchNearby`)

  return new Promise((resolve, reject) => {

    getService(google, map).nearbySearch(request, callback)

    function callback(result, status, pagination) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(result, pagination)
      } else {
        reject(result, status)
      }
    }
  })
}

// https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/#adding-more-details-to-markers
export function getDetails(google, map, placeId) {

  console.log(`getDetails`)

  return new Promise((resolve, reject) => {

    getService(google, map).getDetails({ placeId }, callback)

    function callback(result, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(result)
      } else {
        reject(result, status)
      }
    }
  })
}

function getService(google, map) {
  return new google.maps.places.PlacesService(map)
}
