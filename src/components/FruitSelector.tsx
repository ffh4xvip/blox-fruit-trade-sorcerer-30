import { Dialog, DialogContent } from "@/components/ui/dialog";
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
      <DialogContent className="sm:max-w-[800px] bg-blox-background border-none p-0">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Select Item</h2>
          </div>
          
          <div className="relative">
            <Input
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-blox-panel border-none text-white placeholder:text-white/40"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredFruits.map((fruit) => (
              <button
                key={fruit.name}
                onClick={() => {
                  onSelect({...fruit, image: `/fruits/${fruit.name}.png`});
                  onOpenChange(false);
                }}
                className="p-4 rounded-lg bg-blox-panel hover:bg-opacity-90 transition-all space-y-2"
              >
                <img 
                  src={`/fruits/${fruit.name}.png`}
                  alt={fruit.name} 
                  className="w-full aspect-square object-cover rounded-md"
                />
                <div className="text-lg font-bold text-white">${fruit.physical.toLocaleString()}</div>
                <div className="text-sm text-white/80">{fruit.name}</div>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};