const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Rustic Countryside Barn",
    description:
      "Experience rustic charm in this converted barn surrounded by rolling hills and farmland.",
    image:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Luxury Villa with Pool",
    description:
      "Indulge in luxury at this stunning villa with a private pool and breathtaking views.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Charming Cabin by the Lake",
    description:
      "Relax by the serene lake in this charming wooden cabin. Perfect for fishing and nature walks.",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Elegant Parisian Apartment",
    description:
      "Stay in style in this elegant apartment in the heart of Paris. Enjoy the view of the Eiffel Tower.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Paris",
    country: "France",
  },
  {
    title: "Desert Glamping Tent",
    description:
      "Experience the desert like never before in this luxurious glamping tent under the stars.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 700,
    location: "Sahara",
    country: "Morocco",
  },
  {
    title: "Traditional Japanese Ryokan",
    description:
      "Immerse yourself in Japanese culture with a stay at this traditional ryokan with hot springs.",
    image:
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Safari Lodge",
    description:
      "Stay in the heart of the savannah in this luxurious safari lodge. Enjoy guided tours and wildlife sightings.",
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Historic Rome Flat",
    description:
      "Live like a local in this charming flat near the Colosseum, full of history and character.",
    image:
      "https://images.unsplash.com/photo-1543349689-9a4d426bc9a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Snowy Ski Chalet",
    description:
      "Hit the slopes from this cozy ski chalet located right in the heart of the mountains.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Swiss Alps",
    country: "Switzerland",
  },
  {
    title: "Secluded Treehouse",
    description:
      "Reconnect with nature in this magical treehouse hidden away in the forest canopy.",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Santorini Cliffside Home",
    description:
      "Marvel at sunsets over the Aegean Sea from this beautiful whitewashed cliffside home.",
    image:
      "https://images.unsplash.com/photo-1505739774207-8543c07a36b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Slow down and enjoy the rural lifestyle in this cozy farmhouse surrounded by fields.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Urban Studio Apartment",
    description:
      "Compact yet stylish studio perfect for solo travelers who want to explore the city.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 750,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Private Island Getaway",
    description:
      "Your own slice of paradise! Stay on a private island with crystal-clear waters all around.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Chic London Flat",
    description:
      "Trendy and modern flat located just minutes away from iconic landmarks.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Cave House",
    description:
      "Unique stay inside a beautifully renovated cave with all modern amenities.",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Cappadocia",
    country: "Turkey",
  },
  {
    title: "Tropical Bungalow",
    description:
      "Relax among palm trees in this colorful bungalow near the beach.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Ice Hotel Room",
    description:
      "Sleep surrounded by sculpted ice and snow in this one-of-a-kind hotel.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Jukkasjärvi",
    country: "Sweden",
  },
  {
    title: "Cliffside Jungle Villa",
    description:
      "Luxury villa hidden in the jungle with infinity pool overlooking the ocean.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Desert Adobe Home",
    description:
      "Earthy adobe-style home blending seamlessly with the desert surroundings.",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Santa Fe",
    country: "United States",
  },
  {
    title: "Houseboat Stay",
    description:
      "Float along calm waters and enjoy the peace of staying on a houseboat.",
    image:
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Forest Cabin Retreat",
    description:
      "A secluded cabin deep in the forest, perfect for digital detox and relaxation.",
    image:
      "https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Vancouver",
    country: "Canada",
  },
  {
    title: "Penthouse with Skyline View",
    description:
      "Top-floor penthouse with panoramic views of the city skyline.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty inside a real medieval castle with ancient charm.",
    image:
      "https://images.unsplash.com/photo-1582144288904-778819b66a7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Bohemian Desert Dome",
    description:
      "Futuristic desert dome house with bohemian vibes and stargazing spots.",
    image:
      "https://images.unsplash.com/photo-1578894381163-e72c17f0021b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Joshua Tree",
    country: "United States",
  },
];

module.exports = { data: sampleListings };
