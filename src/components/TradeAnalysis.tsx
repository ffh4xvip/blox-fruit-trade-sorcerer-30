interface TradeAnalysisProps {
  yourTotal: number;
  theirTotal: number;
}

export const TradeAnalysis = ({ yourTotal, theirTotal }: TradeAnalysisProps) => {
  const difference = ((theirTotal - yourTotal) / yourTotal) * 100;
  const isUnderpaying = difference > 0;

  if (yourTotal === 0 || theirTotal === 0) return null;

  return (
    <div className="w-full p-4 rounded-lg glass space-y-2">
      <h2 className="text-xl font-semibold">Trade Analysis</h2>
      <div
        className={cn(
          "p-3 rounded-md text-lg font-medium",
          isUnderpaying ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
        )}
      >
        {isUnderpaying
          ? `Underpaying by ${Math.abs(difference).toFixed(1)}%`
          : `Overpaying by ${Math.abs(difference).toFixed(1)}%`}
      </div>
    </div>
  );
};