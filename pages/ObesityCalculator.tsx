
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', description);
  return null;
};

const breeds = [
  { name: '품종 선택 (권장 체중 자동 입력)', weight: '' },
  { name: '말티즈', weight: '2.5' }, { name: '말티푸', weight: '4.5' },
  { name: '비숑 프리제', weight: '5.5' }, { name: '포메라니안', weight: '2.2' },
  { name: '토이 푸들', weight: '2.5' }, { name: '시츄', weight: '5.5' },
  { name: '요크셔테리어', weight: '2.8' }, { name: '치와와', weight: '2.2' },
  { name: '닥스훈트', weight: '10.5' }, { name: '퍼그', weight: '7' },
  { name: '프렌치 불독', weight: '11' }, { name: '미니어처 푸들', weight: '6.5' },
  { name: '비글', weight: '10' }, { name: '웰시코기', weight: '12' },
  { name: '시바견', weight: '10' }, { name: '보더콜리', weight: '17' },
  { name: '진돗개', weight: '19' }, { name: '시베리안 허스키', weight: '21.5' },
  { name: '골든 리트리버', weight: '28.5' }, { name: '래브라도 리트리버', weight: '30.5' },
  { name: '사모예드', weight: '22.5' }, { name: '저먼 셰퍼드', weight: '31' },
];

