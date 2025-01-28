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
          "flex items-center justify-center w-full aspect-square rounded-lg bg-blox-panel border border-white/10 transition-all hover:bg-white/10",
          className
        )}
      >
        <span className="text-4xl text-white/40">+</span>
      </button>
    );
  }

  return (
    <div className={cn(
      "rounded-lg overflow-hidden bg-blox-panel group relative aspect-square",
      className
    )}>
      <div className="bg-[#221F26] p-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold truncate mr-2">{name}</h3>
        <span className="text-xl whitespace-nowrap">${price?.toLocaleString()}</span>
      </div>
      
      <div className="p-4 space-y-4 h-[calc(100%-3rem)] flex flex-col">
        {image && (
          <div className="flex-1 min-h-0 relative group">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
            {/* Close button that appears on hover, only in image area */}
            <button
              onClick={onRemove}
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-8 h-8 text-white/80 hover:text-white" />
            </button>
          </div>
        )}
        <div className="flex items-center justify-between bg-[#403E43] p-2 rounded-lg">
          <span className="text-sm text-white/90">Physical</span>
          <Switch 
            checked={!isPhysical} 
            onCheckedChange={onToggle}
            className="data-[state=checked]:bg-blox-accent"
          />
          <span className="text-sm text-white/90">Permanent</span>
        </div>
      </div>
    </div>
  );
};