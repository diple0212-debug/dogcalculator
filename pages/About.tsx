
import React from 'react';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', description);
  return null;
};

const About: React.FC = () => {
  return (
    <>
      <PageMeta title="사이트 소개 | 똑똑한 집사의 철학과 전문성 가이드" description="반려견 건강 관리 전문 플랫폼 똑똑한 집사를 소개합니다. 수의학적 기초 지식과 최신 AI 기술을 결합하여 반려견의 건강한 삶을 지원하는 우리의 사명을 확인하세요." />
      <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
          <div className="h-64 bg-gradient-to-br from-orange-400 to-orange-600 flex flex-col items-center justify-center text-white px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">똑똑한 집사의 약속</h1>
            <p className="text-lg opacity-90 font-medium">"우리는 데이터로 강아지의 언어를 해석합니다."</p>
          </div>
          <div className="p-8 md:p-16 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-gray-800 text-center">왜 똑똑한 집사가 필요한가요?</h2>
              <p className="text-gray-600 leading-loose text-lg text-center max-w-3xl mx-auto">
                강아지는 아파도 말을 할 수 없습니다. 보호자가 평소에 객관적인 수치로 아이의 건강을 체크하는 것이 조기 발견의 핵심입니다. 똑똑한 집사는 복잡한 수의학 공식들을 보호자들이 손쉽게 사용할 수 있도록 디지털 도구로 재탄생시켰습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mx-auto text-4xl mb-6 group-hover:scale-110 transition-transform shadow-sm">🔬</div>
                <h3 className="font-black text-gray-800 text-xl mb-3">근거 중심 데이터</h3>
                <p className="text-gray-500 text-sm leading-relaxed">미국동물병원협회(AAHA)와 세계소동물수의사회(WSAVA)의 표준 가이드라인을 철저히 준수하여 모든 계산 공식을 설계했습니다.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto text-4xl mb-6 group-hover:scale-110 transition-transform shadow-sm">🧠</div>
                <h3 className="font-black text-gray-800 text-xl mb-3">최신 AI 엔진</h3>
                <p className="text-gray-500 text-sm leading-relaxed">단순한 수치 계산을 넘어, Google Gemini AI를 통해 증상별 초기 대응 및 맞춤형 행동 가이드를 실시간으로 제공합니다.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mx-auto text-4xl mb-6 group-hover:scale-110 transition-transform shadow-sm">🌱</div>
                <h3 className="font-black text-gray-800 text-xl mb-3">지속 가능한 관리</h3>
                <p className="text-gray-500 text-sm leading-relaxed">한 번의 계산으로 끝나지 않고, 보호자가 강아지의 평생 건강 로드맵을 그릴 수 있도록 다양한 정보성 콘텐츠를 지속적으로 업데이트합니다.</p>
              </div>
            </div>

            <div className="bg-orange-50 p-10 rounded-[2.5rem] border border-orange-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h3 className="font-black text-gray-800 mb-6 text-2xl">우리의 미션 (Our Mission)</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p><strong>첫째,</strong> 모든 반려견 보호자에게 정확하고 신뢰할 수 있는 건강 정보를 무상으로 제공하는 것입니다.</p>
                <p><strong>둘째,</strong> 수의학적 기초 지식의 문턱을 낮추어 반려견의 질병 예방 및 조기 치료율을 높이는 데 기여하는 것입니다.</p>
                <p><strong>셋째,</strong> 단순한 웹 도구를 넘어 반려견과 보호자의 행복한 동행을 돕는 가장 든든한 조력자가 되는 것입니다.</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-100 flex flex-col items-center gap-4 text-center">
              <p className="text-gray-400 text-sm">운영 및 제휴 문의: <span className="text-orange-500 font-bold">support@dogcalculator.co.kr</span></p>
              <div className="flex gap-4">
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-400">Ver 1.2.0</span>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-400">Since 2024</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
