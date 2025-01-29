import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown, MinusCircle } from "lucide-react";

interface TradeAnalysisProps {
  yourTotal: number;
  theirTotal: number;
}

export const TradeAnalysis = ({ yourTotal, theirTotal }: TradeAnalysisProps) => {
  // Show analysis even if only one side has value
  if (yourTotal === 0 && theirTotal === 0) return null;

  const difference = yourTotal === 0 ? 100 : ((theirTotal - yourTotal) / yourTotal) * 100;
  const isUnderpaying = difference < 0;
  const isFair = Math.abs(difference) < 5;

  const getAnalysis = () => {
    if (isFair) {
      return {
        text: "Fair Trade",
        subtext: `${Math.abs(difference).toFixed(2)}%`,
        icon: MinusCircle,
        className: "bg-blue-500 text-white",
      };
    }
    if (isUnderpaying) {
      return {
        text: "Good Deal",
        subtext: `${Math.abs(difference).toFixed(2)}% Underpaying`,
        icon: ThumbsDown,
        className: "bg-green-500 text-white",
      };
    }
    return {
      text: "Bad Deal",
      subtext: `${difference.toFixed(2)}% Overpaying`,
      icon: ThumbsUp,
      className: "bg-red-500 text-white",
    };
  };

  const analysis = getAnalysis();
  const Icon = analysis.icon;

  return (
    <div className="w-full p-4 rounded-lg bg-[#2A2A2A] space-y-2">
      <h2 className="text-xl font-semibold text-white">Trade Analysis</h2>
      <div
        className={cn(
          "p-3 rounded-md text-lg font-medium flex items-center gap-2",
          analysis.className
        )}
      >
        <Icon className="w-5 h-5" />
        <div className="flex flex-col">
          <span>{analysis.text}</span>
          <span className="text-sm opacity-90">{analysis.subtext}</span>
        </div>
      </div>
    </div>
  );
};