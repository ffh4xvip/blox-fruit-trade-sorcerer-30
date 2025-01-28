import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface FruitCardProps {
  name?: string;
  image?: string;
  price?: number;
  permanent?: number;
  isPhysical?: boolean;
  onToggle?: (checked: boolean) => void;
  onClick?: () => void;
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
  className,
}: FruitCardProps) => {
  if (!name && !image) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-center w-full h-full min-h-[200px] rounded-lg glass transition-all hover:bg-white/10",
          className
        )}
      >
        <span className="text-4xl text-white/40">+</span>
      </button>
    );
  }

  return (
    <div className={cn("rounded-lg glass p-4 space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-xl text-green-400">${price?.toLocaleString()}</span>
      </div>
      {image && (
        <img src={image} alt={name} className="w-full h-32 object-cover rounded-md" />
      )}
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/60">Physical</span>
        <Switch checked={!isPhysical} onCheckedChange={onToggle} />
        <span className="text-sm text-white/60">Permanent</span>
      </div>
    </div>
  );
};