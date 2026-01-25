
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


const ObesityCalculator: React.FC = () => {
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [idealWeight, setIdealWeight] = useState<string>('');
  const [selectedBreed, setSelectedBreed] = useState<string>('품종 선택 (선택 사항)');
  const [result, setResult] = useState<{ status: string; message: string; color: string } | null>(null);

  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedBreed(selectedValue);
    const selectedBreedData = breeds.find(breed => breed.name === selectedValue);
    if (selectedBreedData) {
        setIdealWeight(selectedBreedData.weight);
    }
  };

  const calculateObesity = (e: React.FormEvent) => {
    e.preventDefault();
    const current = parseFloat(currentWeight);
    const ideal = parseFloat(idealWeight);

    if (isNaN(current) || isNaN(ideal) || current <= 0 || ideal <= 0) {
      setResult({
        status: '오류',
        message: '유효한 체중을 입력해주세요.',
        color: 'red'
      });
      return;
    }

    const overweightPercentage = ((current - ideal) / ideal) * 100;

    if (overweightPercentage < 10) {
      setResult({
        status: '정상 체중',
        message: '아주 건강한 체중을 유지하고 있어요! 지금처럼만 관리해주세요.',
        color: 'green'
      });
    } else if (overweightPercentage <= 20) {
      setResult({
        status: '과체중',
        message: `현재 약 ${overweightPercentage.toFixed(1)}% 과체중 상태입니다. 식사량 조절과 꾸준한 산책이 필요해요.`,
        color: 'yellow'
      });
    } else {
      setResult({
        status: '비만',
        message: `현재 약 ${overweightPercentage.toFixed(1)}% 비만 상태입니다. 관절염, 당뇨 등 질병의 원인이 될 수 있으니 수의사와 상담하여 체중 관리를 시작하는 것이 좋습니다.`,
        color: 'red'
      });
    }
  };
  
  // 가독성 및 유지보수를 위해 색상 클래스를 객체로 재구성
  const resultColorClasses = {
    green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-800' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-800' },
    red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-800' },
  };

  return (
    <>
    <PageMeta 
        title="강아지 비만도 계산기 (BCS)"
        description="우리 강아지, 비만일까요? 현재 체중과 권장 체중을 입력하여 강아지 비만도(BCS)를 확인하세요. 정상, 과체중, 비만 상태를 판정하고 관리 팁을 알려드립니다."
    />
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">강아지 비만도 계산기</h1>

        <AdPlaceholder placement="상단" />

        <form onSubmit={calculateObesity} className="space-y-6">
          <div>
            <label htmlFor="current-weight" className="block text-lg font-medium text-gray-700 mb-2">현재 체중 (kg)</label>
            <input
              type="number"
              id="current-weight"
              value={currentWeight}
              onChange={(e) => setCurrentWeight(e.target.value)}
              placeholder="예: 7.5"
              step="0.1"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 text-lg"
            />
          </div>
          <div>
            <label htmlFor="dog-breed" className="block text-lg font-medium text-gray-700 mb-2">품종 선택</label>
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
            <label htmlFor="ideal-weight" className="block text-lg font-medium text-gray-700 mb-2">권장 체중 (kg)</label>
            <input
              type="number"
              id="ideal-weight"
              value={idealWeight}
              onChange={(e) => setIdealWeight(e.target.value)}
              placeholder="품종 선택 시 자동 입력됩니다."
              step="0.1"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 text-lg"
            />
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white text-lg font-bold py-3 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300">
            비만도 확인하기
          </button>
        </form>

        {result && (() => {
          const colorKey = result.color as keyof typeof resultColorClasses;
          const colorInfo = resultColorClasses[colorKey];
          return (
            <div className={`mt-8 p-6 border-l-4 rounded-r-lg ${colorInfo.bg} ${colorInfo.border} ${colorInfo.text}`}>
              <h3 className="text-xl font-bold">{result.status}</h3>
              <p className="mt-2 text-lg">{result.message}</p>
            </div>
          );
        })()}
      </div>
      
      <AdPlaceholder placement="중단" />

      <article className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-8 prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold text-gray-800">강아지 비만, 만병의 근원입니다</h2>
        <p>귀엽다는 이유로 통통한 모습을 방치하고 계신가요? 강아지 비만은 사람과 마찬가지로 다양한 질병의 원인이 되는 심각한 건강 문제입니다. 관절염, 심장병, 호흡기 질환, 당뇨병 등 수많은 합병증을 유발하여 반려견의 삶의 질을 떨어뜨리고 수명을 단축시킬 수 있습니다.</p>
        <p>정확한 비만도를 파악하는 것이 건강 관리의 첫걸음입니다. 일반적으로 갈비뼈가 잘 만져지지 않고, 위에서 봤을 때 허리 라인이 없으며, 옆에서 봤을 때 배가 처져 있다면 비만을 의심해볼 수 있습니다. 하지만 가장 정확한 방법은 체중을 기반으로 비만도를 계산하는 것입니다.</p>
        
        <h3 className="text-xl font-bold text-gray-800 mt-6">권장 체중은 어떻게 알 수 있나요?</h3>
        <p>강아지의 권장 체중, 즉 이상적인 체중은 품종, 나이, 성별, 중성화 여부에 따라 달라집니다. 본 계산기에 포함된 품종별 권장 체중은 평균적인 수치이며, 가장 정확한 방법은 동물병원에 방문하여 수의사에게 직접 진단받는 것입니다. 수의사는 신체충실지수(BCS, Body Condition Score)를 통해 시각 및 촉각으로 비만도를 평가하고 가장 이상적인 체중을 알려줄 수 있습니다.</p>
        
        <h3 className="text-xl font-bold text-gray-800 mt-6">건강한 체중 관리를 위한 팁</h3>
        <ul>
            <li><strong>정확한 사료 계량:</strong> 눈대중이 아닌 계량컵이나 저울을 사용하여 정확한 양의 사료를 급여하세요.</li>
            <li><strong>간식 줄이기:</strong> 하루 섭취 칼로리의 10% 이상을 간식으로 주지 않도록 주의해야 합니다.</li>
            <li><strong>꾸준한 운동:</strong> 매일 규칙적인 산책과 놀이 활동은 칼로리 소모와 근력 유지에 필수적입니다.</li>
            <li><strong>정기적인 체중 체크:</strong> 일주일에 한 번씩 체중을 측정하고 기록하여 변화를 관찰하세요.</li>
        </ul>
        <p>체중 감량은 단기간에 이루어지지 않습니다. 꾸준한 노력과 사랑으로 반려견의 건강을 지켜주세요. 본 비만도 계산기가 건강한 다이어트의 시작점이 되기를 바랍니다.</p>
      </article>

      <AdPlaceholder placement="하단" />
    </div>
    </>
  );
};

export default ObesityCalculator;
