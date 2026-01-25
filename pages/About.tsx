
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
      <PageMeta title="사이트 소개 | 똑똑한 집사의 철학과 전문성" description="반려견 건강 관리 전문 플랫폼 똑똑한 집사를 소개합니다. 수의학적 기초 지식과 IT 기술을 결합하여 올바른 반려 문화에 기여합니다." />
      <div className="w-full max-w-3xl mx-auto space-y-10 animate-in fade-in duration-700">
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
          <div className="h-48 bg-orange-500 flex items-center justify-center">
            <h1 className="text-4xl font-black text-white">About Us</h1>
          </div>
          <div className="p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-black text-gray-800">"반려견의 시간을 더 건강하게"</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                똑똑한 집사는 보호자가 강아지의 건강 상태를 객관적으로 파악하고,<br className="hidden md:block"/>
                과학적인 근거를 바탕으로 케어할 수 있도록 돕는 디지털 헬스케어 도우미입니다.
              </p>
            </div>

            <hr className="border-gray-100" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">🩺</div>
                <h3 className="font-bold text-gray-800">의학적 기초</h3>
                <p className="text-sm text-gray-500 leading-relaxed">미국동물병원협회(AAHA) 및 국내외 수의학 가이드를 기반으로 계산기를 설계합니다.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">🤖</div>
                <h3 className="font-bold text-gray-800">AI 기술 결합</h3>
                <p className="text-sm text-gray-500 leading-relaxed">최신 AI 기술을 활용하여 증상별 초기 대처법과 맞춤형 건강 조언을 제공합니다.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">🤝</div>
                <h3 className="font-bold text-gray-800">신뢰와 책임</h3>
                <p className="text-sm text-gray-500 leading-relaxed">정확한 정보 전달을 최우선으로 하며, 전문가 상담을 위한 가이드 역할을 수행합니다.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="font-black text-gray-800 mb-4 text-xl">우리의 미션</h3>
              <p className="text-gray-600 leading-loose">
                단순히 숫자를 계산하는 도구를 넘어, 보호자가 반려견의 '노화'와 '질병'을 미리 준비하고 대응할 수 있는 지식 창고가 되는 것입니다. 똑똑한 집사는 모든 반려견이 보호자의 따뜻한 배려 속에서 더 오래, 더 건강하게 우리 곁에 머물기를 진심으로 바랍니다.
              </p>
            </div>
            
            <p className="text-center text-sm text-gray-400">
              Contact: support@dogcalculator.co.kr
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
