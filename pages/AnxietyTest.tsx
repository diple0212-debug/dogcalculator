
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
        title="강아지 분리불안 테스트 | 자가 진단 및 성향별 행동 교정 가이드" 
        description="혼자 있는 우리 강아지, 불안해하지 않을까요? 10가지 문항으로 체크하는 분리불안 자가 진단과 단계별 전문가 솔루션을 확인하세요." 
      />
      <div className="max-w-3xl mx-auto space-y-12">
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100">
          <div className="text-center mb-10">
            <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Psychology AI</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">분리불안 자가 진단 테스트</h1>
            <p className="text-gray-500">우리는 잠시 떨어져도 다시 만날 수 있다는 믿음이 필요합니다.</p>
          </div>

          {!showResult ? (
            <div className="space-y-10">
              {/* 테스트 목적 섹션 */}
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h3 className="font-black text-orange-600 mb-2">🎯 이 테스트의 목적</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  분리불안은 단순한 투정이 아니라 강아지에게는 공황 상태와 같습니다. 이 테스트는 보호자가 없는 동안 아이가 느끼는 스트레스 수치를 객관적으로 파악하여, <strong>심리적 안정을 위한 맞춤형 환경을 조성</strong>해주기 위한 기초 자료로 사용됩니다. 아이의 행동을 평소 관찰한 대로 정직하게 답변해 주세요.
                </p>
              </div>

              <div className="space-y-6">
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
              </div>
              <button onClick={calculateResult} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl">
                진단 결과 확인하기
              </button>
            </div>
          ) : (
            <div className="animate-in zoom-in duration-300 space-y-8">
              <div className={`p-8 rounded-3xl text-center border-4 ${score >= 7 ? 'bg-red-50 border-red-200' : score >= 4 ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'}`}>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">진단 결과</h2>
                <div className={`text-5xl font-black mb-4 ${score >= 7 ? 'text-red-600' : score >= 4 ? 'text-yellow-600' : 'text-green-600'}`}>
                  {score >= 7 ? '심각 단계 🚨' : score >= 4 ? '주의 단계 ⚠️' : '안정 단계 ✅'}
                </div>
                
                {/* 성향별 상세 조언 파트 */}
                <div className="text-left bg-white p-6 rounded-2xl mt-6 shadow-sm">
                  <h4 className="font-black text-gray-800 mb-4">🏠 성향별 상세 솔루션</h4>
                  {score >= 7 ? (
                    <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                      <p>● <strong>즉각적 개입 필요:</strong> 현재 강아지는 혼자 있는 시간을 공포 그 자체로 느끼고 있습니다. 혼자 두는 시간을 최소화하고 전문가와의 상담이 시급합니다.</p>
                      <p>● <strong>약물 치료 고려:</strong> 불안도가 너무 높으면 교육 효과가 나타나지 않습니다. 수의사와 상담하여 항불안제 처방을 통해 뇌의 긴장도를 낮추는 것이 도움이 됩니다.</p>
                      <p>● <strong>외출 신호 제거:</strong> 옷을 입거나 차 키를 챙기는 행동만으로도 공황이 시작됩니다. 외출하지 않더라도 수시로 외출 준비를 했다가 다시 TV를 보는 등 신호의 무의미함을 알려주세요.</p>
                    </div>
                  ) : score >= 4 ? (
                    <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                      <p>● <strong>독립심 키우기:</strong> 집안에서도 보호자만 따라다니는 '그림자견' 행동을 줄여야 합니다. 방 하나를 비워두고 잠시 문을 닫았다 여는 연습부터 시작하세요.</p>
                      <p>● <strong>노즈워크 활용:</strong> 외출 5분 전에 가장 좋아하는 간식이 든 노즈워크 장난감을 주세요. '보호자가 나가는 것 = 즐거운 일이 생기는 것'으로 인식을 전환해야 합니다.</p>
                      <p>● <strong>차분한 귀가:</strong> 집에 돌아왔을 때 흥분하며 반기는 아이를 바로 안아주지 마세요. 아이가 차분해질 때까지 기다린 후 낮게 앉아 조용히 인사하세요.</p>
                    </div>
                  ) : (
                    <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                      <p>● <strong>긍정적 관계 유지:</strong> 현재 강아지는 보호자와 매우 건강한 애착 관계를 형성하고 있습니다. 혼자서도 쉴 줄 아는 멋진 강아지입니다.</p>
                      <p>● <strong>예방적 훈련:</strong> 가끔 환경이 변하면 불안이 생길 수 있으니, 매일 5분 정도는 다른 방에서 각자의 시간을 갖는 습관을 유지해 주세요.</p>
                    </div>
                  )}
                </div>
                <button onClick={() => setShowResult(false)} className="mt-8 text-sm text-gray-400 font-bold underline">테스트 다시 하기</button>
              </div>
            </div>
          )}
        </section>

        <AdPlaceholder placement="중단" />

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-red max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-red-500 pl-4 mb-8">분리불안 교정의 핵심: '기다려'가 아닌 '안심해'</h2>
            
            <p>분리불안을 겪는 강아지를 둔 보호자들은 종종 "혼내면 알까요?"라고 묻습니다. 하지만 분리불안은 잘못된 행동이 아니라 **정서적 공포**입니다. 무서워서 우는 아이를 혼내면 공포심만 가중될 뿐입니다. 교정의 핵심은 보호자가 반드시 돌아온다는 확신을 심어주고, 혼자 있는 시간을 '지루하지만 안전한 시간'으로 인식하게 만드는 것입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. 수의사들이 권장하는 '5-10-15 법칙'</h3>
            <p>분리불안 훈련은 아주 짧은 이별부터 성공 경험을 쌓아야 합니다. 현관문 밖으로 나갔다가 5초 만에 들어오기, 성공하면 10초, 그다음은 15초... 이런 식으로 강아지가 짖거나 불안해하기 직전에 돌아오는 것이 포인트입니다. 강아지에게 "잠깐 나갔다 오지만 넌 안전하고 나도 곧 돌아온다"는 사실을 뇌에 각인시키는 과정입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. 환경 풍부화: 혼자 있을 때 더 즐거운 집</h3>
            <p>강아지가 혼자 있을 때 아무것도 할 일이 없으면 불안에 더 집중하게 됩니다. 외출 시에만 제공되는 특별한 장난감(속에 맛있는 간식이 든 것)을 준비하세요. 또한 클래식 음악이나 백색 소음을 틀어 외부 복도의 소음이 차단되도록 하면 심리적 안정감을 높일 수 있습니다. '분리불안 테스트' 결과에 따라 아이의 성향에 맞는 환경을 조성해 주는 것이 무엇보다 중요합니다.</p>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 보호자의 감정도 전염됩니다</h3>
            <p>보호자가 나갈 때 미안해하며 과하게 작별 인사를 하거나, 돌아와서 너무 격하게 반기는 행동은 강아지의 불안 수치를 증폭시킵니다. 외출과 귀가는 일상적이고 무덤덤한 일이 되어야 합니다. 똑똑한 집사의 건강 가이드와 함께 아이와 보호자 모두가 편안한 반려 생활을 누리시길 응원합니다.</p>
          </div>
        </section>
        
        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default AnxietyTest;
