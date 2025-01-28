import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface FruitCardProps {
  name?: string;
  image?: string;
  price?: number;
  permanent?: number;
  isPhysical?: boolean;
  onToggle?: (checked: boolean) => void;
  onClick?: () => void;
  onRemove?: () => void;
  className?: string;
}

export const FruitCard = ({
  name,
  image,
  price,
  permanent,
  isPhysical = true,
  onToggle,
  onClick,
  onRemove,
  className,
}: FruitCardProps) => {
  if (!name && !image) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-center w-full aspect-square rounded-lg bg-[#FF4545] transition-all hover:bg-[#ff4545]/90",
          className
        )}
      >
        <span className="text-4xl text-white">+</span>
      </button>
    );
  }

  return (
    <div className={cn(
      "rounded-lg overflow-hidden bg-[#1E1E1E] group relative aspect-square",
      className
    )}>
      <div className="flex items-center justify-between p-2 bg-[#2A2A2A]">
        <div className="flex items-center gap-2">
          <Switch 
            checked={!isPhysical} 
            onCheckedChange={onToggle}
            className="data-[state=checked]:bg-[#FF4545]"
          />
          <span className="text-sm text-white/80">{isPhysical ? 'Physical' : 'Permanent'}</span>
        </div>
        {onRemove && (
          <button onClick={onRemove} className="text-white/60 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <div className="p-4 space-y-4">
        {image && (
          <div className="relative aspect-square">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="space-y-1 text-center">
          <div className="text-2xl font-bold text-white">
            ${(isPhysical ? price : permanent)?.toLocaleString()}
          </div>
          <div className="text-lg text-white/80">{name}</div>
        </div>
      </div>
    </div>
  );
};