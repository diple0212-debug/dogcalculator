
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import AdPlaceholder from '../components/AdPlaceholder';

const DreamInterpreter: React.FC = () => {
  const [dream, setDream] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const interpretDream = async () => {
    if (!dream.trim()) {
      alert('꿈 내용을 입력해주세요!');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `강아지와 관련된 꿈을 해석해주는 전문가로서 다음 꿈 내용을 상세하게 해석해줘. 
        해석은 최소 1000자 이상으로 아주 구체적이고 심도 있게 작성해줘. 
        꿈의 상징적 의미, 현재의 심리 상태, 앞으로의 운세나 주의할 점 등을 포함해줘.
        친절하고 따뜻한 말투로 작성해줘.
        
        꿈 내용: ${dream}`,
        config: {
          systemInstruction: "당신은 반려견과 심리학, 그리고 꿈 해몽에 정통한 전문가입니다. 사용자가 입력한 강아지 관련 꿈을 분석하여 심리적 위안과 실질적인 조언을 제공합니다.",
        }
      });

      setResult(response.text || '해석을 생성할 수 없습니다.');
    } catch (err) {
      console.error(err);
      setError('AI 해석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">
      <div className="text-center space-y-4">
        <div className="inline-block p-3 bg-purple-100 rounded-2xl text-4xl mb-2">🌙</div>
        <h1 className="text-4xl font-black text-gray-800 tracking-tight">강아지 꿈 해몽소</h1>
        <p className="text-gray-500 text-lg font-medium">어젯밤 꿈속에 나타난 강아지, 어떤 의미가 있을까요?</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-6 md:p-10 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 ml-1">꿈 내용을 자세히 적어주세요</label>
          <textarea
            value={dream}
            onChange={(e) => setDream(e.target.value)}
            placeholder="예: 하얀 강아지가 나를 보고 꼬리를 흔들며 달려와서 품에 안기는 꿈을 꿨어요."
            className="w-full h-40 p-6 bg-gray-50 border-2 border-gray-100 rounded-3xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-gray-700 leading-relaxed resize-none"
          />
        </div>

        <button
          onClick={interpretDream}
          disabled={loading}
          className={`w-full py-5 rounded-2xl font-black text-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3 ${
            loading 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>꿈을 분석하는 중...</span>
            </>
          ) : (
            <>
              <span>🔮 꿈 해몽 시작하기</span>
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 p-6 rounded-3xl text-center font-bold">
          {error}
        </div>
      )}

      {result && (
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-purple-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="bg-purple-600 p-6 text-white text-center">
            <h2 className="text-2xl font-black">신비로운 꿈의 해석</h2>
          </div>
          <div className="p-8 md:p-12 prose prose-purple max-w-none text-gray-700 leading-relaxed">
            <Markdown>{result}</Markdown>
          </div>
          <div className="p-8 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-sm mb-4">※ 꿈 해몽은 심리적인 참고 용도로만 활용해 주세요.</p>
            <button 
              onClick={() => {
                setDream('');
                setResult('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-purple-600 font-bold hover:underline"
            >
              다른 꿈 해석하기
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="text-xl font-black text-indigo-800">💡 강아지 꿈의 일반적 의미</h3>
          <p className="text-indigo-900/70 text-sm leading-relaxed">
            꿈속의 강아지는 대개 <strong>충성심, 우정, 보호, 본능</strong>을 상징합니다. 
            강아지의 색깔이나 행동, 나의 기분에 따라 길몽이 될 수도, 주의가 필요한 경고가 될 수도 있습니다.
          </p>
        </div>
        <div className="bg-amber-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="text-xl font-black text-amber-800">✨ 더 정확한 해몽을 원한다면?</h3>
          <p className="text-amber-900/70 text-sm leading-relaxed">
            강아지의 <strong>털 색깔, 크기, 장소, 그리고 꿈을 꿀 때 느꼈던 감정</strong>을 최대한 자세히 적어주시면 AI가 더욱 정교하게 분석해 드립니다.
          </p>
        </div>
      </div>

      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default DreamInterpreter;
