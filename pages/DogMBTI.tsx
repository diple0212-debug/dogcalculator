
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
  { id: 'E', q: "처음 보는 사람이나 강아지에게 먼저 다가가서 인사를 하나요?", a: "매우 그렇다 / 전혀 아니다" },
  { id: 'I', q: "새로운 장소에 가면 보호자 다리 뒤에 숨거나 관찰부터 하나요?", a: "매우 그렇다 / 전혀 아니다" },
  { id: 'S', q: "산책할 때 바닥의 냄새를 꼼꼼히 맡으며 현실적인 탐색을 즐기나요?", a: "매우 그렇다 / 전혀 아니다" },
  { id: 'N', q: "공 던지기 놀이처럼 움직이는 물체나 장난감에 대한 상상력이 풍부한가요?", a: "매우 그렇다 / 전혀 아니다" },
  { id: 'F', q: "보호자가 슬퍼하면 옆에 와서 위로해주듯 몸을 기대나요?", a: "매우 그렇다 / 전혀 아니다" },
  { id: 'T', q: "간식을 얻기 위해 감정 호소보다는 자신이 배운 개인기를 선보이나요?", a: "매우 그렇다 / 전혀 아니다" },
  { id: 'J', q: "밥 먹는 시간, 산책 시간이 조금만 늦어져도 정확히 요구하나요?", a: "매우 그렇다 / 전혀 아니다" },
  { id: 'P', q: "정해진 루트보다는 매번 새로운 길로 산책하는 것을 즐기나요?", a: "매우 그렇다 / 전혀 아니다" }
];

