
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

const questions = [
  "외출 준비를 하면 강아지가 안절부절못하며 따라다니나요?",
  "혼자 있을 때 가구, 문, 벽 등을 갉거나 파손한 적이 있나요?",
  "혼자 있을 때 하울링이나 짖음이 끊이지 않는다는 말을 들었나요?",
  "혼자 있을 때 평소 안 하던 배변 실수를 하나요?",
  "귀가했을 때 강아지가 너무 과하게(흥분 상태) 반기나요?",
  "보호자가 화장실만 가도 문 앞에서 기다리거나 따라오나요?",
  "혼자 있을 때 사료나 간식을 전혀 먹지 않나요?",
  "외출 후 돌아오면 강아지의 몸이 젖어(과도한 침 흘림) 있나요?",
  "보호자가 집에 있을 때도 계속해서 신체적 접촉을 요구하나요?",
  "장난감이나 노즈워크에 집중하지 못하고 보호자만 주시하나요?"
];

const AnxietyTest: React.FC = () => {
  const [answers, setAnswers] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number, value: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const yesCount = answers.filter(a => a).length;
    setScore(yesCount);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100">
        <div className="text-center mb-10">
          <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Psychology Test</span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">분리불안 자가 진단 테스트</h1>
          <p className="text-gray-500">우리 아이의 마음은 지금 안전한가요?</p>
        </div>

        {!showResult ? (
          <div className="space-y-8">
            {questions.map((q, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                <p className="text-lg font-bold text-gray-800">{idx + 1}. {q}</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleAnswer(idx, true)}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${answers[idx] ? 'bg-orange-500 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-orange-300'}`}
                  >예</button>
                  <button 
                    onClick={() => handleAnswer(idx, false)}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${!answers[idx] ? 'bg-gray-400 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300'}`}
                  >아니오</button>
                </div>
              </div>
            ))}
            <button onClick={calculateResult} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl">
              진단 결과 보기
            </button>
          </div>
        ) : (
          <div className="animate-in zoom-in duration-300 space-y-6">
            <div className={`p-8 rounded-3xl text-center border-4 ${score >= 7 ? 'bg-red-50 border-red-200' : score >= 4 ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'}`}>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">테스트 결과</h2>
              <div className="text-5xl font-black mb-4">
                {score >= 7 ? '심각 단계 🚨' : score >= 4 ? '주의 단계 ⚠️' : '안정 단계 ✅'}
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                {score >= 7 ? '강한 분리불안이 의심됩니다. 전문가의 도움이나 체계적인 교육이 즉시 필요합니다.' : 
                 score >= 4 ? '분리불안 증세가 보이기 시작합니다. 생활 습관 교정을 통해 악화를 방지해야 합니다.' : 
                 '안정적인 애착 관계를 형성하고 있습니다. 현재의 긍정적인 관계를 유지해주세요.'}
              </p>
              <button onClick={() => setShowResult(false)} className="mt-6 text-sm text-gray-400 underline">다시 테스트하기</button>
            </div>
          </div>
        )}
      </section>

      <AdPlaceholder placement="중단" />

      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">분리불안은 '기다려' 교육만으로 해결되지 않습니다</h2>
        <div className="prose prose-orange text-gray-600 leading-loose space-y-8">
          <p>테스트 결과가 높게 나왔다고 해서 자책하실 필요는 없습니다. 분리불안은 보호자에 대한 사랑이 깊어서 생기는 단순한 증상이 아니라, 혼자 있는 시간에 대한 <strong>'불안감'에서 오는 일종의 질병</strong>에 가깝습니다.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-black text-gray-800 mb-2">1. 작은 습관부터 바꾸기</h4>
              <p className="text-sm">외출 직전 가방을 챙기거나 옷을 입는 '외출 신호'에 아이들이 예민하게 반응하나요? 옷을 입고도 나가지 않고 다시 TV를 보는 등의 행동을 반복하여 외출 신호를 무뎌지게 만드는 훈련이 큰 도움이 됩니다.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-black text-gray-800 mb-2">2. 노즈워크의 마법</h4>
              <p className="text-sm">보호자가 나갈 때 가장 맛있는 간식을 노즈워크 장난감에 넣어주세요. '보호자의 외출 = 맛있는 것이 생기는 즐거운 시간'으로 뇌의 기억을 조금씩 바꿔주는 과정이 필요합니다.</p>
            </div>
          </div>

          <div className="bg-orange-500 text-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-xl font-bold mb-3">🆘 전문가의 도움이 필요한 순간</h4>
            <p className="opacity-90 text-sm leading-relaxed">
              아이의 증상이 심해 자해를 하거나, 멈추지 않는 하울링으로 이웃에게 민원이 들어오는 수준이라면 행동 교정 전문가나 수의학적 상담을 병행하는 것이 가장 빠르고 안전한 길입니다. 분리불안은 아이와 보호자 모두의 삶의 질을 위해 꼭 해결해야 하는 과제입니다.
            </p>
          </div>
        </div>
      </section>
      
      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default AnxietyTest;
