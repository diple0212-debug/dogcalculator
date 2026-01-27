
import React, { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

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
    a: "단순히 체중만으로는 판단하기 어렵습니다. 수의학적으로는 BCS(Body Condition Score) 9단계 지표를 활용합니다. 가장 쉬운 방법은 강아지의 갈비뼈 부위를 만져보는 것입니다. 이상적인 체중은 갈비뼈가 눈에 보이지 않지만 살짝 만졌을 때 뼈의 형태가 느껴져야 합니다. 만약 꾹 눌러야 겨우 뼈가 느껴지거나 위에서 봤을 때 허리 곡선이 아예 없다면 비만일 확률이 매우 높습니다. 비만은 관절염과 당뇨의 주원인이므로 관리가 시급합니다."
  },
  {
    q: "사료 권장 급여량보다 적게 주는데도 살이 찌는 이유는 무엇인가요?",
    a: "사료 포장지에 적힌 양은 평균적인 활동량을 기준으로 한 수치일 뿐입니다. 강아지의 기초대사량(RER)은 중성화 여부, 나이, 생활 환경에 따라 30% 이상 차이가 날 수 있습니다. 특히 중성화 수술을 한 경우 호르몬 변화로 기초대사량이 급격히 낮아져 평소보다 10~20% 사료를 줄여야 합니다. 또한 우리가 무심코 주는 간식의 칼로리가 하루 섭취량의 10%를 넘지 않는지 확인해보세요. 사료량 계산기를 통해 정확한 DER을 확인하는 것이 중요합니다."
  },
  {
    q: "분리불안 증상을 방치하면 강아지에게 어떤 문제가 생기나요?",
    a: "분리불안은 단순한 심리적 불편함을 넘어 전신 건강에 악영향을 미칩니다. 극도의 공포 상태에서는 코르티솔이라는 스트레스 호르몬이 과다 분비되어 심박수 증가, 면역력 저하, 소화 불량을 일으킵니다. 지속적인 하울링은 성대 질환을 유발하고, 문이나 벽을 긁는 행동은 치아 파손과 발톱 부상으로 이어집니다. 무엇보다 보호자와의 신뢰 관계가 무너져 파행적인 행동으로 고착될 수 있으므로, 조기에 훈련이나 상담을 받는 것이 필수적입니다."
  },
  {
    q: "노령견의 나이 기준은 몇 살부터이며, 어떤 관리가 필요한가요?",
    a: "보통 소형견은 10~12세, 대형견은 7~8세부터 노령견(Senior)으로 분류합니다. 이 시기에는 신진대사가 느려지므로 고단백보다는 소화가 잘 되는 고품질 단백질 사료로 교체하는 것이 좋습니다. 또한 안구 혼탁(백내장), 치아 질환, 관절 통증이 흔히 발생하므로 6개월에 한 번은 정기 검진을 받아야 합니다. 무엇보다 인지 기능 저하(치매) 예방을 위해 무리한 운동보다는 가벼운 노즈워크와 산책을 통해 뇌에 지속적인 자극을 주는 것이 수명 연장에 큰 도움이 됩니다."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="text-center py-10">
        <h1 className="text-4xl font-black text-gray-800 mb-4">자주 묻는 질문 (FAQ)</h1>
        <p className="text-gray-500 text-lg">보호자들이 가장 궁금해하는 반려견 건강 상식 모음</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-orange-50 transition-colors"
            >
              <span className="text-lg font-black text-gray-800 pr-4">Q. {faq.q}</span>
              <svg className={`w-6 h-6 text-orange-500 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <div className="bg-gray-800 text-white rounded-3xl p-8 md:p-12 text-center space-y-4">
        <h3 className="text-2xl font-black">더 궁금한 내용이 있으신가요?</h3>
        <p className="opacity-80">AI 건강 상담소에서 똑똑한 집사에게 실시간으로 질문해 보세요!</p>
        <div className="pt-4">
          <a href="/health-advisor" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-2xl shadow-xl transition-all">AI 상담소 바로가기</a>
        </div>
      </div>

      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default FAQ;
