let sampleListings=[
  {
    "title": "Cozy Downtown Apartment",
    "description": "A modern 1-bedroom apartment in the heart of the city with all amenities.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1701777586812-f577bc50fd8b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 75,
    "location": "New York, NY",
    "country": "USA"
  },
  {
    "title": "Beachside Bungalow",
    "description": "Relax in a beautiful bungalow just steps away from the sandy beach.",
    "image": {
      filename:"listingimage",
      url:"https://i.pinimg.com/1200x/55/d9/7d/55d97dab591f88618d8f4d31018c3ea4.jpg"
    },
    "price": 120,
    "location": "Malibu, CA",
    "country": "USA"
  },
  {
    "title": "Mountain Cabin Retreat",
    "description": "Escape to a cozy cabin with stunning mountain views.",
    "image": {
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1694475416476-d7f765fa9ff6?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 90,
    "location": "Aspen, CO",
    "country": "USA"
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Spacious loft with industrial design and rooftop access.",
    "image":{
       filename:"listingimage",
       url:"https://plus.unsplash.com/premium_photo-1670176447308-41ce514dd228?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 110,
    "location": "Chicago, IL",
    "country": "USA"
  },
  {
    "title": "Romantic Parisian Studio",
    "description": "Charming studio apartment in the heart of Paris, near the Eiffel Tower.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1654378555267-642aed58fcc8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "price": 95,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Countryside Cottage",
    "description": "Escape the city and enjoy nature in this peaceful countryside cottage.",
    "image": {
      filename:"listingimage",
      url:"https://i.pinimg.com/736x/70/6a/3f/706a3f3ce70fb0d0af9455171a4e7700.jpg"},
    "price": 70,
    "location": "Cotswolds",
    "country": "UK"
  },
  {
    "title": "Luxury Villa with Pool",
    "description": "Private villa with infinity pool and stunning ocean views.",
    "image":{ 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1602080951262-f4a3027570d1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 250,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Urban Studio Near Subway",
    "description": "Conveniently located studio perfect for solo travelers or couples.",
    "image": 
    {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1573655483621-c81018f06985?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 60,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Safari Lodge Adventure",
    "description": "Stay in a luxury safari lodge with breathtaking views of wildlife.",
    "image":{
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1661868852019-1ee8ef9c30d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 180,
    "location": "Maasai Mara",
    "country": "Kenya"
  },
  {
    "title": "Charming Treehouse",
    "description": "Unique treehouse stay with a cozy interior and forest views.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1751834410723-b0dd9afe6237?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 130,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Lakefront Cabin",
    "description": "A quiet cabin by the lake, perfect for fishing and relaxation.",
    "image":{ 
    filename:"listingimage",
    url:"https://images.unsplash.com/photo-1752981492133-4ae3442d86ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
    "price": 85,
    "location": "Lake Tahoe, CA",
    "country": "USA"
  },
  {
    "title": "Historic Downtown Loft",
    "description": "Loft apartment in a beautifully restored historic building.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1731511256620-13d830411caa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
      "price": 100,
    "location": "Boston, MA",
    "country": "USA"
  },
  {
    "title": "Secluded Desert Villa",
    "description": "Experience tranquility in a modern villa surrounded by desert landscapes.",
    "image": {
      filename:"listingimage",
      url:"https://i.pinimg.com/1200x/fd/12/38/fd123847f5184e0cd0ee78e940bf2bb3.jpg"
    },
    "price": 150,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Cozy Ski Chalet",
    "description": "Perfect chalet for winter sports lovers, steps from the slopes.",
    "image": {filename:"listingimage",
      url:"https://images.unsplash.com/photo-1646584336975-5cee3191f95d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 140,
    "location": "Chamonix",
    "country": "France"
  },
  {
    "title": "Luxury Penthouse Suite",
    "description": "Top-floor penthouse with panoramic city views and modern amenities.",
    "image":{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 300,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Rustic Farmhouse Stay",
    "description": "Experience rural life in a cozy and authentic farmhouse.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1540211241204-7623204170f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 65,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Modern Beach Apartment",
    "description": "Bright apartment just a few steps from the beach with amazing sea views.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1723231812751-ecaa763c55f0?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 110,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Chic City Loft",
    "description": "Stylish loft apartment in the heart of a vibrant city.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1638787793917-85fc317f2d6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 95,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Tropical Jungle Retreat",
    "description": "Escape to a secluded retreat surrounded by lush tropical jungle.",
    "image": {
      filename:"listingimage", 
      url:"https://images.unsplash.com/photo-1590675661607-c73d1f37e5f6?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 160,
    "location": "Costa Rica",
    "country": "Costa Rica"
  },
  {
    "title": "Elegant Riverside Apartment",
    "description": "Apartment with modern amenities and stunning river views.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1754553080373-3a806029796a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 85,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Heritage Palace Stay",
    "description": "Live like royalty in a restored heritage palace with antique interiors.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1703665180697-523baf7c88ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 200,
    "location": "Jaipur",
    "country": "India"
  },
  {
    "title": "Cozy Bohemian Apartment",
    "description": "Colorful and artistic apartment perfect for free-spirited travelers.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1566152474719-8d79ca1a4c66?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 70,
    "location": "Goa",
    "country": "India"
  },
  {
    "title": "Skyline View Condo",
    "description": "Modern condo with panoramic views of the city skyline.",
    "image":{
      filename:"listingimage" ,
     url: "https://images.unsplash.com/photo-1688149906606-fd5552b23f00?q=80&w=1226&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
    },
    "price": 150,
    "location": "Toronto",
    "country": "Canada"
  },
  {
    "title": "Arctic Glass Igloo",
    "description": "Experience the Northern Lights from a cozy glass igloo.",
    "image": {
      filename:"listingimage",
      url:"https://i.pinimg.com/1200x/74/6a/1c/746a1caf39d081910ac90263bfe04cd2.jpg"
    },
    "price": 220,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Island Overwater Bungalow",
    "description": "Luxurious bungalow over turquoise waters with private deck.",
    "image":{
    filename:"listingimage",
    url:"https://images.unsplash.com/photo-1578978562071-bbeb61e5a8f8?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 350,
    "location": "Malé",
    "country": "Maldives"
  },
  {
    "title": "Minimalist Zen Apartment",
    "description": "Japanese-inspired apartment designed for peace and simplicity.",
    "image": {
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1723669629708-0de9b27820b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 100,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Rustic Barn Stay",
    "description": "Converted barn with rustic charm and modern comforts.",
    "image": {
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1663088800901-c57258d8707a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 80,
    "location": "Texas",
    "country": "USA"
  },
  {
    "title": "Cliffside Cave House",
    "description": "Stay in a unique cave house carved into a cliffside.",
    "image": {
      filename:"filename",
      url:"https://plus.unsplash.com/premium_photo-1664115701526-2f82b524a567?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 170,
    "location": "Cappadocia",
    "country": "Turkey"
  },
  {
    "title": "Jungle Tree Lodge",
    "description": "Lodge nestled high among the trees with open-air balcony.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1687892885319-7aaecb66347b?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 140,
    "location": "Kerala",
    "country": "India"
  },
  {
    "title": "Charming Canal House",
    "description": "Traditional canal-side house with cozy interiors and great views.",
    "image": {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1726843027288-3409c03ffa7e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D444444444444",
    },
      
    "price": 120,
    "location": "Venice",
    "country": "Italy"
  }

]
module.exports={data:sampleListings}