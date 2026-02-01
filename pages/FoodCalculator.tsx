
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
      <PageMeta 
        title="강아지 사료량 계산기 | 하루 권장 급여량 및 칼로리 공식 가이드" 
        description="우리 강아지 사료 얼마나 줄까요? 활동량과 몸무게를 반영한 정밀 사료 급여량 계산기 및 건강한 식습관을 위한 수의학 가이드." 
      />
      <div className="w-full max-w-2xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Feeding Guide</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">사료량 계산기</h1>
            <p className="text-gray-500 font-medium">먹는 것이 곧 건강입니다. 과학적으로 계산하세요.</p>
          </div>

          <form onSubmit={calculateFood} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">강아지 현재 체중 (kg)</label>
                <input type="number" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="예: 5.5" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">사료 100g당 칼로리 (kcal)</label>
                <input type="number" value={kibbleCalories} onChange={(e) => setKibbleCalories(e.target.value)} placeholder="사료 포장지 확인" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">우리 강아지의 활동량</label>
              <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer">
                <option value="low">낮음 (노령견, 비만 관리, 적은 산책)</option>
                <option value="normal">보통 (일 1-2회 정기 산책)</option>
                <option value="high">높음 (에너지 넘치는 활동견, 운동견)</option>
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
                <p>💡 <strong>팁:</strong> 종이컵 가득은 보통 80~90g 정도입니다.</p>
                <p className="mt-1">하루 2~3회 나누어 주시면 소화에 더 좋습니다.</p>
              </div>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        {/* 1,500자 이상의 SEO 전문 콘텐츠 */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-green max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-green-500 pl-4 mb-8">사료 포장지 권장량만 믿으시나요? 과학적 계산이 필요한 이유</h2>
            
            <p>많은 보호자들이 사료 포장지 뒷면에 적힌 '권장 급여표'를 절대적인 기준으로 삼습니다. 하지만 이는 수천 마리의 평균치를 나타낸 수치일 뿐, 우리 집 강아지의 독특한 대사 상태를 반영하지 못합니다. **사료량 계산기**를 통해 도출되는 RER(기초대사량)과 DER(일일 필요 에너지)을 이해하는 것은 반려견 건강 수명을 늘리는 가장 과학적인 접근법입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. RER과 DER: 수의사들이 급여량을 정하는 공식</h3>
            <p>수의학적으로 가장 신뢰받는 공식은 **RER(Resting Energy Requirement)** 기반 방식입니다. 이는 강아지가 잠만 자도 숨을 쉬고 심장이 뛰기 위해 소모되는 최소 에너지를 의미합니다. 공식은 `70 * (체중)^0.75`입니다. 하지만 실제 생활에서는 걷고, 뛰고, 추위에 견디는 데 추가 에너지가 필요하죠. 여기에 활동 계수를 곱한 것이 바로 **DER(Daily Energy Requirement)**입니다.</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>중성화된 성견:</strong> RER x 1.6</li>
              <li><strong>중성화하지 않은 성견:</strong> RER x 1.8</li>
              <li><strong>비만 경향이 있는 성견:</strong> RER x 1.2 - 1.4</li>
              <li><strong>한창 성장 중인 퍼피:</strong> RER x 2.0 - 3.0</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. 사료량 계산 시 주의해야 할 환경적 변수</h3>
            <p>단순히 몸무게와 활동량만으로는 부족할 때가 있습니다. 계절에 따른 변화도 고려해야 합니다. 겨울철에는 체온 유지를 위해 에너지를 더 많이 소모하므로 급여량을 5~10% 늘리는 것이 좋고, 여름철에는 활동량이 줄어드는 경향이 있어 주의가 필요합니다. 또한, 임신이나 수유 중인 강아지는 평소보다 2~4배 이상의 폭발적인 에너지가 필요하므로 이 시기에는 계산기 결과값보다 넉넉히 급여해야 합니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 변 상태로 확인하는 급여량의 적절성</h3>
            <div className="bg-green-50 p-8 rounded-3xl border border-green-100 my-8">
              <h4 className="font-black text-green-800 mb-4">💩 똥의 상태가 말해주는 건강 신호</h4>
              <p>계산기가 알려준 양을 급여한 후, 반드시 2~3일간 대변의 상태를 관찰하세요.</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>너무 무르고 질척한 변:</strong> 급여량이 많을 때 나타나는 대표적 신호입니다. 양을 조금 줄여주세요.</li>
                <li><strong>딱딱하고 토끼똥 같은 변:</strong> 급여량이 부족하거나 수분 섭취가 부족할 때 발생합니다.</li>
                <li><strong>매끄럽고 휴지로 집었을 때 자국이 남지 않는 변:</strong> 가장 이상적인 급여 상태입니다.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. 사료 변경 시의 '7일 법칙'</h3>
            <p>새로운 사료로 바꿀 때 갑자기 양을 바꾸면 위장 장애를 일으킬 수 있습니다. 첫 1-2일은 기존 사료 75% + 새 사료 25%, 3-4일은 50:50, 5-6일은 25:75 비율로 섞어 급여하며 서서히 적응시켜야 합니다. 이때 사료마다 칼로리 밀도가 다르므로, 반드시 '사료량 계산기'에 새 사료의 칼로리 정보를 입력하여 정확한 g(그램) 수를 다시 확인하시기 바랍니다.</p>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default FoodCalculator;