const DogMBTI: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleSelect = (id: string, value: number) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateMBTI = () => {
    if (Object.keys(answers).length < 8) {
      alert("모든 문항에 답변해주세요!");
      return;
    }
    const type = [
      answers['E'] > 5 ? 'E' : 'I',
      answers['S'] > 5 ? 'S' : 'N',
      answers['F'] > 5 ? 'F' : 'T',
      answers['J'] > 5 ? 'J' : 'P'
    ].join('');
    setResult(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const descriptions: Record<string, string> = {
    'ESFJ': '사교적인 외교관견: 모든 사람을 사랑하고 파티를 즐기는 인기쟁이입니다.',
    'INFP': '열정적인 중재견: 조용하지만 깊은 사랑을 가진 섬세한 예술가 타입입니다.',
    'ESTJ': '엄격한 관리견: 집안의 기강을 잡고 보호자를 지키는 든든한 대장님입니다.',
    'ISTP': '만능 재주꾼견: 혼자서도 장난감을 잘 가지고 노는 독립적인 탐험가입니다.',
    'ENFP': '재기발랄한 활동가견: 넘치는 호기심과 에너지로 세상 모든 것이 즐거운 아이입니다.',
    'ISFJ': '용감한 수호자견: 가족을 지키는 책임감이 강하고 매우 다정한 성격입니다.',
    'ENTP': '뜨거운 논쟁가견: 장난기가 가득하고 지능적인 방법으로 집사를 놀리는 천재견입니다.',
    'INTJ': '용의주도한 전략가견: 독립적이고 똑똑하며, 자신만의 세계가 뚜렷한 리더 타입입니다.'
  };

  return (
    <>
      <PageMeta 
        title="우리 강아지 MBTI 테스트 | 멍비티아이 정밀 분석 및 맞춤 교육 가이드" 
        description="강아지 성격도 MBTI가 있다? 8가지 문항으로 알아보는 반려견 성격 유형 검사와 성향별 맞춤 산책, 훈련법, 보호자와의 궁합 정보 제공." 
      />
      <div className="max-w-3xl mx-auto space-y-12">
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100 text-center">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Dog Personality Test</span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">우리 강아지 MBTI 테스트</h1>
          <p className="text-gray-500 mb-10 text-lg">멍비티아이(D-MBTI)로 알아보는 아이의 속마음</p>

          {!result ? (
            <div className="space-y-10 text-left">
              {questions.map((q) => (
                <div key={q.id} className="space-y-4">
                  <p className="text-lg font-bold text-gray-800">Q. {q.q}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold text-gray-400 shrink-0">아니오</span>
                    <input 
                      type="range" min="1" max="10" 
                      onChange={(e) => handleSelect(q.id, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500" 
                    />
                    <span className="text-xs font-bold text-orange-500 shrink-0">매우 그렇다</span>
                  </div>
                </div>
              ))}
              <button onClick={calculateMBTI} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl">
                결과 분석하기
              </button>
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom duration-500 space-y-8">
               <div className="inline-block px-10 py-6 bg-blue-50 border-2 border-blue-200 rounded-[3rem]">
                  <h2 className="text-gray-500 font-bold mb-2">당신의 강아지 유형은</h2>
                  <div className="text-7xl font-black text-blue-600 tracking-tighter">{result}</div>
               </div>
               <div className="p-8 bg-gray-50 rounded-3xl text-left border border-gray-100">
                  <h3 className="text-2xl font-black text-gray-800 mb-4">"{descriptions[result] || '신비로운 탐험가견: 아직 데이터가 수집 중인 독특한 성격이에요!'}"</h3>
                  <p className="text-gray-600 leading-relaxed">이 유형의 강아지는 매우 영리하며 보호자와의 정서적 교감을 최우선으로 생각합니다. 때로는 독립적인 시간이 필요할 수 있으니 아이만의 '안전한 공간'을 존중해주는 것이 중요합니다.</p>
               </div>
               <button onClick={() => setResult(null)} className="text-gray-400 font-bold underline">다시 테스트하기</button>
            </div>
          )}
        </section>

        <AdPlaceholder placement="중단" />

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-blue max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-blue-500 pl-4 mb-8">강아지 성격 유형(MBTI)이 중요한 과학적 이유</h2>
            
            <p>강아지의 성격은 타고난 유전적 기질 40%와 자라온 환경 60%로 결정됩니다. 사람의 MBTI처럼 강아지도 자극에 반응하는 방식이 제각각입니다. <strong>E(외향적)</strong> 강아지는 에너지를 발산해야 행복을 느끼고, <strong>I(내향적)</strong> 강아지는 조용한 휴식을 통해 에너지를 충전합니다. 이를 무시하고 내향적인 강아지를 매일 강아지 카페에 데려가는 것은 큰 스트레스가 될 수 있습니다.</p>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. 견종별 특징을 넘어서는 '개묘차'</h3>
            <p>흔히 "리트리버는 다 천사야" 혹은 "치와와는 다 예민해"라고 생각하기 쉽습니다. 하지만 같은 견종 내에서도 성격은 극명하게 갈립니다. 똑똑한 집사의 **D-MBTI**는 견종의 스테레오타입을 넘어 우리 아이만의 독특한 성향을 파악하도록 돕습니다. 예를 들어, 소극적인 보더콜리는 똑똑하지만 보호자의 명령보다는 눈치를 더 많이 볼 수 있고, 외향적인 퍼그는 고집이 세지만 누구와도 금방 친해지는 사교성을 보입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. 4가지 차원의 성격 이해하기</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-gray-50 rounded-xl"><strong>E / I (Energy):</strong> 외부 세계와 소통하며 에너지를 얻는가, 아니면 혼자만의 시간에서 얻는가.</div>
              <div className="p-4 bg-gray-50 rounded-xl"><strong>S / N (Perception):</strong> 현재의 냄새와 소리에 집중하는가, 아니면 놀이의 상징적 의미에 집중하는가.</div>
              <div className="p-4 bg-gray-50 rounded-xl"><strong>T / F (Decision):</strong> 보상(간식) 중심의 행동을 하는가, 보호자의 감정 중심 행동을 하는가.</div>
              <div className="p-4 bg-gray-50 rounded-xl"><strong>J / P (Lifestyle):</strong> 규칙적인 루틴을 선호하는가, 새로운 변화와 모험을 즐기는가.</div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 성향에 따른 맞춤형 산책과 놀이법</h3>
            <p><strong>N-P형(직관적 모험가)</strong> 아이들은 매일 같은 산책로에 금방 지루함을 느낍니다. 새로운 냄새를 맡을 수 있는 '노즈워크 여행'이 필수입니다. 반면 <strong>S-J형(현실적 규칙가)</strong> 아이들은 정해진 시간에 정해진 경로를 걷는 것에서 가장 큰 심리적 안정감을 얻습니다. 우리 아이의 성향을 알면 산책의 질이 180도 달라집니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. 보호자와 강아지의 'MBTI 궁합'</h3>
            <p>보호자가 외향적인데 강아지가 내향적이라면, 보호자는 강아지가 사회성이 없다고 걱정할 수 있습니다. 하지만 이는 틀린 것이 아니라 다른 것입니다. 서로의 성향을 인정할 때 진정한 교감이 시작됩니다. 똑똑한 집사가 제공하는 이 분석 결과가 여러분과 아이 사이의 오해를 풀고, 더 깊은 사랑으로 이어지는 가교가 되길 바랍니다.</p>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default DogMBTI;
