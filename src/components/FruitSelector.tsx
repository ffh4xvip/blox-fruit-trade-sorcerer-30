import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { fruits } from "@/data/fruits";
import { X } from "lucide-react";

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
      <DialogContent className="sm:max-w-[800px] bg-[#1A1A1A] border-none p-0">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Select Item Your Has</h2>
            <button onClick={() => onOpenChange(false)} className="text-white/60 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="relative">
            <Input
              placeholder="Search trading items"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#2A2A2A] border-none text-white placeholder:text-white/40"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredFruits.map((fruit) => (
              <button
                key={fruit.name}
                onClick={() => {
                  onSelect(fruit);
                  onOpenChange(false);
                }}
                className="p-4 rounded-lg bg-[#2A2A2A] hover:bg-[#3A3A3A] transition-all space-y-2 text-center"
              >
                <img src={fruit.image} alt={fruit.name} className="w-full aspect-square object-cover rounded-md" />
                <div className="text-2xl font-bold text-white">${fruit.physical.toLocaleString()}</div>
                <div className="text-lg text-white/80">{fruit.name}</div>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};