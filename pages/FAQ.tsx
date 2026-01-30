
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  },
  {
    q: "양치질을 너무 싫어하는데 다른 방법이 없나요?",
    a: "양치질이 가장 확실하지만, 거부감이 심하다면 '먹는 치약'이나 '치석 제거용 껌'을 활용해 보세요. 바르는 형태의 젤 치약은 잇몸에 묻혀만 줘도 효과가 있습니다. 다만 치태가 치석으로 변하면 스케일링 외에는 제거가 불가능하므로, 어릴 때부터 거즈로 닦아주는 연습을 병행하는 것이 좋습니다."
  },
  {
    q: "노령견 치매(CCD)를 예방하는 방법은?",
    a: "뇌를 계속 자극해주는 것이 중요합니다. 매일 같은 코스가 아닌 새로운 산책로를 가거나, 실내에서 노즈워크 장난감을 활용해 코를 사용하게 해주세요. 오메가-3나 항산화제가 포함된 영양제 급여도 도움이 됩니다."
  },
  {
    q: "중성화 수술은 언제 하는 것이 가장 좋나요?",
    a: "보통 성성숙이 이루어지기 전인 생후 6~9개월 사이를 권장합니다. 암컷의 경우 첫 생리 전 수술 시 유선종양 예방 효과가 매우 높습니다. 다만 대형견의 경우 뼈 성장을 고려하여 1세 이후를 권장하기도 하므로 주치의와 상의가 필요합니다."
  },
  {
    q: "여름철 산책 시 주의사항은?",
    a: "강아지는 사람보다 지면과 가깝고 발바닥으로만 열을 배출하기 때문에 열사병에 매우 취약합니다. 낮 시간 뜨거운 아스팔트는 발바닥 화상을 입힐 수 있으므로, 해가 진 후나 이른 아침에 산책하는 것이 좋으며 항상 시원한 물을 지참해 주세요."
  },
  {
    q: "강아지 풀을 뜯어 먹는데 괜찮은가요?",
    a: "대부분의 경우 섬유질 섭취나 소화 불량을 해소하기 위한 본능적인 행동입니다. 하지만 산책로의 풀은 제초제나 농약이 묻어 있을 수 있고 기생충 위험이 있으므로 깨끗한 곳이 아니라면 제지하는 것이 안전합니다."
  },
  {
    q: "눈물 자국이 너무 심한데 원인이 뭘까요?",
    a: "알레르기 반응(식품, 먼지), 누관 폐쇄, 속눈썹 찔림 등이 원인일 수 있습니다. 사료를 단일 단백질(가수분해 사료 등)로 바꿔보거나 눈 주변을 청결하게 유지해 주세요. 붉게 착색된 곳은 박테리아 번식이 쉬우므로 건조가 필수입니다."
  },
  {
    q: "슬개골 탈구 예방을 위해 집에서 할 수 있는 일은?",
    a: "바닥에 미끄럼 방지 매트를 깔아주고, 침대나 소파 옆에는 강아지 전용 계단을 설치해 주세요. 무엇보다 과체중은 관절에 치명적이므로 비만도 계산기를 통해 적정 체중을 유지하는 것이 가장 큰 예방법입니다."
  },
  {
    q: "환절기 강아지도 감기에 걸리나요?",
    a: "네, 켄넬코프라 불리는 전염성 기관지염이나 감기 증상을 보일 수 있습니다. 기침이 심하거나 콧물이 나고식욕이 떨어진다면 진료가 필요합니다. 실내 습도를 50% 이상으로 유지해 호흡기 점막을 보호해 주세요."
  },
  {
    q: "강아지가 자기 발을 자꾸 핥는 이유는?",
    a: "습진, 곰팡이 감염 같은 피부 문제일 수도 있고, 분리불안이나 지루함으로 인한 심리적 요인일 수도 있습니다. 발가락 사이가 붉거나 냄새가 난다면 피부염을 의심하고, 그렇지 않다면 산책량을 늘려 스트레스를 해소해 주세요."
  },
  {
    q: "강아지 수명을 늘리는 가장 좋은 습관은?",
    a: "정기적인 구강 관리(양치질), 체중 관리, 그리고 보호자와의 정서적 교감입니다. 치주 질환은 심장 질환의 원인이 되며, 비만은 만병의 근원입니다. 매일 30분 이상의 질 좋은 산책과 규칙적인 식습관이 아이의 20세를 만듭니다."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-10 px-4">
      <div className="text-center py-10">
        <h1 className="text-4xl font-black text-gray-800 mb-4 tracking-tight">강아지 건강 백과 FAQ</h1>
        <p className="text-gray-500 text-lg">초보 보호자들이 가장 궁금해하는 <span className="text-orange-500 font-bold">15가지</span> 질문</p>
      </div>

      <div className="space-y-4 pb-12">
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

      {/* AI 상담소 바로가기 제거 후 신뢰성 있는 안내 문구로 대체 */}
      <div className="bg-orange-500 text-white rounded-[2.5rem] p-8 md:p-12 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl font-black">건강한 반려 생활, 똑똑한 집사가 함께합니다.</h3>
        <p className="opacity-90 max-w-2xl mx-auto leading-relaxed">
          본 사이트에서 제공하는 정보와 계산 결과는 일반적인 수의학적 데이터를 기반으로 합니다. 
          반려견의 개별적인 건강 상태나 질병 유무에 따라 차이가 있을 수 있으므로, 
          정확한 진단과 치료는 반드시 가까운 동물병원을 방문하여 전문가와 상담하시기 바랍니다.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link to="/" className="bg-white text-orange-500 px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-50 transition-colors">홈으로 가기</Link>
          <Link to="/age" className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-700 transition-colors">나이 계산하기</Link>
        </div>
      </div>

      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default FAQ;
