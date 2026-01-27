
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

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
    'ISTP': '만능 재주꾼견: 혼자서도 장난감을 잘 가지고 노는 독립적인 탐험가입니다.'
    // ... 다른 타입들도 유사하게 확장 가능
  };

  return (
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
        <article className="prose prose-blue max-w-none text-gray-600 leading-loose">
          <h2 className="text-3xl font-black text-gray-800 border-l-8 border-blue-500 pl-4 mb-8">강아지 성격 유형(MBTI)이 중요한 과학적 이유</h2>
          
          <h3 className="text-xl font-bold text-gray-800">1. 기질(Temperament)과 환경의 조화</h3>
          <p>강아지의 성격은 타고난 유전적 기질 40%와 자라온 환경 60%로 결정됩니다. 사람의 MBTI처럼 강아지도 자극에 반응하는 방식이 제각각입니다. <strong>E(외향적)</strong> 강아지는 에너지를 발산해야 행복을 느끼고, <strong>I(내향적)</strong> 강아지는 조용한 휴식을 통해 에너지를 충전합니다. 이를 무시하고 내향적인 강아지를 매일 강아지 카페에 데려가는 것은 큰 스트레스가 될 수 있습니다.</p>
          
          <h3 className="text-xl font-bold text-gray-800">2. 성향에 따른 맞춤형 훈련법</h3>
          <p><strong>T(논리적/행동적)</strong> 성향의 강아지는 보상이 확실할 때 최고의 학습 효과를 냅니다. "앉아"를 하면 "간식"이 나온다는 명확한 규칙을 좋아하죠. 반면 <strong>F(감정적/관계적)</strong> 성향의 강아지는 간식보다 보호자의 칭찬과 부드러운 스킨십에 더 큰 동기부여를 얻습니다. 우리 아이가 어떤 포인트에서 행복을 느끼는지 아는 것이 성공적인 훈련의 열쇠입니다.</p>

          <h3 className="text-xl font-bold text-gray-800">3. 사회성 발달의 골든타임</h3>
          <p>D-MBTI 결과에서 <strong>N(상상/직관)</strong>이나 <strong>P(자율성)</strong>가 높게 나왔다면, 아이는 호기심이 매우 많고 새로운 자극을 즐기는 타입입니다. 이런 아이들에게는 매일 같은 산책로보다는 낯선 냄새를 맡을 수 있는 다양한 장소를 경험하게 해주는 것이 지능 발달에 매우 효과적입니다. 반대로 <strong>J(계획/질서)</strong> 성향이 강하다면 정해진 일과를 지켜주는 것이 아이의 정서적 안정에 큰 도움이 됩니다.</p>

          <h3 className="text-xl font-bold text-gray-800">4. 보호자와의 궁합(Chemistry)</h3>
          <p>똑똑한 집사가 제공하는 이 테스트는 단순히 재미를 넘어, 보호자와 반려견 사이의 갈등을 해결하는 실마리를 제공합니다. 보호자는 활동적인데 강아지는 정적인 성격일 때 발생하는 오해들을 성격 유형 이해를 통해 "아, 우리 아이가 나를 싫어하는 게 아니라 성격이 차분한 거구나"라고 받아들일 수 있게 됩니다.</p>
        </article>
      </section>

      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default DogMBTI;
