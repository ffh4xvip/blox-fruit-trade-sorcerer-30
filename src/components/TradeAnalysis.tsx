import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, MinusCircle } from "lucide-react";

interface TradeAnalysisProps {
  yourTotal: number;
  theirTotal: number;
}

export const TradeAnalysis = ({ yourTotal, theirTotal }: TradeAnalysisProps) => {
  if (yourTotal === 0 || theirTotal === 0) return null;

  const difference = ((theirTotal - yourTotal) / yourTotal) * 100;
  const isUnderpaying = difference > 0;
  const isFair = Math.abs(difference) < 5; // Consider trades within 5% difference as fair

  const getAnalysis = () => {
    if (isFair) {
      return {
        text: "Fair Trade",
        icon: MinusCircle,
        className: "bg-blue-500/20 text-blue-400",
      };
    }
    if (isUnderpaying) {
      return {
        text: `${Math.min(Math.abs(difference), 100).toFixed(1)}% Underpaying`,
        icon: TrendingDown,
        className: "bg-green-500/20 text-green-400",
      };
    }
    return {
      text: `${Math.min(Math.abs(difference), 100).toFixed(1)}% Overpaying`,
      icon: TrendingUp,
      className: "bg-red-500/20 text-red-400",
    };
  };

  const analysis = getAnalysis();
  const Icon = analysis.icon;

  return (
    <div className="w-full p-4 rounded-lg bg-blox-panel space-y-2">
      <h2 className="text-xl font-semibold">Trade Analysis</h2>
      <div
        className={cn(
          "p-3 rounded-md text-lg font-medium flex items-center gap-2",
          analysis.className
        )}
      >
        <Icon className="w-5 h-5" />
        {analysis.text}
      </div>
    </div>
  );
};