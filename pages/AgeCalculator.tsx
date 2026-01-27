
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', description);
  return null;
};

const breeds = [
  { name: '품종을 선택해주세요', size: 'small' },
  { name: '말티즈', size: 'small' }, { name: '말티푸', size: 'small' },
  { name: '비숑 프리제', size: 'small' }, { name: '포메라니안', size: 'small' },
  { name: '토이 푸들', size: 'small' }, { name: '시츄', size: 'small' },
  { name: '요크셔테리어', size: 'small' }, { name: '치와와', size: 'small' },
  { name: '닥스훈트', size: 'small' }, { name: '퍼그', size: 'small' },
  { name: '프렌치 불독', size: 'small' }, { name: '미니어처 푸들', size: 'medium' },
  { name: '비글', size: 'medium' }, { name: '웰시코기', size: 'medium' },
  { name: '시바견', size: 'medium' }, { name: '보더콜리', size: 'medium' },
  { name: '진돗개', size: 'large' }, { name: '시베리안 허스키', size: 'large' },
  { name: '골든 리트리버', size: 'large' }, { name: '래브라도 리트리버', size: 'large' },
  { name: '사모예드', size: 'large' }, { name: '저먼 셰퍼드', size: 'large' },
];

const AgeCalculator: React.FC = () => {
  const [dogAge, setDogAge] = useState<string>('');
  const [dogSize, setDogSize] = useState<string>('small');
  const [selectedBreed, setSelectedBreed] = useState<string>(breeds[0].name);
  const [humanAge, setHumanAge] = useState<number | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breedName = e.target.value;
    setSelectedBreed(breedName);
    const breedData = breeds.find(b => b.name === breedName);
    if (breedData) setDogSize(breedData.size);
  };

  const calculateAge = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(dogAge, 10);
    if (isNaN(age) || age < 1) return;

    let calculatedAge = 0;
    if (age === 1) calculatedAge = 15;
    else if (age === 2) calculatedAge = 24;
    else {
      let multiplier = dogSize === 'medium' ? 6 : dogSize === 'large' ? 8 : 4;
      calculatedAge = 24 + (age - 2) * multiplier;
    }
    setHumanAge(calculatedAge);
  };

  const shareResult = () => {
    const text = `우리 강아지(${selectedBreed})는 사람 나이로 ${humanAge}살이래요! 🐾 똑똑한 집사에서 확인해보세요: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({ title: '똑똑한 집사 - 강아지 나이 결과', text: text, url: window.location.origin }).catch(console.error);
    } else {
      navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <>
      <PageMeta title="강아지 나이 계산기 | 강아지 사람나이 환산 및 노령견 건강 관리" description="정확한 강아지 나이 계산법! 소형견, 중형견, 대형견 품종별로 강아지 사람나이 환산 결과를 확인하고 생애 주기별 필수 건강 관리 팁을 알아보세요." />
      <div className="w-full max-w-2xl mx-auto space-y-10 animate-in fade-in duration-700">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">Dog Age Converter</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">강아지 나이 계산기</h1>
            <p className="text-gray-500">품종별로 다른 강아지 수명과 사람 나이를 환산해드립니다.</p>
          </div>

          <form onSubmit={calculateAge} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">우리 강아지 품종</label>
                <select value={selectedBreed} onChange={handleBreedChange} className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-orange-400 rounded-2xl outline-none transition-all cursor-pointer">
                  {breeds.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">현재 강아지 나이 (살)</label>
                <input type="number" value={dogAge} onChange={(e) => setDogAge(e.target.value)} placeholder="예: 7" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-orange-400 rounded-2xl outline-none transition-all" />
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-orange-200 transition-all transform active:scale-95 text-xl">
              강아지 사람나이 계산하기
            </button>
          </form>

          {humanAge !== null && (
            <div className="mt-10 p-8 bg-orange-50 rounded-3xl border-2 border-orange-200 text-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-gray-600 font-bold mb-2">{selectedBreed}, {dogAge}살 강아지는 사람 나이로</p>
                <h2 className="text-5xl md:text-6xl font-black text-orange-600 mb-6">약 {humanAge}살!</h2>
                <button onClick={shareResult} className="bg-white text-gray-800 font-bold px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                  {copySuccess ? '✅ 결과 복사 완료!' : '결과 공유하고 강아지 자랑하기'}
                </button>
              </div>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        <section className="space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
              <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">TIP</span>
              강아지 건강 관리를 위한 전문 가이드
            </h2>
            <div className="prose prose-orange max-w-none text-gray-600 space-y-4">
              <p>강아지의 1년은 사람의 1년과 다릅니다. 특히 <strong>말티즈, 푸들, 포메라니안</strong>과 같은 소형견은 대형견에 비해 노화 속도가 상대적으로 느리지만, 치아 관리와 슬개골 건강에 더욱 신경을 써야 합니다.</p>
              
              <h3 className="text-lg font-bold text-gray-800 mt-6">강아지 수명을 늘리는 3가지 핵심 습관</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>규칙적인 양치질:</strong> 강아지 구강 건강은 심장 질환과 직결됩니다. 하루 한 번 양치질은 필수입니다.</li>
                <li><strong>품종별 맞춤 운동:</strong> 활동량이 많은 비글이나 시바견은 충분한 산책이 필요하며, 관절이 약한 견종은 바닥에 매트를 깔아주는 것이 좋습니다.</li>
                <li><strong>정기적인 건강검진:</strong> 7세 이상의 노령견은 1년에 한 번씩 혈액 검사와 엑스레이를 통해 질병을 조기에 발견해야 합니다.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6">강아지 나이 관련 자주 묻는 질문</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-orange-600">Q. 강아지는 보통 몇 살부터 노령견인가요?</h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">일반적으로 소형견은 8~10세, 대형견은 6~7세부터 노령기에 접어든다고 봅니다. 이 시기에는 고단백보다는 소화가 잘 되는 고품질 사료로 교체해주는 것이 좋습니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-600">Q. 강아지 사람나이 계산법은 모든 견종이 똑같나요?</h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">아닙니다. 견종의 크기에 따라 다릅니다. 대형견은 성장이 빠르고 노화도 빨리 찾아오기 때문에 소형견보다 사람 나이로 환산했을 때 더 높은 숫자가 나옵니다.</p>
              </div>
            </div>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default AgeCalculator;
