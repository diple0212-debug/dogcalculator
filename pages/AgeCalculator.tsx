
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
  }, [title, description]);
  return null;
};

const breeds = [
  { name: '우리 강아지 품종 선택', size: 'small' },
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
  const [lifeStage, setLifeStage] = useState<string>('');
  
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
    
    if (calculatedAge < 20) setLifeStage('퍼피(성장기)');
    else if (calculatedAge < 45) setLifeStage('어덜트(청년기)');
    else if (calculatedAge < 65) setLifeStage('어덜트(장년기)');
    else setLifeStage('시니어(노령기)');
  };

  return (
    <>
      <PageMeta 
        title="강아지 나이 계산기 | 사람 나이 환산 및 견종별 건강 관리 가이드" 
        description="우리 강아지 나이, 사람으로 치면 몇 살일까요? 소형견, 중형견, 대형견별 정확한 나이 환산법과 노령견 증상 및 수명 연장 관리 팁을 제공합니다." 
      />
      <div className="w-full max-w-2xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Life Cycle AI</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">강아지 나이 계산기</h1>
            <p className="text-gray-500 font-medium">우리 아이의 생애 주기를 정확히 진단해 보세요.</p>
          </div>

          <form onSubmit={calculateAge} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">우리 아이 견종</label>
                <select value={selectedBreed} onChange={handleBreedChange} className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-orange-400 rounded-2xl outline-none transition-all cursor-pointer">
                  {breeds.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">현재 나이 (만 나이)</label>
                <input type="number" value={dogAge} onChange={(e) => setDogAge(e.target.value)} placeholder="숫자만 입력 (예: 3)" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-orange-400 rounded-2xl outline-none transition-all" />
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl active:scale-[0.98]">
              환산 결과 보기
            </button>
          </form>

          {humanAge !== null && (
            <div className="mt-10 animate-in zoom-in duration-300">
              <div className="p-8 bg-orange-50 rounded-[2.5rem] border-2 border-orange-200 text-center relative overflow-hidden">
                <p className="text-gray-600 font-bold mb-2">우리 강아지는 사람 나이로</p>
                <h2 className="text-5xl md:text-6xl font-black text-orange-600 mb-2">약 {humanAge}살</h2>
                <span className="inline-block px-4 py-1 bg-white border border-orange-200 rounded-full text-orange-500 font-bold text-sm mb-6">
                  {lifeStage} 단계
                </span>
                
                <div className="bg-white/80 p-5 rounded-2xl text-left border border-orange-100">
                   <h4 className="font-black text-gray-800 mb-2">🏡 집사의 건강 가이드</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     {lifeStage.includes('퍼피') ? "성장이 매우 빠른 시기입니다. 뼈와 근육 형성을 위해 고단백 퍼피용 사료를 급여하고 기초 예방접종을 완료해 주세요." :
                      lifeStage.includes('청년기') ? "가장 에너지가 넘치는 황금기입니다. 충분한 산책과 놀이로 스트레스를 풀어주고, 치아 관리를 시작해야 하는 시기입니다." :
                      lifeStage.includes('장년기') ? "신진대사가 조금씩 느려지기 시작합니다. 과도한 체중 증가를 경계하고 1년에 한 번 건강검진을 추천합니다." :
                      "노령기에 접어들었습니다. 소화력이 떨어질 수 있으니 사료를 불려주거나 고품질 단백질 위주로 급여하고 관절 보호에 힘써주세요."}
                   </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 관련 서비스 링크 유도 섹션 */}
        <section className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
          <h3 className="font-black text-gray-800 mb-4 text-center">다른 보호자들이 많이 이용한 기능</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/obesity" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 hover:bg-orange-50 transition-colors">
              <span className="text-2xl">⚖️</span>
              <span className="font-bold text-sm">비만도 체크</span>
            </Link>
            <Link to="/food" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 hover:bg-orange-50 transition-colors">
              <span className="text-2xl">🥣</span>
              <span className="font-bold text-sm">사료량 계산</span>
            </Link>
          </div>
        </section>

        <AdPlaceholder placement="중단" />

        <section className="space-y-12">
          <article className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">강아지 나이 계산, 견종 크기가 핵심인 이유</h2>
            <div className="prose prose-orange text-gray-600 leading-loose space-y-5">
              <p>강아지의 1년을 사람의 7년으로 단순히 곱하는 '7의 법칙'은 현대 수의학에서 더 이상 사용되지 않습니다. 최신 연구에 따르면 강아지는 종의 크기에 따라 노화 메커니즘이 완전히 다르게 작동하기 때문입니다.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">크기별 노화 곡선의 차이</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>소형견:</strong> 초기 성장이 빠르지만, 성견이 된 이후 세포 노화 속도가 중/대형견에 비해 현저히 낮습니다. 평균 15세 이상의 수명을 가집니다.</li>
                <li><strong>중형견:</strong> 소형견보다 완만한 노화 곡선을 그리며, 10세 이후부터 노화 관련 질병이 나타나기 시작합니다.</li>
                <li><strong>대형견:</strong> 성견이 되는 시점은 가장 늦지만, 5~6세부터 세포 노화가 가속화됩니다. 신체 크기가 클수록 심혈관계와 관절에 가해지는 부담이 크기 때문입니다.</li>
              </ul>

              <h2 className="text-2xl font-black text-gray-800 mt-10 mb-6">노령견 보호자가 주의해야 할 3가지 증상</h2>
              <div className="space-y-6">
                <div className="p-5 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-1">1. 갑작스러운 활동량 감소와 수면 증가</h4>
                  <p className="text-sm">단순히 '나이가 들어서'라고 생각하기 쉽지만, 관절 통증이나 심장 기능 저하의 신호일 수 있습니다. 아이가 산책을 거부하거나 평소보다 잠이 너무 많아졌다면 정밀 검진이 필요합니다.</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-1">2. 인지 기능 장애 (강아지 치매)</h4>
                  <p className="text-sm">밤에 이유 없이 짖거나, 구석진 곳에서 나오지 못하고, 배변 실수가 잦아지는 증상이 나타납니다. 노즈워크와 가벼운 산책으로 뇌 자극을 지속해주는 것이 예방의 핵심입니다.</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-1">3. 식이 및 음수량 변화</h4>
                  <p className="text-sm">물을 너무 많이 마시거나 소변량이 급증하는 것은 당뇨나 신장 질환의 전조 증상입니다. 체중 변화를 정기적으로 기록하는 습관이 중요합니다.</p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default AgeCalculator;
