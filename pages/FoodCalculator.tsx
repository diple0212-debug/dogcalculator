
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', description);
  return null;
};

const breeds = [
  { name: '품종 선택 (선택 사항)', weight: '' },
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

const FoodCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('normal');
  const [kibbleCalories, setKibbleCalories] = useState<string>('350');
  const [result, setResult] = useState<number | null>(null);

  const calculateFood = (e: React.FormEvent) => {
    e.preventDefault();
    const dogWeight = parseFloat(weight);
    const calPer100g = parseFloat(kibbleCalories);

    if (isNaN(dogWeight) || isNaN(calPer100g) || dogWeight <= 0 || calPer100g <= 0) return;

    // RER = 70 * (weight ^ 0.75)
    const rer = 70 * Math.pow(dogWeight, 0.75);
    
    // DER multipliers
    const multipliers: Record<string, number> = {
      low: 1.2,
      normal: 1.6,
      high: 2.0
    };
    
    const der = rer * multipliers[activityLevel];
    const dailyIntake = (der / calPer100g) * 100;
    setResult(Math.round(dailyIntake));
  };

  return (
    <>
      <PageMeta title="강아지 사료량 계산기 | 하루 권장 급여량 및 칼로리 가이드" description="우리 강아지 사료, 얼마나 줘야 할까요? 몸무게와 활동량에 따른 일일 에너지 요구량(DER)을 계산하고 정확한 사료 급여량을 알아보세요." />
      <div className="w-full max-w-2xl mx-auto space-y-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase">Food Intake</span>
            <h1 className="text-3xl font-black text-gray-800 mt-4">사료량 계산기</h1>
          </div>

          <form onSubmit={calculateFood} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600">강아지 체중 (kg)</label>
                <input type="number" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="예: 6.5" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600">사료 100g당 칼로리 (kcal)</label>
                <input type="number" value={kibbleCalories} onChange={(e) => setKibbleCalories(e.target.value)} placeholder="사료 뒷면 확인" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600">활동량 수준</label>
              <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400">
                <option value="low">낮음 (비활동적, 노령견, 비만)</option>
                <option value="normal">보통 (일일 1-2회 산책)</option>
                <option value="high">높음 (활동적인 성견, 사역견)</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl">
              권장 급여량 확인하기
            </button>
          </form>

          {result && (
            <div className="mt-10 p-8 bg-orange-50 rounded-3xl border-2 border-orange-200 text-center">
              <p className="text-gray-600 font-bold mb-2 font-medium">우리 아이의 하루 권장 사료량은</p>
              <h2 className="text-5xl font-black text-orange-600 mb-2">약 {result}g</h2>
              <p className="text-sm text-gray-500 mt-4">※ 한 번에 급여하지 마시고, 아침/저녁 2~3회에 나누어 급여하세요.</p>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        <section className="space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6">급여량 계산의 과학: DER이란?</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>반려견의 하루 필요 에너지는 단순히 몸무게로만 결정되지 않습니다. 본 계산기는 다음의 수의학 공식을 기반으로 합니다:</p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 font-mono text-sm">
                1. RER(휴식기 대사량) = 70 × (체중)^0.75<br/>
                2. DER(일일 필요 에너지) = RER × 활동 지수
              </div>
              <p>같은 몸무게라도 활동량이 많은 강아지는 더 많은 에너지가 필요하며, 중성화 여부에 따라서도 약 10-20%의 에너지 요구량 차이가 발생할 수 있습니다.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6">올바른 급여를 위한 3가지 원칙</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-3xl">⚖️</div>
                <h3 className="font-bold text-gray-800">계량컵 대신 저울</h3>
                <p className="text-xs text-gray-500">사료 알갱이 크기에 따라 부피가 달라지므로 저울을 사용하는 것이 가장 정확합니다.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🍎</div>
                <h3 className="font-bold text-gray-800">간식은 10% 이내</h3>
                <p className="text-xs text-gray-500">하루 전체 칼로리의 10% 이상을 간식으로 채우면 영양 불균형이 올 수 있습니다.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🚰</div>
                <h3 className="font-bold text-gray-800">충분한 음수량</h3>
                <p className="text-xs text-gray-500">건사료는 수분이 적어 항상 신선한 물을 함께 제공해야 결석 등을 예방할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default FoodCalculator;
