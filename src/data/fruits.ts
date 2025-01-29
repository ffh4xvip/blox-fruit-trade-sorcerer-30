export interface Fruit {
  name: string;
  image: string;
  physical: number;
  permanent: number;
  category: string;
}

const parseFruitsConfig = (): Fruit[] => {
  // In a real application, this would read from the config file
  // For now, we'll return a subset of the data for demonstration
  return [
    {
      name: "Rocket",
      image: `/fruits/${encodeURIComponent("Rocket")}.png`,
      physical: 50000,
      permanent: 2000000,
      category: "Common"
    },
    {
      name: "Spin",
      image: `/fruits/${encodeURIComponent("Spin")}.png`,
      physical: 7500,
      permanent: 1500000,
      category: "Common"
    },
  {
    name: "Blade",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 30000,
    permanent: 1500000,
    category: "Common"
  },
  {
    name: "Bomb",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 80000,
    permanent: 1600000,
    category: "Common"
  },
  {
    name: "Smoke",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 100000,
    permanent: 16000000,
    category: "Common"
  },
  {
    name: "Spike",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 180000,
    permanent: 14000000,
    category: "Common"
  },
  {
    name: "Spring",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 1500000,
    permanent: 60000000,
    category: "Common"
  },
  {
    name: "Flame",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 250000,
    permanent: 50000000,
    category: "Uncommon"
  },
  {
    name: "Falcon",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 300000,
    permanent: 65000000,
    category: "Uncommon"
  },
  {
    name: "Dark",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 400000,
    permanent: 160000000,
    category: "Uncommon"
  },
  {
    name: "Sand",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 420000,
    permanent: 100000000,
    category: "Uncommon"
  },
  {
    name: "Ice",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 550000,
    permanent: 150000000,
    category: "Uncommon"
  },
  {
    name: "Diamond",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 600000,
    permanent: 115000000,
    category: "Uncommon"
  },
  {
    name: "Rubber",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 700000,
    permanent: 200000000,
    category: "Rare"
  },
  {
    name: "Barrier",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 800000,
    permanent: 185000000,
    category: "Rare"
  },
  {
    name: "Ghost",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 800000,
    permanent: 190000000,
    category: "Rare"
  },
  {
    name: "Light",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 800000,
    permanent: 190000000,
    category: "Rare"
  },
  {
    name: "Magma",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 1200000,
    permanent: 235000000,
    category: "Rare"
  },
  {
    name: "Quake",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 1000000,
    permanent: 270000000,
    category: "Legendary"
  },
  {
    name: "Spider",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 1200000,
    permanent: 325000000,
    category: "Legendary"
  },
  {
    name: "Love",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 1200000,
    permanent: 305000000,
    category: "Legendary"
  },
  {
    name: "Pain",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 2000000,
    permanent: 395000000,
    category: "Legendary"
  },
  {
    name: "Phoenix",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 2300000,
    permanent: 130000000,
    category: "Legendary"
  },
  {
    name: "Sound",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 2500000,
    permanent: 338000000,
    category: "Legendary"
  },
  {
    name: "Blizzard",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 5000000,
    permanent: 395000000,
    category: "Legendary"
  },
  {
    name: "Rumble",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 7000000,
    permanent: 345000000,
    category: "Legendary"
  },
  {
    name: "Portal",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 8000000,
    permanent: 205000000,
    category: "Legendary"
  },
  {
    name: "Buddha",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 8000000,
    permanent: 335000000,
    category: "Legendary"
  },
  {
    name: "Gravity",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 2000000,
    permanent: 410000000,
    category: "Mythical"
  },
  {
    name: "Shadow",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 6000000,
    permanent: 430000000,
    category: "Mythical"
  },
  {
    name: "Control",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 7100000,
    permanent: 445000000,
    category: "Mythical"
  },
  {
    name: "Venom",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 9000000,
    permanent: 430000000,
    category: "Mythical"
  },
  {
    name: "Spirit",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 10000000,
    permanent: 455000000,
    category: "Mythical"
  },
  {
    name: "Mammoth",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 12000000,
    permanent: 375000000,
    category: "Mythical"
  },
  {
    name: "T-Rex",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 20000000,
    permanent: 420000000,
    category: "Mythical"
  },
  {
    name: "Dough",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 25000000,
    permanent: 450000000,
    category: "Mythical"
  },
  {
    name: "Leopard",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 50000000,
    permanent: 530000000,
    category: "Mythical"
  },
  {
    name: "Gas",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 85000000,
    permanent: 505000000,
    category: "Mythical"
  },
  {
    name: "Kitsune",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 130000000,
    permanent: 720000000,
    category: "Mythical"
  },
  {
    name: "East Dragon",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 373000000,
    permanent: 900000000,
    category: "Mythical"
  },
  {
    name: "West Dragon",
    image: "/lovable-uploads/8a895c42-ebb6-4e71-ac1b-d1f6e9961ba0.png",
    physical: 373000000,
    permanent: 900000000,
    category: "Mythical"
  }
  ];
};

export const fruits = parseFruitsConfig();
