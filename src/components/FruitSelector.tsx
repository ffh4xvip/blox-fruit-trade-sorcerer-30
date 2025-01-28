import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { fruits } from "@/data/fruits";

interface FruitSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (fruit: any) => void;
}

export const FruitSelector = ({ open, onOpenChange, onSelect }: FruitSelectorProps) => {
  const [search, setSearch] = useState("");

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["Common", "Uncommon", "Rare", "Legendary", "Mythical"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-blox-panel border-blox-accent">
        <DialogHeader>
          <DialogTitle className="text-2xl">Select a Fruit</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <Input
            placeholder="Search fruits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-blox-background border-blox-accent"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2">
            {categories.map(category => {
              const categoryFruits = filteredFruits.filter(fruit => fruit.category === category);
              if (categoryFruits.length === 0) return null;
              
              return (
                <div key={category} className="col-span-full">
                  <h3 className="text-lg font-semibold mb-2 text-white/80">{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categoryFruits.map((fruit) => (
                      <button
                        key={fruit.name}
                        onClick={() => {
                          onSelect(fruit);
                          onOpenChange(false);
                        }}
                        className="p-4 rounded-lg bg-blox-background hover:bg-white/10 transition-all space-y-2"
                      >
                        <img src={fruit.image} alt={fruit.name} className="w-full aspect-square object-cover rounded-md" />
                        <h3 className="font-semibold truncate">{fruit.name}</h3>
                        <div className="space-y-1 text-sm">
                          <div className="bg-blue-500/20 p-1 rounded">
                            Physical: ${fruit.physical.toLocaleString()}
                          </div>
                          <div className="bg-purple-500/20 p-1 rounded">
                            Permanent: ${fruit.permanent.toLocaleString()}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};