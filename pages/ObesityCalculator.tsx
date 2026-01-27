
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
      setResult({ status: '과체중 (Overweight)', message: `이상 체중보다 ${overweightPercentage.toFixed(1)}% 무겁습니다. 간식을 줄이고 산책 시간을 15분 더 늘려보세요.`, color: 'yellow' });
    } else {
      setResult({ status: '비만 (Obese)', message: `위험 단계입니다! 이상 체중을 ${overweightPercentage.toFixed(1)}% 초과했습니다. 관절염과 당뇨 위험이 있으니 즉시 다이어트가 필요합니다.`, color: 'red' });
    }
  };

  return (
    <>
      <PageMeta title="강아지 비만도 계산기 | 우리 강아지 몸무게 비만일까? BCS 체크" description="우리 강아지 몸무게가 정상일까요? 품종별 평균 체중과 비교하여 강아지 비만도를 계산하고, 수의학적 BCS 단계별 다이어트 가이드를 확인하세요." />
      <div className="w-full max-w-2xl mx-auto space-y-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Weight Management</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">강아지 비만도 계산기</h1>
            <p className="text-gray-500">체중 관리는 강아지 수명 연장의 핵심입니다.</p>
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

        {/* --- 정보성 텍스트 강화 섹션 (1,500자 이상 타겟) --- */}
        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">강아지 비만, 단순한 '귀여움'이 아닌 '질병'입니다</h2>
            <div className="prose prose-orange text-gray-600 leading-loose space-y-6">
              <p>반려견의 통통한 모습이 귀여워 보일 수 있지만, 수의학적으로 비만은 전신적인 염증 상태를 유발하는 심각한 질병입니다. 전 세계 반려견의 약 50% 이상이 과체중 혹은 비만 상태로 추정되며, 이는 반려견의 삶의 질을 떨어뜨리는 가장 큰 원인 중 하나입니다.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8">비만이 유발하는 주요 합병증</h3>
              <ul className="list-none space-y-4 p-0">
                <li className="flex gap-4 items-start">
                  <span className="bg-red-100 text-red-600 p-2 rounded-lg font-bold text-sm">01</span>
                  <div>
                    <strong className="text-gray-800">관절 및 골격계 질환:</strong>
                    <p className="text-sm mt-1">과도한 체중은 슬개골 탈구, 고관절 이형성증, 십자인대 파열의 위험을 극도로 높입니다. 특히 노령견의 경우 관절염 통증으로 인해 활동량이 줄어들고, 이것이 다시 비만으로 이어지는 악순환이 발생합니다.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="bg-red-100 text-red-600 p-2 rounded-lg font-bold text-sm">02</span>
                  <div>
                    <strong className="text-gray-800">심혈관계 및 호흡기 부담:</strong>
                    <p className="text-sm mt-1">지방 조직은 심장에 더 많은 혈액 공급을 요구하며, 가슴 주위의 지방층은 폐의 확장을 방해합니다. 이는 기관지 협착증이 있는 소형견들에게 치명적인 호흡 곤란을 유발할 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="bg-red-100 text-red-600 p-2 rounded-lg font-bold text-sm">03</span>
                  <div>
                    <strong className="text-gray-800">대사 질환 및 당뇨병:</strong>
                    <p className="text-sm mt-1">비만은 인슐린 저항성을 높여 당뇨병을 유발합니다. 또한 췌장염의 주요 발병 원인이 되며, 한 번 발병하면 평생 엄격한 식단 관리가 필요하게 됩니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">수의사가 사용하는 BCS(Body Condition Score) 9단계 완벽 가이드</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">단순히 체중계의 숫자만 보는 것이 아니라, 강아지의 체형을 눈으로 보고 손으로 만져서 평가하는 지표입니다. 보통 1~9점 척도를 사용하며, 4~5점이 가장 이상적입니다.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">🔹 BCS 1~3: 저체중 단계</h4>
                <p className="text-sm text-gray-600 leading-relaxed">갈비뼈와 골반뼈가 멀리서도 뚜렷하게 보입니다. 근육량이 적고 지방층이 거의 없어 앙상한 상태입니다. 영양 부족이나 기저 질환이 의심될 수 있습니다.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">🔹 BCS 4~5: 이상적 단계</h4>
                <p className="text-sm text-gray-600 leading-relaxed">갈비뼈가 눈에 보이진 않지만 손으로 만지면 쉽게 느껴집니다. 위에서 보았을 때 허리 라인(모래시계 형태)이 뚜렷하며 옆에서 보면 복부가 적절히 올라가 있습니다.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">🔹 BCS 6~7: 과체중 단계</h4>
                <p className="text-sm text-gray-600 leading-relaxed">갈비뼈 위로 지방층이 느껴져 만지기가 조금 힘들어집니다. 허리 곡선이 사라지고 일자형 몸매가 됩니다. 산책 시 쉽게 지치기 시작하는 단계입니다.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">🔹 BCS 8~9: 비만 단계</h4>
                <p className="text-sm text-gray-600 leading-relaxed">심한 지방층 때문에 갈비뼈를 만지는 것이 불가능합니다. 복부가 팽창되어 보이거나 아래로 처져 있으며, 꼬리 시작 부위에도 두꺼운 지방이 잡힙니다. 즉각적인 수의사 상담이 필요합니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">성공적인 다이어트를 위한 3단계 전략</h2>
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">1. 칼로리 제한과 '눈물 겨운 간식 금지'</h4>
                <p>가장 흔한 실패 원인은 '간식'입니다. 주식 사료량을 줄여도 보호자가 주는 과일 한 조각, 고기 한 점이 다이어트를 방해합니다. 간식을 꼭 줘야 한다면, 하루 권장 칼로리의 10% 내외로 제한하고 양배추나 오이 같은 저칼로리 채소로 대체하세요.</p>
              </div>
              <hr className="border-gray-100" />
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">2. 활동량의 점진적 증대</h4>
                <p>비만견은 관절이 약해진 상태이므로 갑자기 뛰는 운동은 위험합니다. 평소보다 5분씩 산책 시간을 늘리거나, 경사가 없는 평지 위주로 걷는 것부터 시작하세요. 수영은 관절에 무리를 주지 않으면서 칼로리 소모가 가장 높은 최고의 다이어트 운동입니다.</p>
              </div>
              <hr className="border-gray-100" />
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">3. 정기적인 체중 측정과 기록</h4>
                <p>사람과 마찬가지로 정기적으로 몸무게를 기록하는 것이 중요합니다. 일주일에 한 번 같은 시간에 몸무게를 측정하세요. 한 달에 현재 체중의 1~2% 정도만 감량하는 것을 목표로 삼는 것이 요요 현상을 방지하는 비결입니다.</p>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 italic">
                "강아지의 비만 탈출은 보호자의 의지에 달려 있습니다. 오늘부터 '사랑'을 '간식' 대신 '산책'으로 표현해 보세요."
              </p>
            </div>
          </section>
        </div>
        
        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default ObesityCalculator;
