
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

      {/* --- 분리불안 상세 정보 (1,500자 이상 타겟) --- */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
        <article className="prose prose-orange max-w-none text-gray-600 leading-loose">
          <h2 className="text-3xl font-black text-gray-800 border-l-8 border-orange-500 pl-4 mb-8">분리불안, 왜 생기고 어떻게 고치나요?</h2>
          
          <h3 className="text-xl font-bold text-gray-800">1. 분리불안의 근본적인 원인</h3>
          <p>강아지 분리불안은 보호자와 떨어졌을 때 극심한 공포와 스트레스를 느끼는 심리적 상태를 말합니다. 이는 단순히 보호자를 좋아하는 마음을 넘어, 생존의 위협으로 인식될 때 발생합니다. 주요 원인으로는 <strong>과도한 의존성, 갑작스러운 환경 변화(이사, 입양), 과거의 유기 경험, 혹은 보호자의 불안한 심리</strong>가 강아지에게 전이되는 경우가 많습니다.</p>
          
          <h3 className="text-xl font-bold text-gray-800">2. 우리가 흔히 하는 실수: 작별 인사</h3>
          <p>보호자들이 가장 많이 하는 실수 중 하나는 외출 직전 강아지에게 "다녀올게, 미안해"라며 과하게 인사를 하는 것입니다. 이는 강아지에게 "이제 곧 큰일(이별)이 벌어질 거야"라는 신호를 주는 것과 같습니다. 외출 15분 전부터는 강아지에게 무관심한 태도를 유지하는 것이 도움이 됩니다.</p>

          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 my-8">
            <h4 className="font-black text-orange-700 mb-4">💡 행동 교정 훈련 가이드 (5-10-5 법칙)</h4>
            <ul className="space-y-3 list-none p-0">
              <li className="flex gap-2"><strong>1단계:</strong> 현관문 밖으로 나갔다가 5초 만에 들어오기 (무한 반복)</li>
              <li className="flex gap-2"><strong>2단계:</strong> 시간을 10초, 30초, 1분으로 점진적으로 늘리기</li>
              <li className="flex gap-2"><strong>3단계:</strong> 나갔다 들어왔을 때 과하게 반기지 않고 5분간 기다린 후 차분히 인사하기</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-800">3. 환경적 솔루션: 노즈워크와 백색소음</h3>
          <p>강아지의 뇌를 자극하는 노즈워크 장난감은 혼자 있는 시간을 '지루한 시간'이 아닌 '사냥하고 보상받는 시간'으로 인지하게 합니다. 또한, 보호자의 목소리가 담긴 라디오나 강아지 전용 음악(백색소음)을 틀어주어 외부 소음에 민감하게 반응하지 않도록 안정감을 주는 것도 필수적인 환경 조성 전략입니다.</p>

          <h3 className="text-xl font-bold text-gray-800">4. 전문가가 권장하는 수의학적 접근</h3>
          <p>심각한 수준의 분리불안은 강아지의 신체 건강까지 해칠 수 있습니다. 과도한 침 흘림은 탈수를 유발하고, 지속적인 스트레스 호르몬 방출은 면역력을 저하시킵니다. 만약 행동 교정만으로 차도가 없다면, 수의사와 상담하여 일시적인 항불안제 처방이나 페로몬 디퓨저(DAP) 사용을 고려해보는 것도 현명한 방법입니다.</p>
        </article>
      </section>
      
      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default AnxietyTest;
