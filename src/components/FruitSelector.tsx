import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useFruits } from "@/hooks/useFruits";
import { Fruit } from "@/data/types";

interface FruitSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (fruit: Fruit) => void;
}

export const FruitSelector = ({ open, onOpenChange, onSelect }: FruitSelectorProps) => {
  const [search, setSearch] = useState("");
  const { data: fruits, isLoading, error } = useFruits();

  const filteredFruits = fruits?.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  ) || [];

  const handleSelect = (fruit: any) => {
    onSelect({
      name: fruit.name,
      physical: fruit.physicalValue,
      permanent: fruit.permanentValue,
      category: fruit.category,
      image: `/fruits/${fruit.name.toLowerCase()}.png`
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-blox-background border-none p-0">
        <div className="p-6 space-y-6">
          <DialogTitle className="text-xl font-semibold text-white">Select Item</DialogTitle>
          
          <div className="relative">
            <Input
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-blox-panel border-none text-white placeholder:text-white/40"
            />
          </div>

          {isLoading && <div className="text-white">Loading...</div>}
          {error && <div className="text-red-500">Error loading fruits data</div>}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredFruits.map((fruit) => (
              <button
                key={fruit.name}
                onClick={() => handleSelect(fruit)}
                className="p-4 rounded-lg bg-blox-panel hover:bg-opacity-90 transition-all space-y-2"
              >
                <img 
                  src={`/fruits/${fruit.name.toLowerCase()}.png`}
                  alt={fruit.name} 
                  className="w-full aspect-square object-cover rounded-md"
                />
                <div className="text-lg font-bold text-white">${fruit.physicalValue.toLocaleString()}</div>
                <div className="text-sm text-white/80">{fruit.name}</div>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};