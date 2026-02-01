
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

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "강아지 나이 계산, 왜 사람과 단순히 7배 차이가 아닌가요?",
    a: "강아지의 생애 주기는 사람과 다릅니다. 생애 첫 1~2년 동안 신체적, 성적으로 급격히 성숙하며 이 시기는 사람의 약 15~24세에 해당합니다. 이후 노화 속도는 견종의 크기에 따라 달라집니다. 소형견은 더 오래 살지만 천천히 늙고, 대형견은 늦게 성숙하지만 5~6세 이후부터 노화가 매우 빠르게 진행됩니다. 따라서 똑똑한 집사의 계산기는 최신 수의학 데이터를 기반으로 크기별 가중치를 적용하여 정확한 환산치를 제공합니다."
  },
  {
    q: "우리 강아지가 비만인지 집에서 어떻게 정확히 알 수 있나요?",
    a: "단순히 체중만으로는 판단하기 어렵습니다. 수의학적으로는 BCS(Body Condition Score) 9단계 지표를 활용합니다. 가장 쉬운 방법은 강아지의 갈비뼈 부위를 만져보는 것입니다. 이상적인 체중은 갈비뼈가 눈에 보이지 않지만 살짝 만졌을 때 뼈의 형태가 느껴져야 합니다. 만약 꾹 눌러야 겨우 뼈가 느껴지거나 위에서 봤을 때 허리 곡선이 아예 없다면 비만일 확률이 매우 높습니다."
  },
  {
    q: "사료 권장 급여량보다 적게 주는데도 살이 찌는 이유는 무엇인가요?",
    a: "사료 포장지에 적힌 양은 평균적인 활동량을 기준으로 한 수치일 뿐입니다. 중성화 수술을 한 경우 호르몬 변화로 기초대사량이 급격히 낮아져 평소보다 10~20% 사료를 줄여야 합니다. 또한 우리가 무심코 주는 간식의 칼로리가 하루 섭취량의 10%를 넘지 않는지 확인해보세요. 사료량 계산기를 통해 정확한 DER을 확인하는 것이 중요합니다."
  },
  {
    q: "강아지 발바닥 '꼬순내'의 정체는 무엇인가요?",
    a: "이 냄새는 강아지 발바닥에 서식하는 '슈도모나스'나 '프로테우스' 박테리아 때문입니다. 강아지는 발바닥에서만 땀이 나는데, 습한 환경에서 박테리아가 번식하며 특유의 고소한 향을 냅니다. 정상적인 수준이면 문제가 없으나, 냄새가 너무 심하고 발을 과하게 핥는다면 습진이나 지간염일 수 있으니 주의 깊게 관찰해 주세요."
  },
  {
    q: "강아지에게 절대 주면 안 되는 금기 음식은?",
    a: "초콜릿(테오브로민 중독), 포도/건포도(급성 신부전), 양파/마늘(적혈구 파괴), 자일리톨(저혈당 쇼크), 마카다미아 등이 대표적입니다. 소량이라도 섭취했다면 즉시 동물병원을 방문하여 구토 유발 처치를 받아야 합니다."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <PageMeta 
        title="반려견 건강 FAQ | 초보 집사를 위한 수의학 기초 상식 백과" 
        description="강아지 나이, 비만 관리, 사료량, 행동 교정 등 보호자들이 가장 많이 묻는 15가지 질문에 대한 전문가의 답변. 똑똑한 집사가 알려주는 올바른 반려 가이드." 
      />
      <div className="max-w-4xl mx-auto space-y-10 px-4">
        <div className="text-center py-10">
          <h1 className="text-4xl font-black text-gray-800 mb-4 tracking-tight">강아지 건강 백과 FAQ</h1>
          <p className="text-gray-500 text-lg">초보 보호자들이 가장 궁금해하는 <span className="text-orange-500 font-bold">핵심</span> 질문</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[1.5rem] shadow-sm border border-orange-100 overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-orange-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-800 pr-4">Q. {faq.q}</span>
                <svg className={`w-6 h-6 text-orange-500 shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === idx && (
                <div className="p-6 bg-orange-50/30 border-t border-orange-50 animate-in slide-in-from-top duration-300">
                  <p className="text-gray-600 leading-loose text-lg whitespace-pre-wrap">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <AdPlaceholder placement="중단" />

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <div className="prose prose-orange max-w-none text-gray-600 leading-loose">
            <h2 className="text-3xl font-black text-gray-800 border-l-8 border-orange-500 pl-4 mb-8">똑똑한 보호자가 아이의 수명을 결정합니다</h2>
            
            <p>강아지는 사람보다 약 5배에서 7배 빠른 시간을 살아갑니다. 보호자의 하루는 강아지에게 거의 일주일과 같은 무게감을 가집니다. 그렇기 때문에 우리가 무심코 지나치는 사소한 습관들이 아이의 건강에 지대한 영향을 미칩니다. 이 FAQ 섹션은 단순한 정보를 넘어, 반려견과 함께하는 20년의 여정을 위한 지침서가 되길 희망하며 작성되었습니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. 건강 관리는 '수치'에서 시작됩니다</h3>
            <p>막연히 "우리 애가 좀 통통한가?"라고 생각하는 것과, '비만도 계산기'를 통해 이상 체중보다 20% 초과했다는 사실을 아는 것은 실천의 차이를 만듭니다. 수치는 거짓말을 하지 않습니다. 매주 몸무게를 재고, 정해진 사료량을 급여하는 것만으로도 수많은 질병을 예방할 수 있습니다. 특히 심장 질환이나 관절염은 체중 관리가 치료의 절반 이상을 차지할 정도로 중요합니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. 행동의 이면을 읽는 눈</h3>
            <p>강아지가 바닥을 긁거나, 이유 없이 짖거나, 자신의 발을 핥는 행위는 모두 이유가 있습니다. 많은 경우 이는 신체적 통증이나 심리적 불안의 표현입니다. 예를 들어, 갑자기 소변 실수를 하는 것은 반항이 아니라 방광염의 신호일 수 있습니다. 보호자는 '왜 저럴까'라는 질문을 던지기 전에 '어디가 불편할까'를 먼저 고민해야 합니다. '분리불안 테스트'나 'MBTI 테스트'는 이런 소통의 어려움을 해결해주는 훌륭한 도구가 될 것입니다.</p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. 먹거리가 곧 생명입니다</h3>
            <p>사료는 단순한 밥이 아니라 아이의 세포를 만드는 재료입니다. 사료 뒷면의 성분표를 읽는 법을 익히세요. 육분(Meal)보다는 생육이 먼저 기재된 사료, 합성 보존료보다는 천연 토코페롤을 사용한 사료를 선택하는 안목이 필요합니다. 또한 '사료량 계산기' 결과에 맞춰 일정한 시간에 급여하는 습관은 강아지의 소화기 건강뿐만 아니라 심리적 안정감(예측 가능한 생활)에도 큰 도움을 줍니다.</p>

            <div className="bg-gray-800 text-white rounded-[2.5rem] p-8 md:p-12 text-center space-y-4 shadow-xl my-10">
              <h3 className="text-2xl font-black">사랑은 공부할 때 더 깊어집니다.</h3>
              <p className="opacity-90 max-w-2xl mx-auto leading-relaxed">
                똑똑한 집사는 보호자 여러분의 든든한 파트너가 되고 싶습니다. 
                궁금한 점이 있다면 언제든 AI 상담소나 칼럼 섹션을 활용해 보세요. 
                아이의 꼬리가 더 힘차게 흔들릴 수 있도록 함께 노력하겠습니다.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <Link to="/age" className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-all">나이 계산기</Link>
                <Link to="/obesity" className="bg-white text-gray-800 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all">비만도 체크</Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. 정기검진은 가장 저렴한 보험입니다</h3>
            <p>강아지는 아픔을 참는 동물입니다. 육안으로 증상이 나타났을 때는 이미 질병이 꽤 진행된 경우가 많습니다. 7세 이후부터는 1년에 한 번, 그 이전이라도 2년에 한 번은 정밀 피검사와 엑스레이를 포함한 건강검진을 추천합니다. 초기에 발견된 질병은 관리하기 쉽고 비용도 훨씬 저렴합니다. 여러분의 작은 관심이 우리 아이의 시간을 늘려줍니다.</p>
          </div>
        </section>

        <AdPlaceholder placement="하단" />
      </div>
    </>
  );
};

export default FAQ;
