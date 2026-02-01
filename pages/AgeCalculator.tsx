
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
        description="우리 강아지 나이, 사람으로 치면 몇 살일까요? 최신 수의학 데이터를 기반으로 한 소형, 중형, 대형견별 나이 환산 도구와 노화 방지 팁." 
      />
      <div className="w-full max-w-2xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Life Cycle AI</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">강아지 나이 계산기</h1>
            <p className="text-gray-500 font-medium">정확한 생애 주기를 아는 것이 건강 관리의 시작입니다.</p>
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
                <input type="number" value={dogAge} onChange={(e) => setDogAge(e.target.value)} placeholder="숫자만 입력 (예: 5)" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-orange-400 rounded-2xl outline-none transition-all" />
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
                     {lifeStage.includes('퍼피') ? "성장이 가장 빠른 시기입니다. 뼈와 근육 형성을 위해 고단백 사료를 급여하고, 사회화 교육에 신경 써주세요." :
                      lifeStage.includes('청년기') ? "에너지가 넘치는 시기입니다. 충분한 운동량 확보와 함께 영구치가 모두 난 상태이므로 치아 관리에 집중하세요." :
                      lifeStage.includes('장년기') ? "조금씩 신진대사가 느려집니다. 과체중이 되지 않도록 식사량을 조절하고 정기적인 건강검진이 필수입니다." :
                      "시니어 단계입니다. 소화가 편한 부드러운 사료와 관절 영양제를 추천하며, 시력과 청력의 변화를 세심히 관찰해 주세요."}
                   </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        {/* 1,500자 이상의 SEO 전문 콘텐츠 */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-orange max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-orange-500 pl-4 mb-8">강아지 나이 계산, 왜 '7의 법칙'은 틀렸을까?</h2>
            
            <p>오랫동안 많은 보호자들이 강아지의 1년을 사람의 7년으로 계산해 왔습니다. 하지만 최신 수의학 연구, 특히 **캘리포니아 대학(UCSD)**의 연구진들이 발표한 '후성유전학적 시계(Epigenetic Clock)' 연구에 따르면, 강아지의 노화 속도는 인간의 직선적인 노화와는 완전히 다른 양상을 보입니다. 강아지는 태어난 후 첫 1~2년 동안 인간보다 훨씬 빠르게 노화하며, 이후에는 그 속도가 완만하게 줄어드는 '로그 함수' 곡선을 그리게 됩니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. 견종 크기별 노화의 차이: 소형견 vs 대형견</h3>
            <p>강아지 나이 계산기에서 가장 중요한 변수는 바로 **'성견 시의 몸무게'**입니다. 소형견은 보통 10~15kg 미만의 견종을 의미하며, 이들은 대형견에 비해 초기 성장은 매우 빠르지만 성견이 된 이후 세포 노화 속도가 현저히 느립니다. 말티즈나 치와와 같은 소형견이 15~20년까지 사는 반면, 골든 리트리버나 그레이트 데인 같은 대형견은 8~12년 정도의 상대적으로 짧은 수명을 가지는 이유가 여기에 있습니다. 대형견은 신체가 크기 때문에 심혈관계와 관절에 가해지는 물리적 부담이 크며, 이는 세포 분열 속도를 높여 암 발생률을 높이는 결과로 이어집니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. 생애 주기별 필수 체크리스트</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h4 className="font-black text-orange-600 mb-2">퍼피(Puppy) 단계</h4>
                <p className="text-sm">사람 나이로 치면 유아기에서 청소년기입니다. 이때 형성된 식습관과 사회성이 평생을 좌우합니다. 고품질의 성장기 전용 사료와 5차 예방접종까지의 철저한 스케줄 관리가 필요합니다.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="font-black text-blue-600 mb-2">시니어(Senior) 단계</h4>
                <p className="text-sm">보통 사람 나이 50대 이후에 해당합니다. 육안으로는 건강해 보여도 장기 내부의 기능은 저하되기 시작합니다. 특히 신장 수치와 간 수치를 정기적으로 확인하고, 인지 기능 장애(CCD) 예방을 위한 노즈워크 활동을 추천합니다.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 노화 방지와 수명 연장을 위한 3대 핵심 습관</h3>
            <p>우리가 강아지 나이를 사람 나이로 환산해보는 이유는 결국 **'어떻게 하면 더 오랫동안 건강하게 함께 살 수 있을까?'**에 대한 답을 얻기 위해서입니다. 수명 연장을 위한 수의학적 권장 사항은 다음과 같습니다.</p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>치주 질환 예방:</strong> 강아지의 잇몸 염증은 혈류를 타고 심장과 신장으로 박테리아를 옮깁니다. 매일 칫솔질을 하는 강아지는 그렇지 않은 강아지보다 평균 2년 더 오래 산다는 연구 결과가 있습니다.</li>
              <li><strong>체중 관리:</strong> 비만은 만병의 근원입니다. 특히 슬개골 탈구가 잦은 소형견이나 고관절 이형성증이 있는 대형견에게 과체중은 삶의 질을 직접적으로 떨어뜨리는 치명적인 요인입니다.</li>
              <li><strong>정기적인 건강검진:</strong> 강아지는 아픈 것을 숨기는 본능이 있습니다. 육안으로 증상이 나타났을 때는 이미 병세가 깊은 경우가 많습니다. 7세 이후부터는 1년에 최소 한 번 정밀 검진을 권장합니다.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. 당신의 사랑이 아이의 시간표를 바꿉니다</h3>
            <p>강아지의 시간은 인간보다 5~7배 빠르게 흐릅니다. 오늘 우리가 함께한 1시간이 강아지에게는 6시간과 같은 소중한 의미일 수 있습니다. '강아지 나이 계산기' 결과를 확인하셨다면, 오늘 우리 아이가 인생의 어느 지점을 지나고 있는지 이해하고 그에 맞는 깊은 애정과 배려를 선물해 주세요. 똑똑한 집사가 당신의 건강한 반려 생활을 응원합니다.</p>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default AgeCalculator;