const ObesityCalculator: React.FC = () => {
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [idealWeight, setIdealWeight] = useState<string>('');
  const [selectedBreed, setSelectedBreed] = useState<string>(breeds[0].name);
  const [result, setResult] = useState<{ status: string; message: string; color: 'green' | 'yellow' | 'red' } | null>(null);

  const calculateObesity = (e: React.FormEvent) => {
    e.preventDefault();
    const current = parseFloat(currentWeight);
    const ideal = parseFloat(idealWeight);

    if (isNaN(current) || isNaN(ideal) || current <= 0 || ideal <= 0) {
      setResult({ status: '오류', message: '정확한 몸무게를 입력해주세요.', color: 'red' });
      return;
    }

    const overweightPercentage = ((current - ideal) / ideal) * 100;
    if (overweightPercentage < 10) {
      setResult({ status: '정상 (Healthy)', message: '이상적인 체중입니다! 현재 영양 상태를 잘 유지해주세요.', color: 'green' });
    } else if (overweightPercentage <= 20) {
      setResult({ status: '과체중 (Overweight)', message: `이상 체중보다 ${overweightPercentage.toFixed(1)}% 무겁습니다. 간식을 줄이고 활동량을 늘려주세요.`, color: 'yellow' });
    } else {
      setResult({ status: '비만 (Obese)', message: `위험 단계입니다! 관절염과 당뇨, 심장 질환의 위험이 매우 높습니다. 수의사와 상담 후 다이어트를 시작하세요.`, color: 'red' });
    }
  };

  return (
    <>
      <PageMeta 
        title="강아지 비만도 계산기 | BCS 체형 평가 및 비만 관리 가이드" 
        description="강아지 몸무게 수치보다 중요한 BCS(Body Condition Score) 체크! 우리 아이 비만도를 정확히 계산하고 수의학적 다이어트 플랜을 세워보세요." 
      />
      <div className="w-full max-w-2xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Body Condition AI</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">강아지 비만도 계산기</h1>
            <p className="text-gray-500 font-medium">단순 몸무게가 아닌 '체형'이 건강의 척도입니다.</p>
          </div>

          <form onSubmit={calculateObesity} className="space-y-6">
            <div className="space-y-4">
              <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100">
                <label className="text-sm font-bold text-gray-700 mb-2 block">우리 강아지 품종</label>
                <select value={selectedBreed} onChange={(e) => {
                  setSelectedBreed(e.target.value);
                  const breed = breeds.find(b => b.name === e.target.value);
                  if (breed) setIdealWeight(breed.weight);
                }} className="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 transition-all cursor-pointer">
                  {breeds.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">현재 몸무게 (kg)</label>
                  <input type="number" step="0.1" value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} placeholder="예: 6.5" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">목표(이상) 몸무게 (kg)</label>
                  <input type="number" step="0.1" value={idealWeight} onChange={(e) => setIdealWeight(e.target.value)} placeholder="직접 수정 가능" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl active:scale-95">
              비만도 체크하기
            </button>
          </form>

          {result && (
            <div className={`mt-8 p-8 rounded-3xl border-2 text-center animate-in fade-in zoom-in duration-300 ${
              result.color === 'green' ? 'bg-green-50 border-green-200' :
              result.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'
            }`}>
              <h2 className={`text-3xl font-black mb-3 ${
                result.color === 'green' ? 'text-green-600' :
                result.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
              }`}>{result.status}</h2>
              <p className="text-gray-700 leading-relaxed font-semibold">{result.message}</p>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-blue max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-blue-500 pl-4 mb-8">왜 강아지 몸무게보다 BCS(Body Condition Score)가 중요한가요?</h2>
            
            <p>보통 보호자들은 "우리 강아지가 5kg인데 비만인가요?"라고 묻습니다. 하지만 같은 5kg이라도 치와와에게는 고도 비만일 수 있고, 코커 스파니엘에게는 심각한 저체중일 수 있습니다. 사람에게 BMI가 있다면 강아지에게는 **BCS(Body Condition Score)**라는 수의학적 표준 지표가 있습니다. BCS는 강아지의 갈비뼈, 허리 라인, 복부 팽창 정도를 시각적·촉각적으로 평가하여 지방 함량을 판단하는 시스템입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. 수의사가 사용하는 BCS 1~9단계 시스템</h3>
            <p>세계소동물수의사회(WSAVA)에서 권장하는 BCS 시스템은 보통 1단계부터 9단계로 나뉩니다. 이 중 4~5단계가 가장 이상적인 상태입니다.</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>BCS 1-3단계 (저체중):</strong> 갈비뼈와 골반뼈가 멀리서도 뚜렷하게 보이며, 지방이 거의 없어 근육 소실이 진행 중인 위험한 상태입니다.</li>
              <li><strong>BCS 4-5단계 (이상적):</strong> 위에서 보았을 때 허리 라인이 잘록하고, 갈비뼈를 만졌을 때 얇은 지방층 아래로 뼈가 부드럽게 느껴지는 가장 건강한 상태입니다.</li>
              <li><strong>BCS 6-7단계 (과체중):</strong> 허리 라인이 사라지고 일자가 되며, 갈비뼈를 만지기 위해 꽤 깊게 눌러야 하는 상태입니다. 다이어트가 시급한 단계입니다.</li>
              <li><strong>BCS 8-9단계 (고도 비만):</strong> 배가 아래로 처지고 목과 꼬리 기저부에 상당한 지방이 축적되어 있습니다. 갈비뼈를 만지는 것이 거의 불가능하며 각종 합병증 위험이 매우 높습니다.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. 집에서 직접 하는 '갈비뼈 촉진법'</h3>
            <p>가장 쉽고 정확한 자가 진단법은 손바닥을 사용하여 강아지의 옆구리를 만져보는 것입니다. 강아지가 서 있는 상태에서 양손으로 갈비뼈를 훑어보세요. 이때 손등의 뼈 느낌과 비슷하다면 정상, 손바닥의 두툼한 살 느낌이라면 비만, 손가락 마디의 뼈 느낌이라면 저체중으로 판단할 수 있습니다. 위에서 내려다봤을 때 어깨보다 허리 폭이 좁아야 건강한 몸매입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 비만이 반려견의 생명을 단축시키는 과학적 이유</h3>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-8">
              <h4 className="font-black text-gray-800 mb-4">🚨 비만이 유발하는 4대 질환</h4>
              <ol className="space-y-4">
                <li><strong>관절염 및 디스크:</strong> 과도한 하중은 슬개골 탈구와 척추 디스크를 악화시킵니다. 살만 빼도 통증의 50%가 감소합니다.</li>
                <li><strong>심혈관계 질환:</strong> 심장이 펌프질해야 할 혈액량이 늘어나 심비대증과 고혈압을 유발합니다.</li>
                <li><strong>당뇨병 및 내분비 장애:</strong> 체지방은 인슐린 저항성을 높여 췌장에 무리를 주고 당뇨병을 일으키는 주범입니다.</li>
                <li><strong>호흡기 압박:</strong> 목 주변의 지방은 기도를 압박하여 '거위 소리' 같은 기침이나 호흡 곤란을 유발합니다.</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. 요요 없는 다이어트를 위한 집사의 습관</h3>
            <p>갑작스러운 사료 절식은 간 손상을 일으킬 수 있습니다. 현재 급여량에서 10%씩 서서히 줄여나가며, 칼로리는 낮고 포만감은 높은 양배추나 오이 같은 야채 간식을 활용하세요. 무엇보다 '비만도 계산기'로 매주 변화를 기록하며 우리 아이의 건강한 20살을 위해 노력하는 자세가 중요합니다.</p>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default ObesityCalculator;
