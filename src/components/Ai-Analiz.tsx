

export default function AIAnalysisSection({ data }: { data: any }) {
    if (!data) return <div>Loading AI Analysis...</div>; // safe check

    const { ai_analysis, basic_stats } = data;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-[#7A3EFF] to-[#C56FFF] bg-clip-text text-transparent">
          AI Analysis Summary
        </h2>
        <p className="text-muted-foreground mt-1">
          Total Feedbacks: {basic_stats.total_feedbacks} | Avg text length:{" "}
          {basic_stats.avg_text_length.toFixed(1)}
        </p>
      </div>

      <div>
        <h3 className="font-semibold">Summary</h3>
        <p className="text-gray-700">{ai_analysis.summary}</p>
      </div>

      <div>
        <h3 className="font-semibold">Top Themes</h3>
        <ul className="list-disc list-inside text-gray-700">
          {ai_analysis.top_themes.map((theme, idx) => (
            <li key={idx}>
              <span className="font-semibold">{theme.theme}</span> ({theme.count}):
              {" "}{theme.examples.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      {/* Sentiment */}
      <div>
        <h3 className="font-semibold">Sentiment Analysis</h3>
        <div className="flex gap-4 mt-2">
          <div className="flex-1 bg-purple-100 rounded-xl p-2 text-center">
            Positive: {ai_analysis.sentiment_analysis.positive}%
          </div>
          <div className="flex-1 bg-red-100 rounded-xl p-2 text-center">
            Negative: {ai_analysis.sentiment_analysis.negative}%
          </div>
          <div className="flex-1 bg-gray-100 rounded-xl p-2 text-center">
            Neutral: {ai_analysis.sentiment_analysis.neutral}%
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h3 className="font-semibold">Recommendations</h3>
        <ul className="list-decimal list-inside text-gray-700">
          {ai_analysis.recommendations.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
