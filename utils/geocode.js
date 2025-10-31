const fetch = require("node-fetch");

async function geocode(location) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;

    // Add a timeout controller
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // 8 sec timeout

    const response = await fetch(url, {
      headers: {
        "User-Agent": "WanderlustApp/1.0 (wanderlustproject@outlook.com)" // ✅ your custom name
      },
      signal: controller.signal
    });

    clearTimeout(timeout);

    const data = await response.json();

    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      };
    } else {
      console.log("❌ No location found for:", location);
      return null;
    }
  } catch (err) {
    console.error("🌍 Geocode error:", err.message);
    return null;
  }
  console.log("📍 Data from Nominatim:", data);

}

module.exports = geocode;

