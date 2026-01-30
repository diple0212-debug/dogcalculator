
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', description);
  return null;
};

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

    const rer = 70 * Math.pow(dogWeight, 0.75);
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
      <PageMeta title="강아지 사료량 계산기 | 하루 권장 급여량 및 칼로리 맞춤 계산" description="우리 강아지 사료 얼마나 줘야 할까요? 몸무게와 활동량에 따른 일일 권장 칼로리(DER)를 계산하고, 정확한 사료 급여량을 그램(g) 단위로 알아보세요." />
      <div className="w-full max-w-2xl mx-auto space-y-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Feeding Guide</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">사료량 계산기</h1>
            <p className="text-gray-500">정확한 급여량이 건강한 반려 생활의 시작입니다.</p>
          </div>

          <form onSubmit={calculateFood} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">강아지 현재 체중 (kg)</label>
                <input type="number" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="예: 5.5" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">사료 100g당 칼로리 (kcal)</label>
                <input type="number" value={kibbleCalories} onChange={(e) => setKibbleCalories(e.target.value)} placeholder="사료 포장지 뒷면 확인" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">우리 강아지의 활동량</label>
              <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer">
                <option value="low">낮음 (노령견, 비만 관리 중, 집순이)</option>
                <option value="normal">보통 (일 1-2회 규칙적인 산책)</option>
                <option value="high">높음 (활동량이 많은 믹스견, 운동견)</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl active:scale-95">
              권장 급여량 계산하기
            </button>
          </form>

          {result && (
            <div className="mt-10 p-8 bg-orange-50 rounded-3xl border-2 border-orange-200 text-center animate-in zoom-in duration-300">
              <p className="text-gray-600 font-bold mb-2">우리 강아지의 하루 권장 사료량</p>
              <h2 className="text-5xl font-black text-orange-600 mb-4">약 {result}g</h2>
              <div className="text-sm text-gray-500 bg-white/50 p-4 rounded-xl">
                <p>💡 <strong>팁:</strong> 종이컵 한 컵(가득)은 보통 80~90g입니다.</p>
                <p className="mt-1">하루 2~3회에 나누어 급여하는 것이 가장 좋습니다.</p>
              </div>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">정확한 급여량 계산이 반려견의 수명을 결정합니다</h2>
            <div className="prose prose-orange text-gray-600 leading-loose space-y-6">
              <p>사료 뒷면의 권장 급여량은 단순한 '평균치'일 뿐입니다. 우리 아이의 실제 활동량과 중성화 여부, 그리고 현재 체중 상태에 따라 필요한 에너지는 크게 달라질 수 있습니다.</p>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-5 rounded-2xl border-l-4 border-orange-400">
                  <h4 className="font-bold text-gray-800 mb-1">RER(기초대사량)이란?</h4>
                  <p className="text-sm">강아지가 휴식 상태에서 생존을 위해 소모하는 최소한의 에너지입니다. 본 계산기는 이 RER에 정확한 활동 계수를 곱하여 가장 과학적인 <strong>DER(일일 필요 에너지)</strong>을 산출합니다.</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-2xl border-l-4 border-blue-400">
                  <h4 className="font-bold text-gray-800 mb-1">중성화 유무의 중요성</h4>
                  <p className="text-sm">중성화를 한 강아지는 호르몬 변화로 대사율이 약 20% 낮아집니다. 일반 강아지와 같은 양을 먹으면 쉽게 살이 찔 수 있으므로 정밀한 계산이 필수적입니다.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">⚠️ 똑똑한 집사의 최종 조언</h4>
                <p className="text-sm leading-relaxed">
                  본 결과값은 가이드라인입니다. 아이의 <strong>변 상태</strong>를 꼭 확인해 주세요! <br/>
                  - 변이 너무 무르다면? 급여량을 조금 줄여보세요. <br/>
                  - 변이 너무 딱딱하다면? 급여량이 조금 부족할 수 있습니다. <br/>
                  변의 상태를 보며 우리 아이에게 최적화된 양을 찾아가는 것이 최고의 건강 관리법입니다.
                </p>
              </div>
            </div>
          </section>
        </div>
        
        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default FoodCalculator;
