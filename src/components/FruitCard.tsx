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
  isFirstCard?: boolean;
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
  isFirstCard = false,
}: FruitCardProps) => {
  if (!name && !image) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-center w-full aspect-square rounded-lg bg-blox-panel transition-all hover:bg-opacity-90",
          isFirstCard && "bg-[#FF4545]",
          className
        )}
      >
        <span className="text-4xl text-white">+</span>
      </button>
    );
  }

  const displayValue = isPhysical ? price : permanent;

  return (
    <div className={cn(
      "rounded-lg overflow-hidden bg-blox-panel group relative aspect-square",
      isFirstCard && "bg-[#FF4545]",
      className
    )}>
      {/* Top bar with name and value */}
      <div className="flex items-center justify-between p-3 bg-blox-background">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm font-bold text-white">
          ${displayValue?.toLocaleString()}
        </span>
      </div>
      
      {/* Image area with centered close button */}
      <div className="relative p-4">
        {image && (
          <div className="relative aspect-square">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
            {onRemove && (
              <button 
                onClick={onRemove} 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Bottom toggle area */}
      <div className="p-3 bg-blox-background">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/80">{isPhysical ? 'Physical' : 'Permanent'}</span>
          <Switch 
            checked={!isPhysical} 
            onCheckedChange={onToggle}
            className="data-[state=checked]:bg-[#FF4545] bg-gray-600"
          />
        </div>
      </div>
    </div>
  );
};