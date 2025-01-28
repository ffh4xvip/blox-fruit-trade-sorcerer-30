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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-blox-panel border-blox-accent">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2">
            {filteredFruits.map((fruit) => (
              <button
                key={fruit.name}
                onClick={() => {
                  onSelect(fruit);
                  onOpenChange(false);
                }}
                className="p-4 rounded-lg glass hover:bg-white/10 transition-all space-y-2"
              >
                <img src={fruit.image} alt={fruit.name} className="w-full h-24 object-cover rounded-md" />
                <h3 className="font-semibold">{fruit.name}</h3>
                <div className="text-sm text-white/60">
                  <p>Physical: ${fruit.physical.toLocaleString()}</p>
                  <p>Permanent: ${fruit.permanent.toLocaleString()}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};