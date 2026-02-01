
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', description);
  return null;
};

const breeds = [
  { name: '품종 선택 (권장 체중 자동 입력)', weight: '' },
  { name: '말티즈', weight: '2.5' }, { name: '말티푸', weight: '4.5' },
  { name: '비숑 프리제', weight: '5.5' }, { name: '포메라니안', weight: '2.2' },
  { name: '토이 푸들', weight: '2.5' }, { name: '시츄', weight: '5.5' },
  { name: '요크셔테리어', weight: '2.8' }, { name: '치와와', weight: '2.2' },
  { name: '닥스훈트', weight: '10.5' }, { name: '퍼그', weight: '7' },
  { name: '프렌치 불독', weight: '11' }, { name: '미니어처 푸들', weight: '6.5' },
  { name: '비글', weight: '10' }, { name: '웰시코기', weight: '12' },
  { name: '시바견', weight: '10' }, { name: '보더콜리', weight: '17' },
  { name: '진돗개', weight: '19' }, { name: '시베리안 허스키', weight: '21.5' },
  { name: '골든 리트리버', weight: '28.5' }, { name: '래브라도 리트리버', weight: '30.5' },
  { name: '사모예드', weight: '22.5' }, { name: '저먼 셰퍼드', weight: '31' },
];

const ObesityCalculator: React.FC = () => {
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [idealWeight, setIdealWeight] = useState<string>('');
  const [selectedBreed, setSelectedBreed] = useState<string>(breeds[0].name);
  const [result, setResult] = useState<{ status: string; message: string; color: 'green' | 'yellow' | 'red' } | null>(null);

  const calculateObesity = (e: React.FormEvent) => {
    e.preventDefault();
    const current = parseFloat(currentWeight);
    const ideal = parseFloat(idealWeight);

    if (isNaN(current) || isNaN(ideal) || current <= 0 || ideal <= 0) {
      setResult({ status: '오류', message: '정확한 몸무게를 입력해주세요.', color: 'red' });
      return;
    }

    const overweightPercentage = ((current - ideal) / ideal) * 100;
    if (overweightPercentage < 10) {
      setResult({ status: '정상 (Healthy)', message: '이상적인 체중입니다! 현재 영양 상태를 잘 유지해주세요.', color: 'green' });
    } else if (overweightPercentage <= 20) {
      setResult({ status: '과체중 (Overweight)', message: `이상 체중보다 ${overweightPercentage.toFixed(1)}% 무겁습니다. 간식을 줄이고 활동량을 늘려주세요.`, color: 'yellow' });
    } else {
      setResult({ status: '비만 (Obese)', message: `위험 단계입니다! 관절염과 당뇨, 심장 질환의 위험이 매우 높습니다. 수의사와 상담 후 다이어트를 시작하세요.`, color: 'red' });
    }
  };

  return (
    <>
      <PageMeta 
        title="강아지 비만도 계산기 | 몸무게 비만 확인 및 BCS 다이어트 가이드" 
        description="우리 강아지 몸무게가 정상일까요? 품종별 이상 체중과 비교한 비만도 계산 및 수의학적 체형 평가(BCS) 단계별 건강 관리 팁 제공." 
      />
      <div className="w-full max-w-2xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Weight Management</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-4 mb-2">강아지 비만도 계산기</h1>
            <p className="text-gray-500 font-medium">체중 관리는 가장 저렴하고 효과적인 질병 예방법입니다.</p>
          </div>

          <form onSubmit={calculateObesity} className="space-y-6">
            <div className="space-y-4">
              <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100">
                <label className="text-sm font-bold text-gray-700 mb-2 block">우리 강아지 품종</label>
                <select value={selectedBreed} onChange={(e) => {
                  setSelectedBreed(e.target.value);
                  const breed = breeds.find(b => b.name === e.target.value);
                  if (breed) setIdealWeight(breed.weight);
                }} className="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 transition-all cursor-pointer">
                  {breeds.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">현재 몸무게 (kg)</label>
                  <input type="number" step="0.1" value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} placeholder="예: 6.5" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">목표(이상) 몸무게 (kg)</label>
                  <input type="number" step="0.1" value={idealWeight} onChange={(e) => setIdealWeight(e.target.value)} placeholder="직접 수정 가능" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl active:scale-95">
              비만도 체크하기
            </button>
          </form>

          {result && (
            <div className={`mt-8 p-8 rounded-3xl border-2 text-center animate-in fade-in zoom-in duration-300 ${
              result.color === 'green' ? 'bg-green-50 border-green-200' :
              result.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'
            }`}>
              <h2 className={`text-3xl font-black mb-3 ${
                result.color === 'green' ? 'text-green-600' :
                result.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
              }`}>{result.status}</h2>
              <p className="text-gray-700 leading-relaxed font-semibold">{result.message}</p>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        {/* 1,500자 이상의 SEO 전문 콘텐츠 */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-blue max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-blue-500 pl-4 mb-8">비만은 강아지의 수명을 2.5년 단축시킵니다</h2>
            
            <p>미국 오하이오 주립 대학의 연구에 따르면, 정상 체중을 유지하는 강아지는 비만인 강아지보다 평균적으로 **2.5년 더 오래 산다는 사실**이 밝혀졌습니다. 단순히 외형적인 문제가 아닙니다. 비만은 강아지에게 만성 염증 상태를 유발하며, 이는 암, 당뇨병, 고혈압 및 심각한 관절염의 직접적인 원인이 됩니다. '강아지 비만도 계산기'를 통해 아이의 상태를 파악하는 것은 집사가 할 수 있는 최고의 사랑 고백입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. 몸무게보다 중요한 BCS(Body Condition Score) 시스템</h3>
            <p>사람에게 BMI(체질량지수)가 있다면, 강아지에게는 수의학 표준인 **BCS**가 있습니다. 단순히 몸무게 수치만으로는 아이의 근육량과 골격을 다 설명할 수 없기 때문입니다. BCS는 보통 1단계(기아 상태)부터 9단계(고도 비만)로 나뉩니다.</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>BCS 4-5단계(이상적):</strong> 갈비뼈가 눈에 보이지는 않지만 살짝 만졌을 때 형태가 느껴지며, 위에서 보았을 때 모래시계처럼 잘록한 허리 라인이 있는 상태입니다.</li>
              <li><strong>BCS 6-7단계(과체중):</strong> 갈비뼈 위에 지방층이 두꺼워져 만지기 어렵고, 배가 아래로 처지기 시작합니다. 이때부터 관절에 가해지는 압력이 급증합니다.</li>
              <li><strong>BCS 8-9단계(고도 비만):</strong> 목, 등, 꼬리 기저부에 상당한 지방이 축적되어 있으며 활동량이 현저히 줄어듭니다.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. 왜 우리 아이는 적게 먹어도 살이 찔까?</h3>
            <p>보호자들이 가장 많이 하소연하는 부분입니다. 하지만 여기에는 과학적인 이유가 있습니다. 첫째, **중성화 수술** 이후 호르몬 변화로 기초대사량이 약 20% 감소합니다. 둘째, 노령기에 접어들면서 근육량이 줄어 에너지를 소비하는 공장이 작아졌기 때문입니다. 셋째, 우리가 무심코 주는 '한 입'의 간식이 아이에게는 치명적일 수 있습니다. 예를 들어, 5kg 소형견에게 주는 치즈 한 조각은 사람으로 치면 햄버거 반 개를 먹는 것과 맞먹는 칼로리 비중을 가집니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 성공적인 강아지 다이어트 3단계 전략</h3>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-8">
              <h4 className="font-black text-gray-800 mb-4">✅ 똑똑한 집사의 다이어트 로드맵</h4>
              <ol className="space-y-4">
                <li><strong>식사량 10%씩 줄이기:</strong> 갑작스러운 감량은 아이의 스트레스를 유발합니다. 일주일 단위로 조금씩 양을 조절하세요.</li>
                <li><strong>간식을 야채로 대체:</strong> 오이, 양배추, 브로콜리 같이 칼로리는 낮고 수분과 식이섬유가 풍부한 간식으로 대체해 포만감을 주어야 합니다.</li>
                <li><strong>저충격 운동 병행:</strong> 비만견은 이미 관절이 약해져 있습니다. 무리한 달리기보다는 평지에서의 천천히 걷기 산책이나 수영 같은 저충격 운동이 적합합니다.</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. 비만 관리가 가져오는 놀라운 변화</h3>
            <p>체중이 10%만 줄어도 강아지의 활동 지수는 비약적으로 상승합니다. 이전보다 더 자주 꼬리를 흔들고, 산책을 즐기며, 숨소리가 편안해집니다. 무엇보다 비만으로 인한 인슐린 저항성이 개선되어 각종 성인병 예방 효과를 거둘 수 있습니다. 지금 바로 '비만도 계산기'로 체크하고, 아이의 20세 건강을 위한 계획을 세워보세요.</p>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default ObesityCalculator;
