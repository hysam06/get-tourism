export const countries = {
    dubai: {
        name: "Dubai",
        id: "dubai",
        tagline: "The City of Gold",
        description: "Experience the ultimate fusion of tradition and futuristic vision. From the soaring heights of the Burj Khalifa to the tranquil dunes of the Arabian Desert, Dubai offers a luxury escape like no other.",
        heroImage: "https://images.unsplash.com/photo-1512453979798-5ea904acfb5b?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Burj Khalifa", desc: "Touch the sky from the world's tallest tower." },
            { title: "Palm Jumeirah", desc: "An island wonder of luxury living." },
            { title: "Desert Safari", desc: "Golden dunes and Arabian nights." }
        ],
        lat: 25.2048,
        lon: 55.2708
    },
    india: {
        name: "India",
        id: "india",
        tagline: "Timeless Heritage",
        description: "A land of vibrant colors, ancient spirituality, and architectural marvels. Journey through the palaces of Rajasthan, the backwaters of Kerala, and the bustling streets of Mumbai.",
        heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Taj Mahal", desc: "The eternal symbol of love." },
            { title: "Jaipur", desc: "The Pink City of forts and palaces." },
            { title: "Kerala", desc: "God's own country." }
        ],
        lat: 20.5937,
        lon: 78.9629
    },
    bali: {
        name: "Bali",
        id: "bali",
        tagline: "Island of the Gods",
        description: "Find your zen in the lush rice terraces of Ubud or surf the legendary waves of Uluwatu. Bali is a spiritual awakening wrapped in tropical paradise.",
        heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Ubud", desc: "Cultural heart and artistic hub." },
            { title: "Uluwatu", desc: "Cliffs, temples, and ocean views." }
        ],
        lat: -8.4095,
        lon: 115.1889
    },
    france: {
        name: "France",
        id: "france",
        tagline: "Elegance defined",
        description: "From the romance of Paris to the lavender fields of Provence. France is an artistic muse and a culinary journey.",
        heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Paris", desc: "City of lights and love." },
            { title: "Riviera", desc: "Sun-soaked Mediterranean charm." }
        ],
        lat: 46.2276,
        lon: 2.2137
    },
    maldives: {
        name: "Maldives",
        id: "maldives",
        tagline: "Paradise Found",
        description: "Crystal clear waters, overwater bungalows, and vibrant marine life. The Maldives is the ultimate definition of luxury and relaxation.",
        heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Male Cloud", desc: "Capital city exploration." },
            { title: "Maafushi", desc: "Local culture and pristine beaches." }
        ],
        lat: 3.2028,
        lon: 73.2207
    },
    turkey: {
        name: "Turkey",
        id: "turkey",
        tagline: "Where East Meets West",
        description: "A mesmerizing blend of history and culture. From the hot air balloons of Cappadocia to the bazaars of Istanbul.",
        heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Cappadocia", desc: "Magical fairy chimneys." },
            { title: "Istanbul", desc: "Historic mosques and markets." }
        ],
        lat: 38.9637,
        lon: 35.2433
    },
    thailand: {
        name: "Thailand",
        id: "thailand",
        tagline: "Land of Smiles",
        description: "Golden temples, bustling street markets, and tropical islands. Thailand offers an adventure for every sense.",
        heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Bangkok", desc: "Vibrant street life and shrines." },
            { title: "Phuket", desc: "Mountainous island rainforests." }
        ],
        lat: 15.8700,
        lon: 100.9925
    },
    japan: {
        name: "Japan",
        id: "japan",
        tagline: "Harmony and Innovation",
        description: "A seamless blend of ancient traditions and cutting-edge modernity. Cherry blossoms, temples, and neon lights.",
        heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Tokyo", desc: "Ultramodern metropolis." },
            { title: "Kyoto", desc: "Classic Buddhist temples." }
        ],
        lat: 36.2048,
        lon: 138.2529
    }
};

export const getCountry = (id) => {
    return countries[id.toLowerCase()] || null;
};
