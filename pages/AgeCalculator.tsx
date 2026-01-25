
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

// SEO 및 페이지 관리를 위한 헬멧 컴포넌트 (실제 프로젝트에서는 react-helmet-async 같은 라이브러리 사용을 권장)
const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }
  return null;
};

// 품종별 크기 데이터
const breeds = [
  { name: '품종을 선택해주세요', size: 'small' },
  // 소형견
  { name: '말티즈', size: 'small' },
  { name: '말티푸', size: 'small' },
  { name: '비숑 프리제', size: 'small' },
  { name: '포메라니안', size: 'small' },
  { name: '토이 푸들', size: 'small' },
  { name: '시츄', size: 'small' },
  { name: '요크셔테리어', size: 'small' },
  { name: '치와와', size: 'small' },
  { name: '닥스훈트', size: 'small' },
  { name: '퍼그', size: 'small' },
  { name: '프렌치 불독', size: 'small' },
  // 중형견
  { name: '미니어처 푸들', size: 'medium' },
  { name: '비글', size: 'medium' },
  { name: '웰시코기', size: 'medium' },
  { name: '시바견', size: 'medium' },
  { name: '보더콜리', size: 'medium' },
  // 대형견
  { name: '진돗개', size: 'large' },
  { name: '시베리안 허스키', size: 'large' },
  { name: '골든 리트리버', size: 'large' },
  { name: '래브라도 리트리버', size: 'large' },
  { name: '사모예드', size: 'large' },
  { name: '저먼 셰퍼드', size: 'large' },
];

const AgeCalculator: React.FC = () => {
  const [dogAge, setDogAge] = useState<string>('');
  const [dogSize, setDogSize] = useState<string>('small');
  const [selectedBreed, setSelectedBreed] = useState<string>(breeds[0].name);
  const [humanAge, setHumanAge] = useState<string | null>(null);
  
  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breedName = e.target.value;
    setSelectedBreed(breedName);
    const breedData = breeds.find(b => b.name === breedName);
    if (breedData) {
        setDogSize(breedData.size);
    }
  };

  const calculateAge = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(dogAge, 10);
    if (isNaN(age) || age < 1) {
      setHumanAge('유효한 나이를 입력해주세요.');
      return;
    }

    let calculatedAge = 0;
    if (age === 1) {
      calculatedAge = 15;
    } else if (age === 2) {
      calculatedAge = 24;
    } else {
      let baseAge = 24;
      let multiplier = 4; // 소형견 기준
      if (dogSize === 'medium') {
        multiplier = 6;
      } else if (dogSize === 'large') {
        multiplier = 8;
      }
      calculatedAge = baseAge + (age - 2) * multiplier;
    }
    setHumanAge(`사람 나이로 환산하면 약 ${calculatedAge}살 입니다.`);
  };

  return (
    <>
    <PageMeta 
        title="강아지 나이 계산기 | 사람 나이로 변환"
        description="우리 강아지는 사람 나이로 몇 살일까요? 소형견, 중형견, 대형견 크기별로 정확한 강아지 나이를 계산해보세요. 반려견의 생체 나이를 확인하고 건강 관리에 참고하세요."
    />
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">강아지 나이 계산기</h1>
        
        <AdPlaceholder placement="상단" />

        <form onSubmit={calculateAge} className="space-y-6">
          <div>
            <label htmlFor="dog-breed" className="block text-lg font-medium text-gray-700 mb-2">강아지 품종</label>
            <select
              id="dog-breed"
              value={selectedBreed}
              onChange={handleBreedChange}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 text-lg"
            >
              {breeds.map(breed => (
                <option key={breed.name} value={breed.name}>{breed.name} ({breed.size === 'small' ? '소형견' : breed.size === 'medium' ? '중형견' : '대형견'})</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="dog-age" className="block text-lg font-medium text-gray-700 mb-2">강아지 나이 (만 나이)</label>
            <input
              type="number"
              id="dog-age"
              value={dogAge}
              onChange={(e) => setDogAge(e.target.value)}
              placeholder="예: 3"
              min="1"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 text-lg"
            />
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white text-lg font-bold py-3 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300">
            나이 계산하기
          </button>
        </form>

        {humanAge && (
          <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
            <p className="text-xl font-semibold text-center text-gray-900">{humanAge}</p>
          </div>
        )}
      </div>

      <AdPlaceholder placement="중단" />

      <article className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-8 prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold text-gray-800">강아지 나이, 왜 중요할까요?</h2>
        <p>많은 보호자들이 강아지 나이에 7을 곱하면 사람 나이가 된다고 알고 있지만, 이는 정확한 정보가 아닙니다. 강아지의 성장 속도는 사람과 매우 다르며, 특히 생후 1~2년 동안 폭발적으로 성장합니다. 또한, 소형견, 중형견, 대형견 등 크기에 따라서도 노화 속도가 달라집니다.</p>
        <p>정확한 강아지 나이를 사람 나이로 환산해보는 것은 단순히 재미를 넘어, 반려견의 생애 주기를 이해하는 데 큰 도움이 됩니다. 예를 들어, 사람 나이로 40~50대에 접어드는 시기부터는 노화가 본격적으로 시작되므로, 정기적인 건강검진과 식단 관리에 더욱 신경 써야 합니다. 본 계산기는 이러한 점을 고려하여 과학적인 데이터를 기반으로 설계되었습니다.</p>
        
        <h3 className="text-xl font-bold text-gray-800 mt-6">크기별 나이 계산법의 차이</h3>
        <p>일반적으로 소형견은 대형견보다 성장이 빠르지만, 성견이 된 이후의 노화 속도는 더 느립니다. 반대로 대형견은 어릴 때 천천히 자라지만, 성견이 된 이후에는 노화가 빠르게 진행됩니다. 본 계산기는 이러한 품종 크기별 차이를 반영하여 보다 신뢰도 높은 결과를 제공합니다.</p>
        <ul>
            <li><strong>소형견:</strong> 첫 1년은 15살, 2년째는 24살, 그 이후부터는 1년에 약 4살씩 나이를 먹습니다.</li>
            <li><strong>중형견:</strong> 첫 2년까지는 소형견과 비슷하지만, 그 이후부터는 1년에 약 6살씩 나이를 먹습니다.</li>
            <li><strong>대형견:</strong> 노화가 가장 빠르게 진행되며, 2년 이후부터는 1년에 약 8살씩 나이를 먹게 됩니다.</li>
        </ul>
        <p>우리 강아지의 정확한 생체 나이를 알고, 그에 맞는 사랑과 관리를 제공해주세요. 반려견의 건강한 삶은 보호자의 작은 관심에서 시작됩니다.</p>
      </article>

      <AdPlaceholder placement="하단" />
    </div>
    </>
  );
};

export default AgeCalculator;
