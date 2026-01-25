
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

// SEO 및 페이지 관리를 위한 헬멧 컴포넌트
const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', description);
  }
  return null;
};

// 품종별 평균 권장 체중 데이터
const breeds = [
  { name: '품종 선택 (선택 사항)', weight: '' },
  // 소형견
  { name: '말티즈', weight: '2.5' },
  { name: '말티푸', weight: '4.5' },
  { name: '비숑 프리제', weight: '5.5' },
  { name: '포메라니안', weight: '2.2' },
  { name: '토이 푸들', weight: '2.5' },
  { name: '시츄', weight: '5.5' },
  { name: '요크셔테리어', weight: '2.8' },
  { name: '치와와', weight: '2.2' },
  { name: '닥스훈트', weight: '10.5' },
  { name: '퍼그', weight: '7' },
  { name: '프렌치 불독', weight: '11' },
  // 중형견
  { name: '미니어처 푸들', weight: '6.5' },
  { name: '비글', weight: '10' },
  { name: '웰시코기', weight: '12' },
  { name: '시바견', weight: '10' },
  { name: '보더콜리', weight: '17' },
  // 대형견
  { name: '진돗개', weight: '19' },
  { name: '시베리안 허스키', weight: '21.5' },
  { name: '골든 리트리버', weight: '28.5' },
  { name: '래브라도 리트리버', weight: '30.5' },
  { name: '사모예드', weight: '22.5' },
  { name: '저먼 셰퍼드', weight: '31' },
];

const FoodCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('normal');
  const [kibbleCalories, setKibbleCalories] = useState<string>('350');
  const [selectedBreed, setSelectedBreed] = useState<string>(breeds[0].name);
  const [result, setResult] = useState<string | null>(null);

  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breedName = e.target.value;
    setSelectedBreed(breedName);
    const breedData = breeds.find(b => b.name === breedName);
    if (breedData && breedData.weight) {
        setWeight(breedData.weight);
    } else {
        setWeight('');
    }
  };

  const calculateFood = (e: React.FormEvent) => {
    e.preventDefault();
    const dogWeight = parseFloat(weight);
    const caloriesPer100g = parseInt(kibbleCalories, 10);

    if (isNaN(dogWeight) || dogWeight <= 0 || isNaN(caloriesPer100g) || caloriesPer100g <= 0) {
      setResult('유효한 체중과 사료 칼로리를 입력해주세요.');
      return;
    }

    // RER(Resting Energy Requirement) 계산: 70 * (체중 kg ^ 0.75)
    const rer = 70 * Math.pow(dogWeight, 0.75);

    let activityMultiplier = 1.6; // 보통 (중성화)
    if (activityLevel === 'low') {
      activityMultiplier = 1.2; // 비활동적, 비만 경향
    } else if (activityLevel === 'high') {
      activityMultiplier = 2.0; // 활동적
    }

    // DER(Daily Energy Requirement) 계산
    const der = rer * activityMultiplier;

    // 하루 권장 급여량 (g)
    const dailyIntake = (der / caloriesPer100g) * 100;

    setResult(`하루 권장 급여량은 약 ${Math.round(dailyIntake)}g 입니다.`);
  };

  return (
    <>
    <PageMeta 
        title="강아지 사료량 계산기 | 하루 권장 급여량"
        description="강아지에게 사료를 얼마나 줘야 할까요? 강아지 체중, 활동량, 사료 칼로리를 입력하여 정확한 하루 권장 사료 급여량을 계산하세요. 과식과 영양 부족을 예방할 수 있습니다."
    />
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">강아지 하루 사료량 계산기</h1>
        
        <AdPlaceholder placement="상단" />

        <form onSubmit={calculateFood} className="space-y-6">
          <div>
            <label htmlFor="dog-breed" className="block text-lg font-medium text-gray-700 mb-2">품종 선택 (선택 시 평균 체중이 입력됩니다)</label>
            <select
              id="dog-breed"
              value={selectedBreed}
              onChange={handleBreedChange}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 text-lg"
            >
              {breeds.map(breed => (
                <option key={breed.name} value={breed.name}>{breed.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="dog-weight" className="block text-lg font-medium text-gray-700 mb-2">강아지 체중 (kg)</label>
            <input
              type="number"
              id="dog-weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="예: 5"
              step="0.1"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 text-lg"
            />
          </div>
          <div>
            <label htmlFor="activity-level" className="block text-lg font-medium text-gray-700 mb-2">활동량</label>
            <select
              id="activity-level"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 text-lg"
            >
              <option value="low">적음 (비활동적, 노령견, 비만 경향)</option>
              <option value="normal">보통 (하루 1-2회 산책)</option>
              <option value="high">많음 (활동견, 장시간 산책)</option>
            </select>
          </div>
          <div>
            <label htmlFor="kibble-calories" className="block text-lg font-medium text-gray-700 mb-2">사료 100g당 칼로리 (kcal)</label>
            <input
              type="number"
              id="kibble-calories"
              value={kibbleCalories}
              onChange={(e) => setKibbleCalories(e.target.value)}
              placeholder="사료 포장지 뒷면 확인 (기본값: 350)"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 text-lg"
            />
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white text-lg font-bold py-3 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300">
            급여량 계산하기
          </button>
        </form>

        {result && (
          <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
            <p className="text-xl font-semibold text-center text-gray-900">{result}</p>
            <p className="text-center text-gray-600 mt-2 text-sm">※ 계산 결과는 표준적인 수치이며, 견종, 건강 상태에 따라 달라질 수 있습니다. 아침, 저녁으로 나누어 급여하는 것을 권장합니다.</p>
          </div>
        )}
      </div>

      <AdPlaceholder placement="중단" />

      <article className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-8 prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold text-gray-800">정확한 사료량, 건강의 기본입니다</h2>
        <p>사료 포장지에 적힌 급여량 가이드는 가장 일반적인 기준일 뿐, 우리 강아지에게 딱 맞는 양이라고 할 수는 없습니다. 강아지의 체중, 나이, 활동량, 중성화 여부, 심지어 생활 환경에 따라서도 필요한 에너지 요구량은 크게 달라집니다. 너무 적게 주면 영양 부족으로 이어질 수 있고, 너무 많이 주면 비만의 원인이 됩니다.</p>
        <p>따라서, 우리 강아지의 상태를 정확히 파악하고 그에 맞는 사료량을 계산하여 급여하는 것이 매우 중요합니다. 본 계산기는 수의학적 공식을 기반으로 하여 강아지의 하루 에너지 요구량(DER)을 계산하고, 이를 통해 가장 적절한 사료 급여량을 제시합니다. </p>
        
        <h3 className="text-xl font-bold text-gray-800 mt-6">RER과 DER, 무엇인가요?</h3>
        <p>사료량 계산의 핵심은 RER과 DER이라는 두 가지 개념에 있습니다.</p>
        <ul>
            <li><strong>RER (Resting Energy Requirement, 휴식기 에너지 요구량):</strong> 생명 유지에 필요한 최소한의 에너지 양입니다. 편안한 상태에서 아무 활동도 하지 않을 때 소모되는 칼로리를 의미합니다.</li>
            <li><strong>DER (Daily Energy Requirement, 하루 에너지 요구량):</strong> RER에 활동량, 나이 등 다양한 변수를 고려하여 계산된, 하루에 실제로 필요한 총 에너지 양입니다. 본 계산기는 이 DER을 기반으로 사료량을 계산합니다.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6">사료 칼로리 확인은 필수!</h3>
        <p>모든 사료는 영양 성분과 칼로리가 다릅니다. 고단백 사료는 칼로리가 높고, 다이어트 사료는 칼로리가 낮은 식입니다. 따라서 현재 급여하는 사료의 정확한 칼로리를 확인하고 입력해야만 정확한 급여량을 계산할 수 있습니다. 대부분의 사료 포장지 뒷면 성분표 근처에 '1kg당 칼로리' 또는 '100g당 칼로리'가 표시되어 있으니 꼭 확인해보세요.</p>
        <p>정확한 계산을 통해 과식과 영양 불균형을 예방하고, 반려견의 평생 건강을 지켜주세요!</p>
      </article>

      <AdPlaceholder placement="하단" />
    </div>
    </>
  );
};

export default FoodCalculator;
