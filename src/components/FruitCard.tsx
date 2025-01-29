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
          "flex items-center justify-center w-full aspect-square rounded-lg bg-blox-panel transition-all hover:bg-opacity-90",
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
      "rounded-lg overflow-hidden bg-blox-panel group relative aspect-square flex flex-col",
      className
    )}>
      {/* Top bar with name and value */}
      <div className="flex items-center justify-between p-3 bg-green-600/20">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm font-bold text-white">
          ${displayValue?.toLocaleString()}
        </span>
      </div>
      
      {/* Image area with centered close button */}
      <div className="relative flex-grow p-4 flex items-center justify-center">
        {image && (
          <div className="relative w-[40%] h-[40%] sm:w-[50%] sm:h-[50%] flex items-center justify-center">
            <img src={image} alt={name} className="w-full h-full object-contain" />
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
      <div className="p-3 bg-red-600/20 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-white/80">
            {isPhysical ? 'Physical' : 'Permanent'}
          </span>
          <Switch 
            checked={!isPhysical} 
            onCheckedChange={onToggle}
            className="data-[state=checked]:bg-blox-panel bg-gray-600"
          />
        </div>
      </div>
    </div>
  );
};