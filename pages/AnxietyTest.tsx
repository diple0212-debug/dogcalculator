
import React, { useState, useEffect } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
  }, [title, description]);
  return null;
};

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
    <>
      <PageMeta 
        title="강아지 분리불안 테스트 | 자가 진단 및 행동 교정 가이드" 
        description="우리 강아지, 혼자 있을 때 정말 괜찮을까요? 10가지 문항으로 체크하는 분리불안 자가 진단 테스트와 수의사가 권장하는 행동 교정 훈련법." 
      />
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

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-red max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-red-500 pl-4 mb-8">분리불안, 왜 생기는 걸까요? 전문가의 심층 분석</h2>
            
            <p>강아지 분리불안은 단순한 투정이 아닙니다. 이는 의학적으로 **'분리 관련 장애(Separation-Related Distress)'**라 불리는 정서적 공황 상태입니다. 보호자가 눈앞에서 사라졌을 때 강아지는 극도의 공포와 무력감을 느끼며, 이를 해소하기 위해 파괴적인 행동이나 과도한 짖음 등의 이상 증세를 보이게 됩니다. '분리불안 자가 진단'은 아이의 고통을 이해하는 첫걸음입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. 주요 증상과 신체적 신호</h3>
            <p>많은 보호자들이 퇴근 후 어질러진 집안을 보며 화를 내곤 하지만, 이는 강아지가 "나 너무 무서웠어요"라고 외치는 구조 신호입니다. 대표적인 증상은 다음과 같습니다.</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>탈출 시도:</strong> 문이나 창문 주변을 긁거나 파손하는 행위. 손톱이 깨지거나 피가 날 정도로 격렬하게 시도하기도 합니다.</li>
              <li><strong>부적절한 배변:</strong> 평소에 배변을 잘 가리던 아이가 보호자가 없을 때만 거실이나 침대 등에 실수를 한다면 이는 공포에 의한 자율신경계 반응입니다.</li>
              <li><strong>식욕 부진:</strong> 아무리 맛있는 간식을 주고 나가도 보호자가 돌아올 때까지 손도 대지 않는다면, 긴장도가 매우 높은 상태임을 의미합니다.</li>
              <li><strong>과도한 헥헥거림과 침 흘림:</strong> 불안하면 체온이 상승하고 스트레스 호르몬이 분비되어 침을 과하게 흘리게 됩니다.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. 분리불안의 근본적인 원인 3가지</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-2xl">
                <h4 className="font-black text-red-600 mb-2">과잉 유대감</h4>
                <p className="text-xs">집안에서도 보호자만 졸졸 따라다니는 '그림자견'의 경우, 독립심이 부족하여 짧은 분리조차 감당하기 어려워합니다.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h4 className="font-black text-orange-600 mb-2">과거의 트라우마</h4>
                <p className="text-xs">파양의 경험이 있거나, 갑작스러운 환경 변화(이사, 가족 구성원 변화)를 겪은 아이들은 다시 버려질지도 모른다는 공포를 느낍니다.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-black text-gray-600 mb-2">지루함과 에너지 과잉</h4>
                <p className="text-xs">충분한 에너지 발산이 되지 않은 상태에서 혼자 남겨지면, 남는 에너지가 불안으로 전환되어 파괴적인 행동으로 이어집니다.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 수의사가 추천하는 행동 교정: '기다려'보다 '안심해'</h3>
            <p>분리불안 훈련의 핵심은 **'보호자는 반드시 돌아온다'**는 믿음을 주는 것입니다. 이를 위해 다음과 같은 단계별 접근이 필요합니다.</p>
            <ol className="list-decimal pl-5 space-y-4">
              <li><strong>탈감각 훈련 (Desensitization):</strong> 옷을 입거나 차 키를 챙기는 등의 외출 신호를 무의미하게 만드세요. 옷을 입고 다시 TV를 보거나 설거지를 하는 식입니다.</li>
              <li><strong>짧은 이별 연습:</strong> 현관문 밖으로 나갔다 10초 만에 돌아오기를 반복하며 시간을 서서히 늘립니다. 강아지가 짖기 전에 돌아오는 것이 핵심입니다.</li>
              <li><strong>독립된 공간 만들기:</strong> 켄넬이나 전용 방석을 '가장 안전하고 보상이 따르는 곳'으로 인식시켜 보호자 없이도 쉴 수 있는 능력을 키워줍니다.</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. 약물 치료와 전문가의 도움</h3>
            <p>만약 자가 진단 결과가 '심각 단계'라면, 행동 교정만으로는 한계가 있을 수 있습니다. 이때는 수의사와 상담하여 일시적인 항불안제를 처방받는 것이 권장됩니다. 약물은 강아지를 무기력하게 만드는 것이 아니라, 뇌의 불안 수치를 낮추어 교육을 더 잘 받아들일 수 있는 '학습 가능한 상태'로 만들어주는 보조 도구입니다. 아이와 보호자 모두의 행복을 위해 전문가의 도움을 받는 것을 주저하지 마세요.</p>
          </div>
        </section>
        
        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default AnxietyTest;
