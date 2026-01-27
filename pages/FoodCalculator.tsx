
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

    // 수의학 표준 RER 공식: 70 * (체중^0.75)
    const rer = 70 * Math.pow(dogWeight, 0.75);
    
    // 활동량별 DER 가중치
    const multipliers: Record<string, number> = {
      low: 1.2,    // 비활동적, 노령견
      normal: 1.6, // 중성화 완료 성견
      high: 2.0    // 매우 활동적인 성견, 성장기
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

        {/* --- 정보성 텍스트 강화 섹션 (1,500자 이상 타겟) --- */}
        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">강아지 사료, '적당히' 주면 안 되는 이유</h2>
            <div className="prose prose-orange text-gray-600 leading-loose space-y-6">
              <p>많은 보호자분들이 사료 포장지의 뒷면에 적힌 권장 가이드를 그대로 따르거나 종이컵으로 대충 짐작해서 급여하곤 합니다. 하지만 강아지마다 대사 효율과 활동량이 다르기 때문에 잘못된 급여량은 비만이나 영양 부족의 직접적인 원인이 됩니다.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8">급여량 결정의 두 가지 핵심 지표</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">RER (Resting Energy Requirement)</h4>
                  <p className="text-sm">휴식기 대사량으로, 강아지가 아무것도 하지 않고 숨만 쉬고 있을 때 소비되는 최소한의 에너지입니다. 기초 대사량과 유사한 개념입니다.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-2">DER (Daily Energy Requirement)</h4>
                  <p className="text-sm">일일 필요 에너지량으로, RER에 활동 지수(나이, 중성화 여부, 활동량)를 곱해 실제로 하루 동안 필요한 총 칼로리를 의미합니다.</p>
                </div>
              </div>
              <p>똑똑한 집사의 계산기는 최신 수의학적 권장 공식을 사용하여, 아이의 현재 상태에 가장 최적화된 DER을 산출하고 이를 사료 무게로 변환해 드립니다.</p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">좋은 사료를 고르는 '똑똑한' 방법</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">비싼 사료가 무조건 좋은 사료는 아닙니다. 사료 뒷면의 영양 성분표와 원료 리스트를 읽는 법을 알아야 합니다.</p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-800">제1원료 확인 (주단백질원)</h4>
                  <p className="text-sm text-gray-500 mt-1">'육분(Meat meal)'이나 '부산물' 보다는 '생닭고기', '연어', '양고기' 처럼 특정 단일 단백질원이 명확히 기재된 것이 좋습니다.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-800">조단백질과 조지방 함량</h4>
                  <p className="text-sm text-gray-500 mt-1">성견 기준 조단백질 18% 이상, 조지방 5% 이상이 법적 기준이지만, 활동적인 개라면 단백질 25% 내외를 권장합니다. 어린 강아지는 훨씬 높은 함량이 필요합니다.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-800">합성 보존제 유무</h4>
                  <p className="text-sm text-gray-500 mt-1">BHA, BHT 같은 합성 보존제 보다는 비타민 E(토코페롤)나 로즈마리 추출물 같은 천연 보존제를 사용한 제품이 안전합니다.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">생애 주기별 급여 가이드라인</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="p-4 border-b-2 border-orange-200">구분</th>
                    <th className="p-4 border-b-2 border-orange-200">권장 횟수</th>
                    <th className="p-4 border-b-2 border-orange-200">주요 포인트</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-50">
                    <td className="p-4 font-bold">자견 (퍼피)</td>
                    <td className="p-4">3~4회 분할</td>
                    <td className="p-4">성장기 에너지 소모가 큼. 소화력이 낮아 조금씩 자주 줘야 함.</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="p-4 font-bold">성견 (어덜트)</td>
                    <td className="p-4">2회 분할</td>
                    <td className="p-4">체중 유지에 집중. 일정한 시간 간격으로 급여하는 습관 필요.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">노령견 (시니어)</td>
                    <td className="p-4">2~3회 분할</td>
                    <td className="p-4">활동량이 줄어들어 칼로리를 줄여야 함. 소화를 돕기 위해 사료를 불려주는 것도 좋음.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <article className="bg-orange-500 text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-black mb-4">⚠️ 집사의 주의사항</h2>
              <p className="leading-relaxed opacity-90">
                사료 교체 시에는 갑자기 바꾸지 마세요. 7~10일 동안 기존 사료와 새 사료의 비율을 조금씩 섞어가며(1:9, 3:7, 5:5...) 위장이 적응할 시간을 주어야 설사를 예방할 수 있습니다. 또한, 계산된 급여량은 절대적인 수치가 아니므로 변 상태(너무 무르면 과식, 너무 딱딱하면 부족)를 보며 미세하게 조절해 주세요.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12 transform scale-150">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4.5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 11c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/></svg>
            </div>
          </article>
        </div>
        
        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default FoodCalculator;
