export interface Fruit {
  name: string;
  image: string;
  physical: number;
  permanent: number;
  category: string;
}

const parseFruitsConfig = (): Fruit[] => {
  // In a real application, this would read from the config file
  // For now, we'll return the data with updated image paths
  return [
    {
      name: "Rocket",
      image: "/fruits/Rocket.png",
      physical: 50000,
      permanent: 2000000,
      category: "Common"
    },
    {
      name: "Spin",
      image: "/fruits/Spin.png",
      physical: 7500,
      permanent: 1500000,
      category: "Common"
    },
    {
      name: "Blade",
      image: "/fruits/Blade.png",
      physical: 30000,
      permanent: 1500000,
      category: "Common"
    },
    {
      name: "Bomb",
      image: "/fruits/Bomb.png",
      physical: 80000,
      permanent: 1600000,
      category: "Common"
    },
    {
      name: "Smoke",
      image: "/fruits/Smoke.png",
      physical: 100000,
      permanent: 16000000,
      category: "Common"
    },
    {
      name: "Spike",
      image: "/fruits/Spike.png",
      physical: 180000,
      permanent: 14000000,
      category: "Common"
    },
    {
      name: "Spring",
      image: "/fruits/Spring.png",
      physical: 1500000,
      permanent: 60000000,
      category: "Common"
    },
    {
      name: "Flame",
      image: "/fruits/Flame.png",
      physical: 250000,
      permanent: 50000000,
      category: "Uncommon"
    },
    {
      name: "Falcon",
      image: "/fruits/Falcon.png",
      physical: 300000,
      permanent: 65000000,
      category: "Uncommon"
    },
    {
      name: "Dark",
      image: "/fruits/Dark.png",
      physical: 400000,
      permanent: 160000000,
      category: "Uncommon"
    },
    {
      name: "Sand",
      image: "/fruits/Sand.png",
      physical: 420000,
      permanent: 100000000,
      category: "Uncommon"
    },
    {
      name: "Ice",
      image: "/fruits/Ice.png",
      physical: 550000,
      permanent: 150000000,
      category: "Uncommon"
    },
    {
      name: "Diamond",
      image: "/fruits/Diamond.png",
      physical: 600000,
      permanent: 115000000,
      category: "Uncommon"
    },
    {
      name: "Rubber",
      image: "/fruits/Rubber.png",
      physical: 700000,
      permanent: 200000000,
      category: "Rare"
    },
    {
      name: "Barrier",
      image: "/fruits/Barrier.png",
      physical: 800000,
      permanent: 185000000,
      category: "Rare"
    },
    {
      name: "Ghost",
      image: "/fruits/Ghost.png",
      physical: 800000,
      permanent: 190000000,
      category: "Rare"
    },
    {
      name: "Light",
      image: "/fruits/Light.png",
      physical: 800000,
      permanent: 190000000,
      category: "Rare"
    },
    {
      name: "Magma",
      image: "/fruits/Magma.png",
      physical: 1200000,
      permanent: 235000000,
      category: "Rare"
    },
    {
      name: "Quake",
      image: "/fruits/Quake.png",
      physical: 1000000,
      permanent: 270000000,
      category: "Legendary"
    },
    {
      name: "Spider",
      image: "/fruits/Spider.png",
      physical: 1200000,
      permanent: 325000000,
      category: "Legendary"
    },
    {
      name: "Love",
      image: "/fruits/Love.png",
      physical: 1200000,
      permanent: 305000000,
      category: "Legendary"
    },
    {
      name: "Pain",
      image: "/fruits/Pain.png",
      physical: 2000000,
      permanent: 395000000,
      category: "Legendary"
    },
    {
      name: "Phoenix",
      image: "/fruits/Phoenix.png",
      physical: 2300000,
      permanent: 130000000,
      category: "Legendary"
    },
    {
      name: "Sound",
      image: "/fruits/Sound.png",
      physical: 2500000,
      permanent: 338000000,
      category: "Legendary"
    },
    {
      name: "Blizzard",
      image: "/fruits/Blizzard.png",
      physical: 5000000,
      permanent: 395000000,
      category: "Legendary"
    },
    {
      name: "Rumble",
      image: "/fruits/Rumble.png",
      physical: 7000000,
      permanent: 345000000,
      category: "Legendary"
    },
    {
      name: "Portal",
      image: "/fruits/Portal.png",
      physical: 8000000,
      permanent: 205000000,
      category: "Legendary"
    },
    {
      name: "Buddha",
      image: "/fruits/Buddha.png",
      physical: 8000000,
      permanent: 335000000,
      category: "Legendary"
    },
    {
      name: "Gravity",
      image: "/fruits/Gravity.png",
      physical: 2000000,
      permanent: 410000000,
      category: "Mythical"
    },
    {
      name: "Shadow",
      image: "/fruits/Shadow.png",
      physical: 6000000,
      permanent: 430000000,
      category: "Mythical"
    },
    {
      name: "Control",
      image: "/fruits/Control.png",
      physical: 7100000,
      permanent: 445000000,
      category: "Mythical"
    },
    {
      name: "Venom",
      image: "/fruits/Venom.png",
      physical: 9000000,
      permanent: 430000000,
      category: "Mythical"
    },
    {
      name: "Spirit",
      image: "/fruits/Spirit.png",
      physical: 10000000,
      permanent: 455000000,
      category: "Mythical"
    },
    {
      name: "Mammoth",
      image: "/fruits/Mammoth.png",
      physical: 12000000,
      permanent: 375000000,
      category: "Mythical"
    },
    {
      name: "T-Rex",
      image: "/fruits/T-Rex.png",
      physical: 20000000,
      permanent: 420000000,
      category: "Mythical"
    },
    {
      name: "Dough",
      image: "/fruits/Dough.png",
      physical: 25000000,
      permanent: 450000000,
      category: "Mythical"
    },
    {
      name: "Leopard",
      image: "/fruits/Leopard.png",
      physical: 50000000,
      permanent: 530000000,
      category: "Mythical"
    },
    {
      name: "Gas",
      image: "/fruits/Gas.png",
      physical: 85000000,
      permanent: 505000000,
      category: "Mythical"
    },
    {
      name: "Kitsune",
      image: "/fruits/Kitsune.png",
      physical: 130000000,
      permanent: 720000000,
      category: "Mythical"
    },
    {
      name: "East Dragon",
      image: "/fruits/East Dragon.png",
      physical: 373000000,
      permanent: 900000000,
      category: "Mythical"
    },
    {
      name: "West Dragon",
      image: "/fruits/West Dragon.png",
      physical: 373000000,
      permanent: 900000000,
      category: "Mythical"
    }
  ];
};

export const fruits = parseFruitsConfig();
