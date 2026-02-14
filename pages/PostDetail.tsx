
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS_DATA } from './Posts.tsx';
import AdPlaceholder from '../components/AdPlaceholder.tsx';

const POST_CONTENTS: Record<string, React.ReactNode> = {
  '12': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"내 아이의 20살 산책을 결정하는 것은 집사의 지갑이 아니라 '혜안'입니다."</p>
      <p>요즘 반려동물 쇼핑몰에 들어가면 사료보다 영양제 종류가 더 많아 보입니다. 관절, 피부, 장, 눈, 심지어 치매 예방까지... 마치 영양제만 먹이면 아이의 모든 질병을 막을 수 있을 것 같은 착각이 들기도 하죠. 하지만 무분별한 영양제 급여는 오히려 강아지의 간과 신장에 큰 무리를 줄 수 있습니다. 오늘 '똑똑한 집사'에서는 2026년 수의학 트렌드를 바탕으로 **부위별 필수 영양 성분**과 **좋은 제품을 고르는 3가지 기준**을 완벽 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 부위별 필수 영양 성분 가이드</h2>
      
      <h3 className="text-xl font-bold text-gray-800">● 관절 건강 (슬개골 및 고관절)</h3>
      <p>대한민국 소형견들의 숙명인 슬개골 탈구 예방을 위해 가장 많이 찾는 분야입니다. 핵심 성분은 **글루코사민, 콘드로이친, MSM(식이유황)**입니다. 글루코사민은 연골 형성을 돕고, 콘드로이친은 연골 파괴를 억제합니다. 최근에는 항염 효과가 뛰어난 '초록입홍합' 추출물이 각광받고 있습니다. 단, 이미 탈구 3~4단계인 경우에는 영양제보다 수술과 근력 강화가 우선임을 잊지 마세요.</p>

      <h3 className="text-xl font-bold text-gray-800">● 피부 및 피모 (알러지 및 모질)</h3>
      <p>피부 가려움증이나 푸석한 털이 고민이라면 **오메가-3(EPA/DHA)**가 정답입니다. 오메가-3는 강력한 항염 작용으로 피부 장벽을 튼튼하게 합니다. 이때 중요한 것은 식물성(들깨 등)보다는 동물성(연어, 크릴오일)이 강아지 체내 흡수율이 훨씬 높다는 점입니다. 함량에서 EPA와 DHA의 합이 충분한지 반드시 확인하세요.</p>

      <h3 className="text-xl font-bold text-gray-800">● 소화 및 면역 (장 건강)</h3>
      <p>면역 세포의 70%가 집중된 장을 위해 **프로바이오틱스(유산균)**는 선택이 아닌 필수입니다. 단순히 균수가 많은 것보다 '장까지 살아가는 생존율'이 중요합니다. 또한 유산균의 먹이가 되는 '프리바이오틱스'가 포함된 '신바이오틱스' 제품인지 확인하는 것이 2026년 집사들의 기본 상식입니다.</p>

      <div className="bg-emerald-50 p-6 rounded-3xl border-l-4 border-emerald-400 shadow-sm text-gray-700 my-6">
        <h4 className="font-bold text-emerald-800 mb-2">🚨 영양제 선택 시 피해야 할 성분</h4>
        <ul className="text-sm m-0 space-y-2">
          <li>- <strong>인공 감미료 및 향료:</strong> 기호성을 위해 넣는 과도한 당분은 비만을 유발합니다.</li>
          <li>- <strong>자일리톨:</strong> 아주 적은 양으로도 강아지에게 치명적인 독성을 보입니다.</li>
          <li>- <strong>불명확한 원산지:</strong> '중국산 저가 원료'가 포함되지 않았는지, 제조사가 공개하는지 확인하세요.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 실패 없는 영양제 선택 3대 기준</h2>
      
      <h3 className="text-xl font-bold text-gray-800">① NASC 인증 마크 확인</h3>
      <p>NASC(National Animal Supplement Council)는 미국 비영리 동물 영양제 위원회로, 매우 까다로운 품질 관리 기준을 통과한 제품에만 노란색 인증 마크를 부여합니다. 이 마크가 있다면 일단 성분 함량의 정직함과 제조 시설의 위생은 믿어도 좋습니다.</p>

      <h3 className="text-xl font-bold text-gray-800">② 휴먼 그레이드(Human Grade)인가?</h3>
      <p>사람이 먹을 수 있는 식재료로 만들었는지를 뜻합니다. '사료 등급'의 원료는 가공 과정에서 영양소가 파괴되거나 불순물이 섞일 가능성이 높습니다. 원료 하나하나가 식품 공정에서 관리되는 제품을 선택하세요.</p>

      <h3 className="text-xl font-bold text-gray-800">③ 개별 포장 및 산패 방지</h3>
      <p>특히 오메가-3 같은 유지류 영양제는 공기와 닿는 순간 '산패(부패)'가 시작됩니다. 산패된 기름은 오히려 발암 물질로 작용할 수 있습니다. 한 알씩 개별 포장(PTP) 되어 있거나 산화 방지 기술이 적용된 통 형태의 제품을 고르는 것이 안전합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">3. 집사가 저지르는 흔한 실수 2가지</h2>
      <p>첫째, **사람 영양제를 나눠주는 것**입니다. 사람용 영양제는 강아지에게 너무 고함량이며, 특히 알파리포산이나 자일리톨 같은 성분은 강아지에게 치명적인 중독을 일으킵니다. 둘째, **너무 많은 영양제를 한꺼번에 주는 것**입니다. 과유불급입니다. 한 번에 3종류 이상의 영양제를 급여하면 간 수치가 치솟을 수 있습니다. 우선순위를 정해 1~2가지를 3개월 이상 꾸준히 먹여보고 반응을 보세요.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">결론: 영양제는 보조일 뿐, 기본은 식단과 운동입니다</h3>
      <p>아무리 비싼 영양제를 먹여도 사료의 질이 낮거나 하루 10분도 산책하지 않는다면 효과는 반감됩니다. 똑똑한 집사의 '사료량 계산기'로 적정량을 급여하고, 매일의 산책으로 근력을 키우는 것이 최상의 영양제임을 기억하세요. 영양제는 그 건강한 기초 위에 얹는 '든든한 지원군'입니다. 오늘 알려드린 기준으로 우리 아이의 노후를 더 튼튼하게 설계해 보세요.</p>
    </div>
  ),
  '11': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"하얀 털 위에 남은 붉은색 눈물 자국, 단순한 미용 문제일까요?"</p>
      <p>말티즈, 비숑 프리제, 푸들을 키우는 집사들에게 가장 큰 고민 중 하나는 바로 '눈물 자국'입니다. 예쁘게 미용을 해두어도 하루만 지나면 눈가가 붉게 물들어 속상해하시는 분들이 많죠. 하지만 눈물 자국은 단순히 미관상의 문제를 넘어, 반려견의 체내에서 보내는 **중요한 건강 신호**일 수 있습니다. 오늘 '똑똑한 집사'에서는 눈물 자국이 생기는 과학적 원인부터, 효과적으로 지우고 관리하는 법까지 2026년 최신 수의학 정보를 바탕으로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 눈물 자국이 붉은색인 과학적 이유: 포르피린</h2>
      <p>강아지의 눈물이 왜 붉은색이나 갈색으로 변하는지 궁금하셨죠? 범인은 바로 **'포르피린(Porphyrins)'**이라는 성분입니다. 포르피린은 철분을 함유한 분자로, 적혈구가 파괴되면서 생기는 부산물입니다. 강아지는 이 성분을 주로 담즙이나 대변으로 배출하지만, 눈물이나 타액, 소변을 통해서도 일부 배출됩니다. 이 성분이 공기 중의 산소와 만나 산화되거나, 털에 서식하는 박테리아와 반응하면서 붉은 자국을 남기게 되는 것입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 눈물이 과도하게 흐르는 주요 원인</h2>
      <p>눈물 자국을 없애려면 먼저 눈물이 왜 이렇게 많이 흐르는지(유루증) 원인을 파악해야 합니다.</p>
      <ul className="list-disc pl-5 space-y-4">
        <li><strong>해부학적 구조:</strong> 눈물샘이 좁거나 막혀서 눈물이 코로 배출되지 못하고 밖으로 넘치는 경우입니다. 단두종이나 특정 소형견에게 흔합니다.</li>
        <li><strong>속눈썹 자극:</strong> 속눈썹이 안으로 굽어 자라거나(안검내반), 이상 위치에서 자라 눈을 계속 찌르면 보호 반응으로 눈물이 과도하게 생성됩니다.</li>
        <li><strong>알레르기 반응:</strong> 환경적 요인(먼지, 꽃가루)이나 음식 알레르기가 있을 때 눈가가 붓고 눈물이 늘어납니다.</li>
        <li><strong>스트레스와 피로:</strong> 면역력이 떨어지면 포르피린 배출량이 늘어날 수 있습니다.</li>
      </ul>

      <div className="bg-blue-50 p-6 rounded-3xl border-l-4 border-blue-400 shadow-sm text-gray-700 my-6">
        <h4 className="font-bold text-blue-800 mb-2">💡 집사의 체크리스트: 우리 아이 눈물 자국 원인은?</h4>
        <p className="text-sm m-0 leading-relaxed">
          1. 눈가에서 퀘퀘한 냄새가 나나요? (박테리아/곰팡이 감염 의심)<br/>
          2. 특정 사료를 먹인 뒤에 심해졌나요? (음식 알레르기 의심)<br/>
          3. 산책 시에만 눈물이 더 나나요? (외부 자극/먼지 알레르기 의심)<br/>
          4. 눈을 자주 찡그리거나 긁나요? (각막 상처/속눈썹 찔림 의심)
        </p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 식단 개선: 가장 확실한 해결책</h2>
      <p>경험 많은 집사들은 압니다. 사료만 바꿔도 눈물이 드라마틱하게 줄어든다는 사실을요. 눈물 자국 관리를 위한 식단 가이드는 다음과 같습니다.</p>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>가수분해 사료 활용:</strong> 단백질 분자를 잘게 쪼개 몸에서 알레르기로 인식하지 못하게 만든 사료입니다.</li>
        <li><strong>저알러지 단백질 선택:</strong> 흔한 닭고기나 소고기보다는 연어, 오리, 캥거루, 곤충 사료 등 아이에게 맞는 새로운 단백질원을 찾아보세요.</li>
        <li><strong>인공 첨가물 배제:</strong> 인공 향료, 색소, 방부제는 간에 부담을 주어 포르피린 배출을 늘릴 수 있습니다.</li>
        <li><strong>깨끗한 물 급여:</strong> 수돗물의 금속 성분이 포르피린과 반응할 수 있으니 필터링된 정수기 물을 급여하세요.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">4. 올바른 외부 관리 및 청소법</h2>
      <p>이미 생겨버린 자국은 어떻게 관리해야 할까요? 전문가들이 추천하는 방법입니다.</p>
      <p>가장 중요한 원칙은 **'건조함 유지'**입니다. 습한 눈가는 박테리아 번식의 온상입니다. 눈물이 날 때마다 부드러운 거즈나 전용 티슈로 톡톡 두드려 닦아주세요. 시중에 파는 눈물 지우개를 사용할 때는 '타일로신' 같은 항생제 성분이 포함되어 있는지 확인해야 합니다. 장기 복용 시 내성이나 간 손상을 일으킬 수 있어 수의사 처방 없이 사용하는 것은 위험합니다. 천연 성분의 세정제를 사용하고, 눈가 털을 짧게 관리하여 자극을 최소화하는 것이 좋습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">5. 절대 하지 말아야 할 행동</h2>
      <p>인터넷에 떠도는 잘못된 상식 중에는 위험한 것들이 많습니다. **식초나 과산화수소를 희석하여 눈가를 닦는 행위**는 절대 금물입니다. 안구에 치명적인 화상을 입힐 수 있습니다. 또한 사람이 쓰는 미백 화장품 등을 사용하는 것도 강아지의 예민한 피부에는 독극물을 바르는 것과 같습니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">결론: 인내심이 최고의 약입니다</h3>
      <p>눈물 자국은 하루아침에 사라지지 않습니다. 식단을 바꾸고 관리를 시작하더라도, 이미 착색된 털이 자라서 잘려 나갈 때까지 최소 2~4주의 시간이 필요합니다. 아이의 눈물 자국이 심해졌다면 이를 '불편함의 호소'로 받아들이고 원인을 하나씩 제거해 보세요. 집사의 세심한 관찰과 정성이 모여 우리 아이의 환하고 깨끗한 얼굴을 되찾아줄 것입니다.</p>
    </div>
  ),
  '10': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지의 시간은 인간보다 7배 빠르게 흐릅니다. 어느덧 노화가 시작된 우리 아이를 위해 지금 무엇을 해야 할까요?"</p>
      <p>함께 뛰어놀던 어제가 엊그제 같은데, 어느덧 하얘진 눈가와 느려진 발걸음을 보면 집사의 마음은 무거워집니다. 보통 강아지는 7세에서 10세 사이를 기점으로 '시니어' 단계에 진입합니다. 하지만 현대 수의학의 발달로 노화는 더 이상 질병이 아닌 '관리 가능한 과정'이 되었습니다. 2026년 최신 가이드라인을 바탕으로 우리 아이의 노후를 빛나게 해줄 **노령견 건강 관리 필수 체크리스트 7단계**를 정리했습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 정기 검진의 주기를 6개월로 단축하세요</h2>
      <p>노령견에게 1년은 사람의 약 5~7년과 같습니다. 1년에 한 번 하던 건강검진은 이제 부족합니다. 특히 신장 수치(SDMA), 간 수치, 심장 초음파를 포함한 정밀 검진을 6개월 단위로 진행하는 것을 권장합니다. 노령기에 흔한 암이나 만성 질환은 초기 증상이 거의 없기 때문에, 혈액 검사를 통한 조기 발견이 수명 연장의 가장 확실한 열쇠입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 인지 기능 장애(강아지 치매)를 조기에 포착하세요</h2>
      <p>강아지도 치매(CCD, Cognitive Dysfunction Syndrome)를 앓습니다. 밤에 잠을 자지 않고 서성거리거나, 구석에 멍하니 서 있고, 평소 잘 가리던 배변을 실수한다면 이는 단순한 노화가 아닌 신경계 퇴행일 수 있습니다. 항산화제가 풍부한 식단과 꾸준한 '노즈워크' 놀이는 뇌세포의 사멸을 늦추고 삶의 질을 유지하는 데 큰 도움을 줍니다.</p>

      <h2 className="text-2xl font-black text-gray-800">3. 근감소증 예방을 위한 고단백·저칼로리 식단</h2>
      <p>나이가 들면 활동량이 줄어들지만, 근육량을 유지하기 위해서는 여전히 양질의 단백질이 필요합니다. 다만 신장 기능이 저하된 아이라면 단백질 수치를 조절해야 하므로 반드시 '사료량 계산기'와 수의사 상담을 병행하세요. 또한 대사가 느려져 비만이 되기 쉬운데, 비만은 노령견의 관절에 치명적이므로 철저한 체중 관리가 필요합니다.</p>

      <div className="bg-indigo-50 p-6 rounded-3xl border-l-4 border-indigo-400 shadow-sm text-gray-700 my-6">
        <h4 className="font-bold text-indigo-800 mb-2">📝 시니어견을 위한 '매일 건강 일지' 항목</h4>
        <ul className="text-sm m-0 space-y-2">
          <li>- <strong>음수량 확인:</strong> 갑자기 물을 너무 많이 마신다면 당뇨나 신장 질환의 신호일 수 있습니다.</li>
          <li>- <strong>보행 상태 관찰:</strong> 자고 일어났을 때 다리를 저는지, 산책 시 주저앉는지 체크하세요.</li>
          <li>- <strong>호흡수 측정:</strong> 편안하게 잠잘 때 1분당 호흡수가 30회 이상이면 심장 질환을 의심해야 합니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 관절 건강을 위한 환경 리모델링</h2>
      <p>노령견의 관절은 닳아 있는 상태입니다. 미끄러운 바닥은 관절염을 급격히 악화시킵니다. 집 전체에 논슬립 매트를 깔고, 소파와 침대에는 경사가 완만한 슬라이드 계단을 설치하세요. 또한 발바닥 패드 사이의 털을 수시로 깎아주어 미끄러짐으로 인한 부상을 예방하는 것이 필수입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">5. 구강 관리는 전신 건강의 시작입니다</h2>
      <p>치주 질환의 박테리아는 혈류를 타고 심장과 신장으로 이동합니다. 노령견이 밥을 잘 안 먹으려 한다면 입안이 아파서일 가능성이 큽니다. 매일 양치질이 어렵다면 먹는 치약이나 구강 스프레이를 활용하고, 잇몸의 붓기나 출혈 여부를 매일 확인하세요. 구강 건강만 잘 지켜도 기대 수명이 20% 늘어난다는 연구 결과가 있습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">6. 감각 퇴화에 따른 정서적 배려</h2>
      <p>시력이 흐려지는 백내장이나 청력 저하가 찾아오면 강아지는 큰 불안을 느깁니다. 집 안의 가구 배치를 가급적 바꾸지 말고, 아이에게 다가갈 때는 놀라지 않도록 바닥을 가볍게 두드려 진동으로 신호를 주는 등의 세심한 배려가 필요합니다. 안 보이거나 안 들리는 상태에서도 보호자의 '냄새'와 '손길'은 아이에게 최고의 안식처가 됩니다.</p>

      <h2 className="text-2xl font-black text-gray-800">7. 질보다 양이 아닌, '질 높은 산책'</h2>
      <p>체력이 예전 같지 않다고 산책을 중단해서는 안 됩니다. 근육 유지와 정신 건강을 위해 짧고 잦은 산책이 좋습니다. 냄새를 충분히 맡게 해주는 '노즈워크 중심 산책'은 뇌를 자극하여 치매 예방에 탁월합니다. 만약 걷는 것이 힘들다면 개모차(반려견 유모차)를 이용해서라도 바깥 공기를 쐬어주는 것이 우울증 예방에 좋습니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">결론: 가장 소중한 것은 집사의 '관찰'입니다</h3>
      <p>노령견 케어의 핵심은 '어제와 다른 오늘'을 빠르게 발견하는 것입니다. 똑똑한 집사의 다양한 계산기와 가이드를 활용해 객관적인 수치를 기록하고 관리하세요. 아이의 시간이 조금 느리게 흐를 수 있도록, 그리고 남은 여정이 통증이 아닌 평온함으로 채워질 수 있도록 보호자님이 최고의 수호자가 되어주세요. 당신의 세심한 사랑이 아이에게는 세상의 전부입니다.</p>
    </div>
  ),
  '9': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"우리가 맛있게 먹는 음식이 우리 아이에게는 치명적인 독약이 될 수 있습니다."</p>
      <p>반려견은 가족과 같습니다. 그래서 맛있는 것을 먹을 때 옆에서 초롱초롱한 눈망울로 쳐다보면 마음이 약해져 '한 입 정도는 괜찮겠지'라며 음식을 나눠주곤 합니다. 하지만 강아지의 신체 구조와 신진대사 능력은 사람과 근본적으로 다릅니다. 사람이 즐겨 먹는 식재료 중 상당수가 강아지에게는 급성 신부전, 용혈성 빈혈, 심부전 등을 유발하며 생명을 위협할 수 있습니다. 2026년 최신 수의학 정보를 바탕으로 보호자가 반드시 숙지해야 할 **강아지 금기 음식 10가지**를 심도 있게 분석해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 초콜릿 (Chocolate)</h2>
      <p>초콜릿은 가장 잘 알려진 위험 음식이지만, 그 위험성은 여전히 높습니다. 카카오에 함유된 **테오브로민(Theobromine)** 성분 때문입니다. 강아지는 테오브로민을 분해하는 속도가 매우 느려 체내에 축적되면 중추신경계를 자극하고 심장 박동을 급격히 높입니다. 카카오 함량이 높은 다크 초콜릿일수록 위험하며, 섭취 시 구토, 과호흡, 경련, 심장마비를 일으킬 수 있습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 자일리톨 (Xylitol)</h2>
      <p>껌, 사탕, 무설탕 구운 과자에 들어가는 자일리톨은 강아지에게 초콜릿보다 더 위험할 수 있습니다. 강아지가 자일리톨을 먹으면 인슐린이 과다 분비되어 혈당이 급격히 떨어지는 **저혈당 쇼크**가 발생합니다. 소량으로도 30분 이내에 증상이 나타나며, 간 부전을 일으켜 며칠 내에 사망에 이르게 할 수 있는 무서운 성분입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">3. 포도와 건포도 (Grape & Raisin)</h2>
      <p>포도가 강아지에게 왜 독성이 있는지에 대해서는 아직 명확한 원인 물질이 밝혀지지 않았습니다. 하지만 단 한 알의 포도 섭취만으로도 **급성 신부전**을 일으켜 생명이 위태로워지는 사례가 보고되고 있습니다. 껍질, 씨앗뿐만 아니라 말린 건포도 역시 독성이 농축되어 있어 매우 위험합니다. 섭취 후 소변량이 줄어들거나 구토를 한다면 즉시 병원을 가야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">4. 양파, 마늘, 파 (Allium Family)</h2>
      <p>한국 음식에 필수적으로 들어가는 이 식재료들은 강아지의 적혈구를 파괴하는 성분을 포함하고 있습니다. 이는 **용혈성 빈혈**을 유발하여 산소 공급을 차단합니다. 생것뿐만 아니라 익힌 것, 가루 형태도 위험하며, 소변 색이 붉게 변하거나 무기력증을 보인다면 빈혈을 의심해야 합니다. 짜장면이나 고기 요리에 섞인 양파 조각 하나도 소형견에게는 치명적입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">5. 카페인 (Caffeine)</h2>
      <p>커피, 차, 에너지 음료의 카페인은 초콜릿 중독과 유사한 증상을 보입니다. 강아지의 심박수를 높이고 신경계를 과도하게 흥분시켜 혈압 상승과 부정맥을 유발합니다. 컵 바닥에 남은 커피 한 모금도 작은 강아지에게는 위험한 자극이 될 수 있습니다.</p>

      <div className="bg-red-50 p-6 rounded-3xl border-l-4 border-red-400 shadow-sm text-gray-700 my-6">
        <h4 className="font-bold text-red-800 mb-2">🚨 실수로 금기 음식을 먹었을 때 응급 대처법</h4>
        <ul className="text-sm m-0 space-y-2">
          <li>- <strong>억지로 구토 금지:</strong> 부식성 물질이나 날카로운 것이 섞인 경우 식도에 상처를 낼 수 있습니다.</li>
          <li>- <strong>섭취물 확인:</strong> 무엇을, 언제, 얼마나 먹었는지 정확히 파악하여 병원에 알리세요.</li>
          <li>- <strong>즉시 동물병원 방문:</strong> '지켜보자'는 생각은 골든타임을 놓치게 합니다. 24시 응급 병원으로 달려가세요.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">6. 마카다미아 (Macadamia Nuts)</h2>
      <p>마카다미아는 강아지에게 독특한 중독 증상을 보입니다. 뒷다리의 무력감, 몸 떨림, 고열, 구토 등을 유발합니다. 정확한 메커니즘은 밝혀지지 않았지만 신경계에 직접적인 악영향을 미치며, 보통 섭취 후 12시간 이내에 증상이 나타납니다.</p>

      <h2 className="text-2xl font-black text-gray-800">7. 알코올 (Alcohol)</h2>
      <p>강아지의 간은 알코올을 해독할 수 없습니다. 아주 적은 양의 술로도 알코올 중독을 일으켜 구토, 호흡 곤란, 혼수상태, 심지어 사망에 이를 수 있습니다. 특히 맥주에 들어가는 홉(Hop) 성분도 강아지에게 독성이 있으니 절대 주의해야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">8. 익힌 뼈 (Cooked Bones)</h2>
      <p>생뼈와 달리 익힌 뼈는 부러질 때 단면이 매우 날카로운 바늘처럼 변합니다. 이는 강아지의 식도나 위, 장벽을 찔러 **천공**을 일으키거나 장폐색의 원인이 됩니다. 치킨 뼈를 쓰레기통에서 꺼내 먹지 않도록 뚜껑이 있는 쓰레기통을 사용하는 것이 좋습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">9. 아보카도 (Avocado)</h2>
      <p>아보카도의 잎, 씨앗, 껍질에는 '퍼신(Persin)'이라는 독성 성분이 있습니다. 강아지에게는 심각한 설사와 구토를 유발할 수 있으며, 특히 커다란 씨앗은 삼킬 경우 질식하거나 장을 막는 치명적인 사고로 이어집니다.</p>

      <h2 className="text-2xl font-black text-gray-800">10. 소금과 설탕이 과한 가공식품</h2>
      <p>사람이 먹는 햄, 과자 등은 강아지에게 과도한 염분과 당분을 공급합니다. 강아지는 땀으로 염분을 배출할 수 없어 신장에 큰 무리를 주며 전해질 불균형을 일으킵니다. 또한 높은 칼로리는 비만과 당뇨의 주범이 되어 수명을 단축시킵니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">결론: 예방이 가장 훌륭한 사랑입니다</h3>
      <p>강아지는 본능적으로 음식을 탐색합니다. 하지만 그 판단은 보호자의 몫입니다. "이건 괜찮겠지"라는 안일한 생각이 아이의 건강을 해칠 수 있음을 기억하세요. 가장 안전한 것은 강아지 전용 사료와 간식입니다. 똑똑한 집사의 건강 가이드와 함께 우리 아이의 식단을 철저히 관리하여 20살까지 건강하게 함께하시길 응원합니다.</p>
    </div>
  )
};

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = POSTS_DATA.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | 똑똑한 집사 건강 칼럼`;
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) descriptionMeta.setAttribute('content', post.excerpt);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', post.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', post.excerpt);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', window.location.href);

      const scriptId = 'post-structured-data';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Organization",
          "name": "똑똑한 집사"
        },
        "datePublished": post.date.replace(/\./g, '-'),
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
        "publisher": {
          "@type": "Organization",
          "name": "똑똑한 집사",
          "logo": {
            "@type": "ImageObject",
            "url": "https://dogcalculator.co.kr/favicon.ico"
          }
        }
      };
      script.text = JSON.stringify(structuredData);

      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.href);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold">글을 찾을 수 없습니다.</h2>
        <Link to="/posts" className="text-orange-500 font-bold underline">목록으로 돌아가기</Link>
      </div>
    );
  }

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('공유 실패:', err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다! 원하는 곳에 붙여넣어 공유하세요.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10 px-4">
      <article className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className={`h-64 ${post.color} flex items-center justify-center text-8xl`}>
          {post.icon}
        </div>
        
        <div className="p-8 md:p-12 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-gray-400 text-sm font-medium">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-800 leading-[1.2] tracking-tight">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-orange max-w-none text-gray-600 leading-relaxed text-lg">
            {POST_CONTENTS[post.id] || (
               <div className="py-20 text-center text-gray-400 italic">
                 전문가들이 정성을 다해 콘텐츠를 작성 중입니다. 잠시만 기다려 주세요!
               </div>
            )}
          </div>

          <div className="pt-10 border-t border-gray-100">
             <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex gap-4 w-full md:w-auto">
                  <button 
                    onClick={handleShare}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                  >
                    <span>📤 공유하기</span>
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('링크가 복사되었습니다!');
                    }}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gray-100 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all active:scale-95"
                  >
                    <span>🔗 링크 복사</span>
                  </button>
                </div>
                <Link to="/posts" className="text-gray-400 font-bold hover:text-orange-500 transition-colors">
                  목록으로 가기 ➔
                </Link>
             </div>
          </div>
        </div>
      </article>

      <div className="bg-orange-500 rounded-[2rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black mb-1">궁금한 증상이 더 있나요?</h3>
          <p className="opacity-90 text-sm">AI 수의사에게 무엇이든 물어보세요.</p>
        </div>
        <Link to="/health-advisor" className="bg-white text-orange-500 px-10 py-4 rounded-2xl font-black hover:bg-orange-50 transition-colors shrink-0 shadow-lg">
          AI 상담소 바로가기
        </Link>
      </div>

      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default PostDetail;
