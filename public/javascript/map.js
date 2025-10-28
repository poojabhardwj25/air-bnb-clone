document.addEventListener("DOMContentLoaded", function () {
  // Check if the 'map' element exists before trying to create the map
  const mapElement = document.getElementById('map');
  if (!mapElement) return;
  

  const map = new maplibregl.Map({
    container: 'map',
    style: "https://api.maptiler.com/maps/streets/style.json?key=7oKBr22VVA5PAAcIgf9I"
,
    center: listingData.coordinates,
    zoom: 10
  });


  map.addControl(new maplibregl.NavigationControl());

  // Add a marker
  new maplibregl.Marker({ color: "#ff385c" })
    .setLngLat(listingData.coordinates)
    .setPopup(
      new maplibregl.Popup({ offset: 25 })
        .setHTML(`<h5>${listingData.title}</h5><p>${listingData.location}, ${listingData.country}</p>`
 )
    )
    .addTo(map);
});
