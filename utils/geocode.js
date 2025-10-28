const { default:fetch} = require("node-fetch");

async function geocode(location) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;

  const response = await fetch(url, {
    headers: { "User-Agent": "Wanderlust-Zyra-Clone" },
  });

  const data = await response.json();

  // If location found
  if (data && data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
    };
  } else {
    console.log("❌ No location found for:", location);
    return null;
  }
}

module.exports = geocode;
