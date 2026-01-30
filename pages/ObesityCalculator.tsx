
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

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">우리 강아지, 몸무게보다 '체형(BCS)'이 더 중요한 이유</h2>
            <div className="prose prose-orange text-gray-600 leading-loose space-y-6">
              <p>반려견의 건강 상태를 확인하는 데 있어 단순 몸무게보다 중요한 것은 <strong>BCS(Body Condition Score)</strong>입니다. 사람과 달리 강아지는 견종마다 골격과 근육량이 다르기 때문에 절대적인 수치보다는 육안과 촉진을 통한 체형 평가가 훨씬 정확합니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">BCS 1~3: 저체중</h4>
                  <p className="text-xs">갈비뼈가 너무 뚜렷하게 보이고 지방이 거의 없는 상태입니다. 단백질 섭취를 늘리고 영양 보충에 각별히 신경 써야 하는 시기입니다.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">BCS 4~5: 이상적</h4>
                  <p className="text-xs">위에서 보았을 때 허리 라인이 매끄럽고, 만졌을 때 얇은 지방층 아래로 갈비뼈가 느껴지는 가장 건강한 골든 타임입니다.</p>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">BCS 6~9: 비만</h4>
                  <p className="text-xs">비만은 강아지의 관절염, 당뇨, 심혈관 질환의 직접적인 원인이 됩니다. 특히 슬개골 탈구가 잦은 소형견에게 비만은 치명적입니다.</p>
                </div>
              </div>

              <p className="bg-gray-50 p-5 rounded-2xl border border-gray-200 italic text-sm">
                💡 <strong>집사의 팁:</strong> 현재 점수가 6점 이상이라면 간식을 과감히 줄이고 활동량을 서서히 늘려주는 건강한 다이어트가 필요합니다. 사랑하는 마음을 '간식'이 아닌 '산책'으로 표현해 주세요!
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
