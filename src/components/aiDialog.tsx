import { useState } from "react";
import axios from "axios";

type AiResponse = {
  ai_report: string;
  ai_success: boolean;
  breakdown: { minutes: number; gb: number; sms: number };
  percentages: { minutes: number; gb: number; sms: number };
  simple_recommendation: string;
  top_category: string | null;
  total_minutes: number;
  total_gb: number;
  total_sms: number;
};

type AiUsageModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AiUsageModal({ isOpen, setIsOpen }: AiUsageModalProps) {
  const [minutes, setMinutes] = useState("");
  const [gb, setGb] = useState("");
  const [sms, setSms] = useState("");
  const [aiResponse, setAiResponse] = useState<AiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://157.180.29.248:9005/expenses/analyze/", {
        minutes: Number(minutes),
        gb: Number(gb),
        sms: Number(sms),
      });
      setAiResponse(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] p-8 shadow-2xl overflow-y-auto flex flex-col gap-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#7A3EFF] to-[#C56FFF] bg-clip-text text-transparent">
          Анализ использования AI
        </h2>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Минуты"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none text-lg"
          />
          <input
            type="number"
            placeholder="GB"
            value={gb}
            onChange={(e) => setGb(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none text-lg"
          />
          <input
            type="number"
            placeholder="SMS"
            value={sms}
            onChange={(e) => setSms(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none text-lg"
          />
        </div>

        <button
          className="bg-gradient-to-r from-[#7A3EFF] to-[#C56FFF] text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform text-lg"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Вычисление..." : "Получить анализ AI"}
        </button>

        {/* AI Response */}
        {aiResponse && (
          <div className="bg-purple-50 rounded-2xl p-6 flex flex-col gap-4 shadow-inner">
            <h3 className="text-xl font-semibold text-purple-700">Отчет AI:</h3>
            <p className="text-gray-800 whitespace-pre-line leading-relaxed">{aiResponse.ai_report}</p>

            <h3 className="text-lg font-semibold text-purple-700 mt-4">Краткая рекомендация:</h3>
            <p className="text-gray-800">{aiResponse.simple_recommendation}</p>

            <h3 className="text-lg font-semibold text-purple-700 mt-4">Основная категория:</h3>
            <p className="text-gray-800">{aiResponse.top_category || "N/A"}</p>

            <h3 className="text-lg font-semibold text-purple-700 mt-4">Процентное распределение:</h3>
            <ul className="list-disc list-inside text-gray-800">
              <li>Минуты: {aiResponse.percentages.minutes}%</li>
              <li>GB: {aiResponse.percentages.gb}%</li>
              <li>SMS: {aiResponse.percentages.sms}%</li>
            </ul>

            <h3 className="text-lg font-semibold text-purple-700 mt-4">Использование:</h3>
            <ul className="list-disc list-inside text-gray-800">
              <li>Минуты: {aiResponse.breakdown.minutes}</li>
              <li>GB: {aiResponse.breakdown.gb}</li>
              <li>SMS: {aiResponse.breakdown.sms}</li>
            </ul>
          </div>
        )}

        <button
          className="text-gray-500 mt-4 self-end hover:underline font-medium"
          onClick={() => setIsOpen(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
