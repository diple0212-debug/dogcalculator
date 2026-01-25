
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', description);
  return null;
};

const breeds = [
  { name: '품종 선택 (선택 사항)', weight: '' },
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
  const [selectedBreed, setSelectedBreed] = useState<string>('품종 선택 (선택 사항)');
  const [result, setResult] = useState<{ status: string; message: string; color: 'green' | 'yellow' | 'red' } | null>(null);

  const calculateObesity = (e: React.FormEvent) => {
    e.preventDefault();
    const current = parseFloat(currentWeight);
    const ideal = parseFloat(idealWeight);

    if (isNaN(current) || isNaN(ideal) || current <= 0 || ideal <= 0) {
      setResult({ status: '오류', message: '유효한 체중을 입력해주세요.', color: 'red' });
      return;
    }

    const overweightPercentage = ((current - ideal) / ideal) * 100;
    if (overweightPercentage < 10) {
      setResult({ status: '정상 체중', message: '아주 건강한 체중이에요! 현재 상태를 유지하는 것이 중요합니다.', color: 'green' });
    } else if (overweightPercentage <= 20) {
      setResult({ status: '과체중', message: `이상 체중보다 약 ${overweightPercentage.toFixed(1)}% 무겁습니다. 사료량을 10% 정도 줄이고 활동량을 늘려주세요.`, color: 'yellow' });
    } else {
      setResult({ status: '비만', message: `위험! 이상 체중보다 ${overweightPercentage.toFixed(1)}% 초과되었습니다. 관절 및 심장 질환의 위험이 매우 높으니 다이어트가 시급합니다.`, color: 'red' });
    }
  };

  return (
    <>
      <PageMeta title="강아지 비만도 계산기 | BCS 체크 및 비만 관리 가이드" description="우리 강아지가 비만일까? 몸무게와 품종별 권장 체중을 비교하여 비만도를 계산하고 수의학적 BCS 단계별 건강 관리법을 알아보세요." />
      <div className="w-full max-w-2xl mx-auto space-y-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-orange-100">
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase">Weight Check</span>
            <h1 className="text-3xl font-black text-gray-800 mt-4">비만도 계산기</h1>
          </div>

          <form onSubmit={calculateObesity} className="space-y-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <label className="text-sm font-bold text-gray-600 mb-2 block">품종 선택 (평균 데이터 입력)</label>
                <select value={selectedBreed} onChange={(e) => {
                  setSelectedBreed(e.target.value);
                  const breed = breeds.find(b => b.name === e.target.value);
                  if (breed) setIdealWeight(breed.weight);
                }} className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-400">
                  {breeds.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 ml-1">현재 체중 (kg)</label>
                  <input type="number" step="0.1" value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} placeholder="예: 5.2" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 ml-1">이상적 체중 (kg)</label>
                  <input type="number" step="0.1" value={idealWeight} onChange={(e) => setIdealWeight(e.target.value)} placeholder="직접 입력 가능" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all text-xl">
              결과 확인하기
            </button>
          </form>

          {result && (
            <div className={`mt-8 p-6 rounded-3xl border-2 text-center ${
              result.color === 'green' ? 'bg-green-50 border-green-200' :
              result.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'
            }`}>
              <h2 className={`text-2xl font-black mb-2 ${
                result.color === 'green' ? 'text-green-600' :
                result.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
              }`}>{result.status}</h2>
              <p className="text-gray-700 leading-relaxed font-medium">{result.message}</p>
            </div>
          )}
        </div>

        <AdPlaceholder placement="중단" />

        <section className="space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6">우리 강아지, 비만이 왜 위험할까요?</h2>
            <div className="prose prose-orange max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>강아지의 비만은 단순한 외모의 문제가 아닙니다. 전문가들은 체중이 10%만 초과해도 강아지의 수명이 최대 2년까지 단축될 수 있다고 경고합니다.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex gap-4 p-4 bg-orange-50 rounded-2xl">
                  <span className="text-2xl">🦴</span>
                  <div>
                    <h3 className="font-bold text-gray-800">관절 및 척추 질환</h3>
                    <p className="text-sm">슬개골 탈구, 디스크 등 근골격계 질환의 주원인이 됩니다.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-orange-50 rounded-2xl">
                  <span className="text-2xl">🫀</span>
                  <div>
                    <h3 className="font-bold text-gray-800">심혈관 및 호흡기</h3>
                    <p className="text-sm">지방이 기관지를 압박하여 호흡 곤란이나 심장 비대증을 유발합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-800 mb-6">눈으로 보는 BCS 단계</h2>
            <p className="text-sm text-gray-500 mb-6">BCS(Body Condition Score)는 수의학에서 사용하는 강아지 비만도 지표입니다.</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-bold text-blue-600">단계 1-3: 저체중</span>
                <span className="text-sm text-gray-600">갈비뼈가 뚜렷하게 보이고 지방이 거의 없음</span>
              </div>
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-green-50 rounded-xl">
                <span className="font-bold text-green-600">단계 4-5: 이상적</span>
                <span className="text-sm text-gray-600">위에서 봤을 때 허리 라인이 매끈하고 갈비뼈가 만져짐</span>
              </div>
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-bold text-yellow-600">단계 6-7: 과체중</span>
                <span className="text-sm text-gray-600">갈비뼈를 찾기 힘들고 허리 경계가 모호함</span>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="font-bold text-red-600">단계 8-9: 비만</span>
                <span className="text-sm text-gray-600">목과 꼬리 기부에 지방이 두껍고 복부가 팽창됨</span>
              </div>
            </div>
          </div>
        </section>
        
        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default ObesityCalculator;
