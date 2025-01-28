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
          "flex items-center justify-center w-full h-full min-h-[200px] rounded-lg bg-blox-panel border border-white/10 transition-all hover:bg-white/10",
          className
        )}
      >
        <span className="text-4xl text-white/40">+</span>
      </button>
    );
  }

  return (
    <div className={cn("rounded-lg overflow-hidden bg-blox-panel group relative", className)}>
      <div className="bg-blox-card-header p-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-xl">${price?.toLocaleString()}</span>
      </div>
      
      {/* Close button that appears on hover */}
      <button
        onClick={onRemove}
        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-8 h-8 text-white/80 hover:text-white" />
      </button>
      
      <div className="p-4 space-y-4">
        {image && (
          <img src={image} alt={name} className="w-full h-32 object-cover rounded-md" />
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/60">Physical</span>
          <Switch checked={!isPhysical} onCheckedChange={onToggle} />
          <span className="text-sm text-white/60">Permanent</span>
        </div>
      </div>
    </div>
  );
};