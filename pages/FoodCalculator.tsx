
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

    // RER 공식: 70 * (weight ^ 0.75)
    const rer = 70 * Math.pow(dogWeight, 0.75);
    const multipliers: Record<string, number> = {
      low: 1.2, // 비만 관리/노령견
      normal: 1.6, // 일반 성견
      high: 2.0 // 활동견/퍼피
    };
    
    const der = rer * multipliers[activityLevel];
    const dailyIntake = (der / calPer100g) * 100;
    setResult(Math.round(dailyIntake));
  };

  return (
    <>
      <PageMeta 
        title="강아지 사료량 계산기 | RER 기초대사량 기반 권장 급여량 공식" 
        description="우리 강아지 사료, 정확히 몇 g이 적당할까요? 수의사들이 사용하는 RER 및 DER 계산 공식을 통해 과학적인 사료 급여량을 산출해드립니다." 
      />
      <div className="w-full max-w-2xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Metabolism AI</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">사료량 계산기</h1>
            <p className="text-gray-500 font-medium">기초대사량을 알면 보이지 않는 건강이 보입니다.</p>
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
              <label className="text-sm font-bold text-gray-700 ml-1">우리 강아지의 활동 상태</label>
              <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer">
                <option value="low">낮음 (노령견, 비만 관리, 실내 위주)</option>
                <option value="normal">보통 (일 1-2회 정기 산책하는 성견)</option>
                <option value="high">높음 (성장기 퍼피, 운동량이 많은 활동견)</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl active:scale-95">
              과학적 급여량 계산하기
            </button>
          </form>

          {result && (
            <div className="mt-10 p-8 bg-orange-50 rounded-3xl border-2 border-orange-200 text-center animate-in zoom-in duration-300">
              <p className="text-gray-600 font-bold mb-2">우리 아이의 하루 권장 사료량</p>
              <h2 className="text-5xl font-black text-orange-600 mb-4">약 {result}g</h2>
              <div className="text-sm text-gray-500 bg-white/50 p-4 rounded-xl">
                <p>💡 <strong>전문가 조언:</strong> 종이컵 한 컵은 보통 80~90g입니다.</p>
                <p className="mt-1">정확한 저울을 사용하면 다이어트 성공 확률이 200% 높아집니다.</p>
              </div>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-green max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-green-500 pl-4 mb-8">사료량 계산의 과학: RER과 DER 공식이란 무엇인가요?</h2>
            
            <p>보통 사료 포장지에 적힌 권장량은 '평균적인 성견'을 기준으로 합니다. 하지만 우리 강아지가 잠만 자는 아이인지, 매일 2시간씩 뛰노는 아이인지에 따라 필요한 에너지는 천차만별입니다. 수의사들이 가장 신뢰하는 계산 방식은 **RER(기초대사량)**을 먼저 구한 뒤, 여기에 환경 변수인 **활동 계수**를 곱해 **DER(일일 필요 에너지)**를 도출하는 방식입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. RER(Resting Energy Requirement): 숨만 쉬어도 소모되는 에너지</h3>
            <p>RER은 강아지가 온종일 아무런 활동도 하지 않고 휴식을 취할 때, 심장을 뛰게 하고 체온을 유지하는 등 생존에 필요한 최소한의 에너지를 뜻합니다. </p>
            <div className="bg-gray-100 p-6 rounded-2xl font-mono text-center my-6">
              RER = 70 × (체중)^0.75
            </div>
            <p>이 공식에서 지수(0.75)가 사용되는 이유는 강아지의 몸무게가 2배 늘어난다고 해서 대사량이 정확히 2배 늘어나는 것이 아니기 때문입니다. 체형이 커질수록 체중당 에너지 소모율은 미세하게 감소하는 생물학적 특성을 반영한 정밀한 공식입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. DER(Daily Energy Requirement): 실제 활동을 포함한 에너지</h3>
            <p>RER이 도출되었다면 이제 강아지의 개별 상태를 반영할 차례입니다. 이를 위해 RER에 특정 상수를 곱해주는데, 이것이 바로 활동 계수입니다.</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>중성화된 성견 (1.6):</strong> 가장 일반적인 성견의 기준입니다.</li>
              <li><strong>중성화하지 않은 성견 (1.8):</strong> 호르몬 영향으로 기초대사량이 조금 더 높습니다.</li>
              <li><strong>비만 관리견 (1.0~1.2):</strong> 체중 감량을 위해 대사량보다 적거나 비슷한 에너지를 공급합니다.</li>
              <li><strong>성장기 퍼피 (2.0~3.0):</strong> 뼈와 근육이 폭발적으로 성장하는 시기이므로 훨씬 많은 에너지가 필요합니다.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 사료 g(그램) 수로 환산하는 최종 단계</h3>
            <p>필요한 일일 칼로리(DER)가 결정되었다면, 사료의 에너지 밀도(kcal/kg)로 나누어 실제 급여량을 계산합니다. 예를 들어 DER이 500kcal이고 사료 1kg당 4000kcal라면, 하루에 125g을 급여하면 됩니다. 이때 간식의 양은 전체 칼로리의 10%를 넘지 않도록 주의해야 하며, 간식을 줬다면 그만큼 사료량을 차감해야 합니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. 왜 주기적인 재계산이 필요한가요?</h3>
            <p>강아지의 신진대사는 나이, 계절, 중성화 여부에 따라 끊임없이 변화합니다. 특히 겨울철에는 체온 유지를 위해 더 많은 에너지를 쓰고, 노령기에 접어들면 근육량이 줄어 대사량이 급감합니다. '똑똑한 집사' 사료량 계산기를 즐겨찾기 해두고, 최소 한 달에 한 번은 몸무게를 재고 급여량을 재조정하는 습관을 들여보세요. 당신의 세심함이 반려견의 노후를 바꿉니다.</p>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default FoodCalculator;
