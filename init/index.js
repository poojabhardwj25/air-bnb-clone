
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { default:fetch} = require("node-fetch");

const MONGO_URL = 'mongodb://127.0.0.1:27017/Zyra';

main()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// 🗺️ Function to get coordinates
async function geocode(location) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Zyra-Airbnb-Clone" }
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.log(`⚠️ Invalid JSON (maybe rate-limited) for: ${location}`);
      return null;
    }

    if (data && data.length > 0) {
      console.log(`📍 Coordinates found for ${location}`);
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      };
    } else {
      console.log(`⚠️ No coordinates found for: ${location}`);
      return null;
    }
  } catch (err) {
    console.log(`❌ Geocoding failed for ${location}:`, err.message);
    return null;
  }
}

// simple helper to pause between requests
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const initDB = async () => {
  await Listing.deleteMany({});
  console.log("🧹 Old listings deleted");

  const newData = [];

  for (const obj of initData.data) {
    const coords = await geocode(obj.location || obj.address);
    await delay(1500); // wait 1.5 seconds between each call (important!)

    newData.push({
      ...obj,
      owner: '68ea8c887e3347720e04fe26',
      geometry: {
        type: "Point",
        coordinates: coords ? [coords.lon, coords.lat] : [0, 0],
      },
    });
  }

  await Listing.insertMany(newData);
  console.log("✅ Database successfully reinitialized with coordinates");

  process.exit();
};

initDB();
