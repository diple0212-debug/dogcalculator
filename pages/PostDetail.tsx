
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS_DATA } from './Posts.tsx';
import AdPlaceholder from '../components/AdPlaceholder.tsx';

const POST_CONTENTS: Record<string, React.ReactNode> = {
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
      <p>시력이 흐려지는 백내장이나 청력 저하가 찾아오면 강아지는 큰 불안을 느낍니다. 집 안의 가구 배치를 가급적 바꾸지 말고, 아이에게 다가갈 때는 놀라지 않도록 바닥을 가볍게 두드려 진동으로 신호를 주는 등의 세심한 배려가 필요합니다. 안 보이거나 안 들리는 상태에서도 보호자의 '냄새'와 '손길'은 아이에게 최고의 안식처가 됩니다.</p>

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
  ),
  '8': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"우리가 맛있게 먹는 음식이 아이에게는 치명적인 독이 될 수 있습니다."</p>
      <p>강아지는 사람과 함께 살아온 지 수만 년이 지났지만, 신체 구조와 대사 능력은 여전히 인간과 크게 다릅니다. 사람이 먹어도 무해하거나 오히려 건강에 좋은 음식이 강아지에게는 급성 신부전, 용혈성 빈혈, 심지어 사망에 이르게 할 수 있는 '독극물'이 될 수 있습니다. 2026년 현재까지 보고된 수의학 임상 데이터를 바탕으로, 집사가 반드시 기억해야 할 금기 음식 10가지를 정리했습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 포도와 건포도 (Grape & Raisin)</h2>
      <p>포도는 강아지에게 가장 위험한 과일 중 하나입니다. 아직 정확한 독성 성분이 무엇인지 완벽히 규명되지 않았음에도 불구하고, 단 한 알의 포도 섭취만으로도 급성 신부전을 일으켜 사망에 이르는 사례가 빈번합니다. 특히 말린 건포도는 독성 농도가 훨씬 높습니다. 섭취 후 구토, 무기력증, 소변량 감소 등의 증상이 보이면 즉시 병원으로 달려가야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 양파, 마늘, 파 종류 (Allium Family)</h2>
      <p>양파와 마늘에 포함된 '티오황산염' 성분은 강아지의 적혈구를 파괴하여 용혈성 빈혈을 유발합니다. 생것뿐만 아니라 익힌 것, 가루 형태(마늘 분말 등)도 모두 위험합니다. 한국 음식에는 양파와 마늘이 들어가는 경우가 많으므로 사람이 먹는 찌개나 고기 요리를 나누어 주는 것은 매우 위험합니다. 소변 색이 붉거나 짙은 갈색으로 변한다면 적혈구 파괴 신호입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">3. 초콜릿 (Chocolate)</h2>
      <p>초콜릿의 카카오 성분에 들어있는 '테오브로민'은 강아지의 심박수를 급격히 높이고 중추 신경계를 마비시킵니다. 카카오 함량이 높은 다크 초콜릿일수록 치명적입니다. 흥분, 헐떡임, 몸 떨림, 발작 등의 증상을 보이며 심할 경우 심장마비를 일으킵니다.</p>

      <h2 className="text-2xl font-black text-gray-800">4. 자일리톨 (Xylitol)</h2>
      <p>최근 무설탕 껌이나 사탕, 일부 구운 과자에 들어가는 자일리톨은 강아지에게 설탕보다 무섭습니다. 강아지가 자일리톨을 섭취하면 인슐린이 과다 분비되어 혈당이 급격히 떨어지는 저혈당 쇼크가 발생합니다. 또한 간부전을 일으킬 수 있어 소량으로도 생명이 위태로워질 수 있습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">5. 마카다미아 (Macadamia Nuts)</h2>
      <p>마카다미아를 먹은 강아지는 뒷다리의 무력감, 마비, 구토, 고열 증상을 보입니다. 섭취 후 12시간 이내에 증상이 나타나며, 신경계에 직접적인 악영향을 미칩니다. 다른 견과류도 높은 지방 함량으로 췌장염을 유발할 수 있으므로 주의가 필요합니다.</p>

      <div className="bg-red-50 p-6 rounded-3xl border-l-4 border-red-400 shadow-sm text-gray-700">
        <h4 className="font-bold text-red-800 mb-2">🚨 실수로 먹었을 때의 응급 대처법</h4>
        <p className="text-sm m-0 leading-relaxed">
          - <strong>억지로 구토 금지:</strong> 부식성 물질이나 날카로운 것이 섞여 있을 경우 식도에 상처를 낼 수 있습니다.<br/>
          - <strong>섭취 시간과 양 파악:</strong> 수의사가 정확한 처방을 내릴 수 있도록 언제, 얼마나 먹었는지 기록하세요.<br/>
          - <strong>즉시 동물병원 방문:</strong> '지켜보기'보다는 전문가의 판단을 받는 것이 골든타임을 지키는 유일한 방법입니다.
        </p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">6. 알코올 (Alcohol)</h2>
      <p>강아지의 간과 신장은 알코올을 해독할 능력이 거의 없습니다. 아주 적은 양의 술로도 알코올 중독 증상을 보이며, 혼수상태나 호흡 곤란을 일으킵니다. 특히 맥주에 들어있는 홉(Hop) 성분도 독성이 있으니 절대 주의해야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">7. 카페인 (Caffeine)</h2>
      <p>커피, 차, 에너지 음료에 들어있는 카페인은 초콜릿 중독과 비슷한 증상을 일으킵니다. 카페인은 강아지에게 강한 흥분제로 작용하여 고혈압과 부정맥을 유발합니다. 컵 바닥에 남은 커피 한 모금도 작은 강아지에게는 위험할 수 있습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">8. 익힌 뼈 (Cooked Bones)</h2>
      <p>익힌 뼈, 특히 닭 뼈는 부러질 때 단면이 날카로운 바늘처럼 변합니다. 이는 강아지의 식도나 위, 장벽을 찔러 천공을 일으키거나 장폐색의 원인이 됩니다. 뼈는 오직 생뼈(Raw bone) 상태로만 급여하되 전문가의 지도를 따라야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">9. 아보카도 (Avocado)</h2>
      <p>아보카도의 '퍼신(Persin)' 성분은 강아지에게 구토와 설사를 유발할 수 있습니다. 특히 씨앗은 크기가 커서 삼킬 경우 질식이나 장폐색을 일으키는 주범이 됩니다. 과육 자체도 지방 함량이 너무 높아 췌장염 위험이 있습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">10. 소금과 설탕이 과한 가공식품</h2>
      <p>강아지는 사람보다 염분 배출 능력이 현저히 낮습니다. 과도한 소금 섭취는 전해질 불균형을 일으키고 신장에 무리를 줍니다. 설탕 또한 비만과 당뇨의 직접적인 원인이 되며, 특히 가공식품에 들어가는 인공 감미료들은 강아지 대사 체계를 망가뜨립니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">결론: 예방이 최고의 치료입니다</h3>
      <p>강아지에게 가장 안전한 음식은 검증된 사료와 강아지 전용 간식입니다. "한 번 줬는데 괜찮던데?"라는 안일한 생각이 아이의 수명을 갉아먹을 수 있습니다. 똑똑한 집사의 건강 가이드와 통해 우리 아이의 식단을 철저히 관리하고, 조금이라도 이상 징후가 보인다면 지체 없이 수의사와 상담하시기 바랍니다. 당신의 세심한 주의가 반려견의 20살을 만듭니다.</p>
    </div>
  ),
  '7': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"2026년, 이제 강아지의 짖음은 소음이 아니라 데이터가 됩니다."</p>
      <p>불과 몇 년 전까지만 해도 반려동물을 '기른다'는 표현이 일반적이었지만, 이제는 '함께 산다'는 반려의 개념을 넘어 아이들의 삶을 인간의 수준으로 끌어올리는 **'펫 휴머니제이션(Pet Humanization)'**이 가속화되고 있습니다. 특히 2026년은 AI와 첨단 IT 기술이 결합된 '펫 테크(Pet-Tech)'가 단순한 편의를 넘어 생명 연장의 핵심 도구로 자리 잡는 원년이 될 것입니다. 오늘 똑똑한 집사에서는 2026년에 펼쳐질 반려동물 트렌드와 헬스케어의 미래를 미리 짚어봅니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. AI '언어 번역기'의 진화: 짖음 속에 숨겨진 통증을 찾다</h2>
      <p>강아지는 아파도 말을 할 수 없습니다. 하지만 2026년의 AI는 강아지의 미세한 신음 소리, 호흡의 리듬, 그리고 짖는 빈도를 분석하여 통증 수치를 데이터화합니다. '애니멀 사운드 AI' 기술은 이미 수천만 건의 반려동물 음성 데이터를 학습하여 아이가 배가 고픈지, 심심한지, 아니면 어디가 구체적으로 아픈지를 보호자의 스마트폰으로 실시간 알림을 보냅니다. 이는 질병의 조기 발견율을 획기적으로 높여, 반려견의 기대 수명을 3~5년 더 연장하는 기폭제가 될 것입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 하이퍼-개인화 영양 솔루션: DNA 맞춤 사료</h2>
      <p>이제는 단순히 견종별 사료를 선택하는 시대가 끝납니다. 2026년의 보호자들은 강아지의 타액으로 간편하게 DNA 검사를 진행하고, 그 결과를 AI 영양사에게 전달합니다. AI는 아이의 유전적 취약점(예: 신장 기능 저하 가능성, 알레르기 유발 인자)을 분석하여 매일 아침 '단 한 마리만을 위한 맞춤형 신선 사료'를 문 앞까지 배송합니다. "오늘 우리 아이의 사료는 어제보다 칼슘 함량이 0.5% 더 높습니다"라는 메시지가 일상이 되는 시대입니다.</p>

      <div className="bg-purple-50 p-6 rounded-3xl border-l-4 border-purple-400 shadow-sm">
        <h4 className="font-bold text-purple-800 mb-2">🌐 2026년 주목해야 할 펫 테크 키워드</h4>
        <ul className="text-sm m-0 space-y-2 text-purple-900 list-disc pl-5">
          <li><strong>스마트 웨어러블 2.0:</strong> GPS 위치 추적은 기본, 심전도(ECG)와 혈당을 실시간 모니터링하여 심장마비를 예방합니다.</li>
          <li><strong>비대면 수의학(Telemedicine):</strong> 가벼운 증상은 화상 상담을 통해 처방전을 받고 약을 배송받는 시스템이 보편화됩니다.</li>
          <li><strong>펫 가상 현실(VR/AR):</strong> 집에 혼자 있는 강아지를 위해 주인의 홀로그램이 나타나 놀아주거나, 지루함을 해소하는 전용 가상 산책 프로그램이 도입됩니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 감정까지 케어하는 스마트 홈: 펫-마인드 헬스</h2>
      <p>반려견의 정신 건강 또한 헬스케어의 중요한 축이 됩니다. 2026년의 스마트 홈 시스템은 보호자가 외출한 사이 강아지의 분리 불안 징후를 감지하면, 즉시 안정감을 주는 페로몬을 분사하고 클래식 음악의 볼륨을 조절합니다. 인공지능 로봇 친구는 아이와 숨바꼭질을 하거나 노즈워크 놀이를 유도하여 우울증을 방지합니다. 이제 기술은 물리적 치료를 넘어 정서적 교감의 영역으로 진입하고 있습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">4. 기술은 사랑을 대신할 수 없지만, 사랑을 도울 수 있습니다</h2>
      <p>많은 이들이 "기술이 발전하면 강아지와의 따뜻한 교감이 줄어들지 않을까?" 걱정합니다. 하지만 2026년의 펫 테크는 오히려 집사가 아이에게 쏟아야 할 불필요한 걱정과 노동을 줄여줍니다. 대소변을 치우고, 건강 상태를 의심하며 불안해하는 시간을 줄이는 대신, 보호자는 아이와 더 깊은 눈맞춤을 하고 더 많은 산책을 즐길 수 있게 될 것입니다.</p>
      
      <p className="mt-6 font-medium text-gray-700">똑똑한 집사는 이러한 미래 기술을 가장 먼저 연구하고 여러분의 손안에 전달하기 위해 노력하고 있습니다. 2026년, 우리 아이들이 더 오래, 더 아프지 않고 우리 곁을 지킬 수 있도록 기술과 사랑을 결합하는 여정에 함께해주세요.</p>
    </div>
  ),
  '4': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"집사라면 반드시 알아야 할 응급 지식 1순위, 초콜릿 섭취 대응 가이드입니다."</p>
      <p>강아지에게 초콜릿이 위험하다는 사실은 잘 알려져 있지만, 왜 위험한지, 얼마나 먹었을 때 문제가 되는지 정확히 아는 보호자는 많지 않습니다. 초콜릿 섭취는 강아지에게 급성 독성 반응을 일으킬 수 있는 긴급 상황입니다. 오늘 '똑똑한 집사'에서는 초콜릿 속 독성 성분의 정체와 치사량, 그리고 응급 대처법까지 수의학적 관점에서 심도 있게 분석해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 테오브로민(Theobromine): 강아지에게 독약이 되는 이유</h2>
      <p>초콜릿의 주성분인 카카오에는 **'테오브로민'**이라는 메틸잔틴계 성분이 들어있습니다. 사람은 이 성분을 빠르게 대사하여 배출할 수 있지만, 강아지는 대사 속도가 매우 느립니다. 강아지 몸속에 남아 있는 테오브로민은 중추신경계를 자극하고, 심박수를 위험 수준까지 높이며, 근육 수축을 유발합니다. 이는 단순한 배탈을 넘어 발작, 혼수상태, 심지어 심장마비로 이어질 수 있는 무서운 독성 물질입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 초콜릿 종류별 위험도와 치사량</h2>
      <p>모든 초콜릿이 같은 위험도를 가진 것은 아닙니다. 카카오 함량이 높을수록 위험합니다.</p>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>화이트 초콜릿:</strong> 테오브로민 함량이 낮아 상대적으로 덜 위험하지만, 높은 유지방으로 인한 췌장염 위험이 있습니다.</li>
        <li><strong>밀크 초콜릿:</strong> 소형견(5kg 미만)이 초콜릿 바 하나를 다 먹었다면 즉시 병원에 가야 하는 수준입니다.</li>
        <li><strong>다크 초콜릿 / 베이킹용 카카오:</strong> 가장 위험합니다. 단 몇 조각만으로도 강아지의 생명을 위협할 수 있습니다.</li>
      </ul>
      <div className="bg-red-50 p-6 rounded-3xl border-l-4 border-red-400 shadow-sm">
        <h4 className="font-bold text-red-800 mb-2">⚠️ 긴급 수치 가이드</h4>
        <p className="text-sm m-0 leading-relaxed text-red-900">강아지 몸무게 1kg당 테오브로민 20mg 이상 섭취 시 독성 증상이 나타나기 시작하며, 100mg 이상은 치명적입니다. 하지만 개체마다 민감도가 다르므로 '조금 먹었으니 괜찮겠지'라는 생각은 금물입니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 반드시 체크해야 할 주요 중독 증상</h2>
      <p>초콜릿을 먹은 직후에는 아무렇지 않아 보일 수 있습니다. 증상은 보통 섭취 후 2~12시간 이내에 나타납니다.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>과도한 흥분과 안절부절못함</li>
        <li>잦은 배뇨와 극심한 갈증</li>
        <li>구토 및 설사</li>
        <li>빠른 심박수와 헐떡임</li>
        <li>몸 떨림이나 경련, 발작</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">4. 응급 대처 골든타임 가이드</h2>
      <p>가장 중요한 것은 **집에서 억지로 구토를 유발하지 않는 것**입니다. 잘못된 구토 유발(과산화수소 사용 등)은 식도 화상이나 흡인성 폐렴을 일으켜 상황을 더 악화시킬 수 있습니다.</p>
      <ol className="list-decimal pl-5 space-y-4">
        <li><strong>즉시 증거 수집:</strong> 아이가 먹은 초콜릿의 포장지를 챙기세요. 카카오 함량과 섭취량을 파악하는 것이 치료의 핵심입니다.</li>
        <li><strong>섭취 시간 확인:</strong> 언제 먹었는지 정확한 시간을 기록하세요.</li>
        <li><strong>동물병원 연락:</strong> 이동 중에도 병원에 전화를 걸어 상황을 알리세요. 미리 준비된 병원은 아이가 도착하자마자 신속하게 위 세척이나 활성탄 투여를 진행할 수 있습니다.</li>
      </ol>
      <p className="mt-6">사랑하는 아이의 생명은 보호자의 침착한 대응에 달려 있습니다. 평소에 24시 응급 동물병원의 위치를 파악해두고, 초콜릿은 반드시 강아지 발이 닿지 않는 높은 곳이나 서랍 안에 보관하는 습관을 들여주세요.</p>
    </div>
  ),
  '5': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"우리 강아지가 뒷다리를 들고 걸어요. 슬개골 탈구일까요?"</p>
      <p>포메라니안, 말티즈, 푸들 등 소형견 보호자들의 가장 큰 고민 중 하나가 바로 슬개골 탈구입니다. 국내 반려견 주거 환경의 90% 이상이 미끄러운 마룻바닥인 탓에 소형견의 슬개골 탈구 발생률은 매우 높습니다. 방치하면 퇴행성 관절염으로 이어져 걷지 못하게 될 수도 있는 슬개골 탈구, 어떻게 관리해야 할까요?</p>

      <h2 className="text-2xl font-black text-gray-800">1. 슬개골 탈구란 무엇인가?</h2>
      <p>슬개골은 무릎 관절을 보호하는 작은 조개 모양의 뼈입니다. 정상적인 상태라면 대퇴골 앞쪽의 깊은 홈(활차구)에 위치하여 무릎을 굽히고 펼 때 부드럽게 움직여야 합니다. 하지만 유전적 원인이나 외상으로 인해 이 뼈가 옆으로 빠져나가는 현상을 '탈구'라고 합니다. 안쪽으로 빠지면 내측 탈구(소형견 다수), 바깥쪽으로 빠지면 외측 탈구(대형견 다수)로 구분합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 탈구의 4단계 진단 기준</h2>
      <ul className="list-disc pl-5 space-y-4">
        <li><strong>1단계:</strong> 평소엔 제자리에 있으나 손으로 밀면 빠지는 상태. 통증은 거의 없으나 예방 관리가 필요합니다.</li>
        <li><strong>2단계:</strong> 활동 중에 가끔 빠졌다가 스스로 돌아오는 상태. '깽깽이 발' 증상이 나타나기 시작합니다.</li>
        <li><strong>3단계:</strong> 항상 빠져 있으며 인위적으로 밀어 넣어야 들어가는 상태. 뼈가 이미 변형되어 통증과 염증이 동반됩니다.</li>
        <li><strong>4단계:</strong> 항상 빠져 있고 인위적으로도 들어가지 않는 상태. 다리를 굽히고 다니며 근육 위축이 심각합니다.</li>
      </ul>

      <div className="bg-green-50 p-6 rounded-3xl border-l-4 border-green-400 shadow-sm text-gray-700">
        <h4 className="font-bold text-green-800 mb-2">🏠 집사라면 반드시 지켜야 할 '슬개골 홈 케어'</h4>
        <ul className="text-sm m-0 space-y-2">
          <li>- <strong>매트 설치:</strong> 미끄러운 바닥은 관절의 적입니다. 미끄럼 방지 매트는 선택이 아닌 필수입니다.</li>
          <li>- <strong>발바닥 털 관리:</strong> 발바닥 패드 사이의 털이 길면 제동력이 떨어져 관절에 무리가 갑니다. 수시로 이발해 주세요.</li>
          <li>- <strong>점프 금지:</strong> 소파나 침대에 강아지 전용 계단(스텝)을 설치하여 충격을 줄여주세요.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 수술은 언제 해야 할까?</h2>
      <p>모든 탈구가 수술을 필요로 하지는 않습니다. 하지만 2단계 후반에서 3단계 초입, 혹은 통증이 빈번하게 나타난다면 수술을 고려해야 합니다. 수술 시기를 너무 늦추면 뼈의 변형이 심해져 재발률이 높아지고 회복 속도가 느려집니다. 수의사와 정밀 상담을 통해 아이의 보행 상태, 근육량, 염증 정도를 종합적으로 판단해야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">4. 관절 영양제와 근력 강화</h2>
      <p>글루코사민, 콘드로이친, MSM, 초록입홍합 성분은 연골을 보호하고 염증을 완화하는 데 도움을 줍니다. 또한, 적절한 산책(평지 걷기)과 수영은 관절 주변 근육을 강화하여 슬개골이 빠지지 않도록 지탱해주는 힘을 길러줍니다. 과체중은 관절에 치명적이므로 항상 '비만도 계산기'를 활용해 적정 체중을 유지해 주세요.</p>
    </div>
  ),
  '6': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"함께한 지 엊그제 같은데 어느덧 하얘진 주둥이... 노령견 케어의 핵심입니다."</p>
      <p>강아지의 시간은 인간보다 빠르게 흐릅니다. 보통 7~8세가 되면 시니어 단계로 접어들며, 신체 기능이 서서히 저하됩니다. 하지만 노화는 질병이 아니라 삶의 한 과정입니다. 보호자가 아이의 변화를 미리 알고 세심하게 관리해준다면 노령견도 충분히 건강하고 활기찬 노후를 보낼 수 있습니다. 오늘 '똑똑한 집사'가 시니어견 보호자를 위한 심층 케어법을 전해드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 우리 아이도 혹시 치매? 인지기능장애(CCD) 이해하기</h2>
      <p>강아지도 인간처럼 치매를 앓습니다. 밤에 잠을 자지 않고 서성거리거나, 벽을 보고 멍하니 서 있고, 평소 잘 가리던 배변 실수를 한다면 단순한 노화가 아닌 CCD(Cognitive Dysfunction Syndrome)일 수 있습니다. 이를 예방하기 위해선 노년기에도 꾸준한 두뇌 자극이 필요합니다. 쉬운 노즈워크 장난감이나 새로운 산책 코스는 뇌세포 활성화에 큰 도움을 줍니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 감각의 퇴화와 환경의 변화</h2>
      <p>나이가 들면 시력(백내장 등)과 청력이 약해집니다. 이때 보호자가 주의해야 할 점은 다음과 같습니다.</p>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>가구 배치 유지:</strong> 눈이 잘 안 보이는 아이들은 집안 구조를 외워서 움직입니다. 갑작스러운 가구 배치는 사고를 유발할 수 있습니다.</li>
        <li><strong>촉각적인 신호:</strong> 소리가 안 들리는 아이에게는 바닥을 쳐서 진동을 주거나, 손짓으로 신호를 보내는 등 새로운 소통 방식을 만들어주세요.</li>
        <li><strong>낙상 방지:</strong> 근력이 약해져 작은 단차에도 다칠 수 있으니 집안의 턱을 없애거나 경사로를 설치해 주세요.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">3. 노령견 식단: 양보다 질, 소화력이 우선</h2>
      <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 shadow-sm">
        <h4 className="font-black text-indigo-800 mb-4">🍽️ 시니어견 식사 가이드</h4>
        <p className="text-sm text-indigo-900 leading-relaxed">
          - <strong>고품질 단백질:</strong> 근감소를 막기 위해 흡수율이 높은 양질의 단백질이 필요합니다.<br/>
          - <strong>낮은 칼로리:</strong> 활동량이 줄어들므로 비만을 막기 위해 칼로리는 낮춰야 합니다.<br/>
          - <strong>수분 섭취:</strong> 신장 기능 저하 예방을 위해 습식 사료를 병행하거나 음수량을 늘려주세요.
        </p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 정기검진은 '반년에 한 번'</h2>
      <p>노령견에게 6개월은 사람의 3~4년과 같습니다. 1년에 한 번 하던 건강검진을 6개월 단위로 늘려주세요. 특히 신장, 간, 심장 수치를 정밀하게 체크하고 초음파 검사를 통해 내장 기관의 종양 유무를 확인하는 것이 중요합니다. 일찍 발견된 질병은 관리만 잘하면 아이의 수명을 획기적으로 늘릴 수 있습니다.</p>

      <p className="text-gray-600 italic">"강아지에게 최고의 보약은 집사의 따뜻한 눈맞춤과 부드러운 손길입니다. 조금 느려진 아이의 발걸음에 맞춰 걷는 여유를 가져보세요. 당신과 함께하는 모든 순간이 아이에게는 생애 최고의 시간입니다."</p>
    </div>
  ),
  '1': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"보호자를 바라보며 환하게 웃는 우리 강아지, 그 속마음은 어떨까요?"</p>
      <p>강아지 보호자라면 누구나 한 번쯤 우리 아이가 나를 보고 정말 '웃고 있다'고 느낀 적이 있을 것입니다. 퇴근 후 문을 열었을 때, 혓바닥을 살짝 내민 채 입꼬리를 올리고 꼬리를 흔드는 그 모습은 인간의 웃음과 매우 닮아 있습니다. 하지만 수의학적, 과학적 관점에서 강아지의 미소는 사람의 그것과는 조금 다른 복합적인 의미를 지닙니다. 오늘 '똑똑한 집사'에서는 강아지 웃음 뒤에 숨겨진 과학적 비밀을 깊이 있게 파헤쳐 보겠습니다.</p>
      
      <h2 className="text-2xl font-black text-gray-800">1. 진화론적 관점: 인간과의 공진화가 만든 '사회적 미소'</h2>
      <p>강아지는 약 3만 년 전부터 인간과 함께 살며 진화해 왔습니다. 이 과정에서 강아지들은 인간의 감정을 읽고, 인간이 긍정적으로 반응하는 표정을 지을 때 더 많은 보상(간식, 칭찬, 애정)을 얻는다는 사실을 유전적으로 학습했습니다. 이를 '사회적 진화'라고 부릅니다. 실제로 야생 늑대는 입꼬리를 올리는 행위를 공격의 신호로 사용하지만, 반려견들은 주인의 웃음을 모방하거나 주인을 기쁘게 하기 위해 안면 근육(대협골근)을 사용하는 법을 익혔습니다. 영국의 포츠머스 대학 연구진에 따르면, 강아지는 사람이 자신을 지켜보고 있을 때 훨씬 더 많은 표정을 짓는 것으로 나타났습니다. 이는 강아지의 웃음이 단순히 감정의 배출구가 아니라, 인간과의 소통을 위한 적극적인 도구임을 시사합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 신경학적 분석: 옥시토신과 유대감의 고리</h2>
      <p>강아지가 입을 살짝 벌리고 입꼬리를 뒤로 당기며 헥헥거리는 표정은 보통 근육이 이완된 상태에서 나타납니다. 과학자들은 이를 '긍정적 정서 상태의 신체 표현'으로 정의합니다. 이때 주목해야 할 물질은 바로 **'사랑의 호르몬'이라 불리는 옥시토신(Oxytocin)**입니다. 강아지와 보호자가 서로의 눈을 맞추고 미소를 나눌 때, 양쪽 모두의 뇌에서 대량의 옥시토신이 분비됩니다. 이는 엄마와 아기가 서로를 바라볼 때 일어나는 반응과 동일합니다. 즉, 강아지가 웃는다는 것은 단순히 기분이 좋다는 의미를 넘어, 당신을 자신의 가족이자 안전한 안식처로 인식하고 있다는 강력한 애정 표현입니다.</p>

      <div className="bg-yellow-50 p-6 rounded-3xl border-l-4 border-yellow-400 italic text-gray-700 leading-relaxed shadow-sm">
        "강아지의 미소는 단순히 입 모양만으로 판단해서는 안 됩니다. 이완된 눈매, 부드럽게 좌우로 흔들리는 꼬리(특히 오른쪽으로 치우친 흔들림), 그리고 편안하고 리드미컬한 호흡이 동반되어야 진짜 행복한 상태입니다. 만약 꼬리가 뻣뻣하거나 눈 흰자가 많이 보인다면 그것은 긴장의 표현일 수 있습니다."
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 주의해야 할 '가짜 미소': 카밍 시그널(Calming Signals)</h2>
      <p>하지만 모든 입꼬리 올림이 행복을 의미하는 것은 아닙니다. 때때로 강아지는 극도의 불안이나 스트레스를 느낄 때 스스로를 진정시키거나 상대방에게 적의가 없음을 알리기 위해 입꼬리를 뒤로 바짝 당깁니다. 이를 '서브미시브 그린(Submissive Grin)' 또는 '굴복의 미소'라고 합니다. 이때는 입술이 뒤로 당겨지며 이빨이 살짝 보일 수 있는데, 행복한 웃음과 달리 눈이 가늘어지지 않고 고개를 돌리거나 하품을 하는 등의 행동이 동반됩니다. 보호자는 아이의 미소가 '즐거움'에서 오는 것인지, 아니면 '불안'에서 오는 '카밍 시그널'인지 구분할 수 있어야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">4. 우리 아이를 더 많이 웃게 만드는 집사의 습관</h2>
      <p>강아지의 미소는 학습될 수 있습니다. 아이가 편안하고 행복한 표정을 지을 때 즉시 부드럽게 쓰다듬어 주거나 따뜻한 말투로 칭찬해 주세요. 또한, 산책 중 새로운 냄새를 맡게 해주는 '노즈워크' 시간은 강아지의 도파민 분비를 촉진하여 자연스러운 미소를 이끌어냅니다. 매일 15분, 아이와 눈을 맞추고 대화하며 교감하는 시간을 가져보세요. 당신의 사랑이 깊어질수록 우리 강아지의 미소는 더욱 밝아질 것입니다.</p>
      
      <p className="text-gray-400 text-sm mt-10">참고 문헌: "The Genius of Dogs" by Brian Hare, 듀크 대학 진화인류학 연구소 자료, 수의행동학 전문의 알렉산드라 호로비츠 저서</p>
    </div>
  ),
  '2': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지 3마리 중 2마리가 앓고 있는 질병, 바로 치주 질환입니다."</p>
      <p>단순히 입 냄새가 나는 문제라고 생각하셨나요? 강아지의 구강 관리는 수명 연장의 핵심입니다. 잇몸의 염증과 박테리아는 혈류를 타고 심장, 신장, 간으로 이동하여 심각한 전신 질환을 유발합니다. 수의학계에서는 정기적인 양치질만으로도 강아지의 기대 수명을 20% 이상 늘릴 수 있다고 조언합니다. 하지만 칫솔만 보면 도망가는 우리 아이, 어떻게 해야 할까요? 오늘 '똑똑한 집사'가 실패 없는 3분 양치 비법을 전수합니다.</p>
      
      <h2 className="text-2xl font-black text-gray-800">1. 왜 강아지 치석은 사람보다 빨리 생길까?</h2>
      <p>사람의 타액은 약산성이지만, 강아지의 타액은 강알칼리성입니다. 이 차이가 치석 형성 속도를 결정합니다. 알칼리성 환경은 플라크(치태)가 치석으로 딱딱하게 굳는 것을 촉진하며, 강아지의 경우 단 48시간 만에 치태가 치석으로 변합니다. 일단 치석이 형성되면 양치질로는 제거가 불가능하고 전신 마취를 통한 스케일링이 유일한 해결책입니다. 따라서 매일매일 치태를 닦아내는 것이 가장 경제적이고 효과적인 건강 관리법입니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 1단계: 입 주변 터치와 치약 맛보기 (적응기)</h2>
      <p>가장 큰 실수는 첫날부터 칫솔을 입에 넣는 것입니다. 처음 일주일은 입 주변을 만지는 것에 익숙해지게 하세요. 강아지가 좋아하는 맛(닭고기, 소고기 등)의 전용 치약을 손가락에 묻혀 간식처럼 핥아먹게 합니다. '치약 = 맛있는 것'이라는 긍정적인 인식을 심어주는 것이 90%의 성공을 좌우합니다. 이후 손가락에 거즈를 감아 잇몸을 부드럽게 마사지하는 단계로 넘어갑니다.</p>

      <div className="bg-blue-50 p-6 rounded-3xl border-l-4 border-blue-400 shadow-sm text-gray-700">
        <h4 className="font-bold text-blue-800 mb-2">💡 수의사가 추천하는 '45도 법칙'</h4>
        <p className="text-sm m-0 leading-relaxed">칫솔을 잇몸 라인에 45도 각도로 대고 원을 그리듯 부드럽게 닦어주세요. 강아지는 이빨 안쪽보다 바깥쪽(볼 쪽)에 치석이 훨씬 많이 생깁니다. 입을 억지로 벌리지 말고 입술만 살짝 들어 올려 송곳니와 어금니 바깥쪽 면을 집중적으로 공략하세요.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 2단계: 실전! 3분 양치 루틴</h2>
      <ul className="list-disc pl-5 space-y-4">
        <li><strong>준비 (30초):</strong> 강아지를 편안하게 앉히고 칫솔에 치약을 깊숙이 짜 넣습니다.</li>
        <li><strong>우측/좌측 공략 (2분):</strong> 한 손으로 얼굴을 지탱하고 다른 손으로 송곳니부터 어금니까지 빠르게 닦아줍니다. 윗니와 아랫니가 맞물리는 경계면을 꼼꼼히 닦는 것이 포인트입니다.</li>
        <li><strong>마무리와 보상 (30초):</strong> 양치가 끝나자마자 아이가 가장 좋아하는 놀이를 해주거나, 저알러지 간식을 아주 소량 급여하여 '양치 끝에는 항상 좋은 일이 생긴다'는 기억을 남겨주세요.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">4. 양치를 절대 거부하는 아이를 위한 대안은?</h2>
      <p>노령견이거나 트라우마가 심해 도저히 칫솔질이 안 된다면, 차선책을 결합해야 합니다. 유당이 제거된 액상 구강 청결제를 음수대에 섞어주거나, 바르는 젤 형태의 치약을 잇몸에 묻혀만 주세요. 또한, 섬유질 구조가 특수한 치석 제거 전용 사료나 기능성 껌을 병행하면 도움이 됩니다. 하지만 이는 보조 수단일 뿐, 일주일에 최소 3회 이상은 칫솔질을 해주는 것이 아이의 노후 건강을 지키는 유일한 방법임을 명심하세요.</p>
    </div>
  ),
  '3': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"첨가물 제로, 사랑은 200%! 집에서 만드는 건강한 특식 레시피"</p>
      <p>시중에 판매되는 간식들의 긴 원재료명을 보며 걱정하신 적 없으신가요? 방부제, 인공 색소, 향미 증진제 등은 강아지의 눈물 자국을 심화시키고 알레르기를 유발하는 주범입니다. 이번 주말, 주방에 있는 건강한 식재료로 우리 아이를 위한 영양 만점 수제 간식을 직접 만들어 보세요. 요리 초보 보호자도 에어프라이어만 있으면 뚝딱 만들 수 있는 '요즘 유행 레시피 Best 3'를 상세히 공개합니다.</p>
      
      <h2 className="text-2xl font-black text-gray-800">Recipe 1. 고단백 면역력 강화 '닭가슴살 브로콜리 칩'</h2>
      <p>근육 형성에 필수적인 닭가슴살과 '슈퍼푸드' 브로콜리가 만났습니다. 씹는 재미가 있어 스트레스 해소에도 탁월합니다.</p>
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <ul className="space-y-2 text-sm text-gray-600">
          <li><strong>준비물:</strong> 무항생제 닭가슴살 300g, 브로콜리 50g, 식초 약간</li>
          <li><strong>상세 과정:</strong> 
            <ol className="list-decimal pl-4 mt-2 space-y-1">
              <li>닭가슴살은 식초를 한 방울 떨어뜨린 물에 20분간 담가 살균한 뒤 물기를 제거합니다.</li>
              <li>브로콜리는 끓는 물에 살짝 데친 후 아주 잘게 다집니다.</li>
              <li>닭가슴살을 0.5cm 두께로 썰어 다진 브로콜리를 골고루 묻힙니다.</li>
              <li>에어프라이어 70도에서 6시간 건조하거나, 160도에서 앞뒤로 10분씩 굽습니다.</li>
            </ol>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">Recipe 2. 소화 만점 눈 건강 '단호박 고구마 볼'</h2>
      <p>장 건강에 좋은 식이섬유가 풍부하며, 베타카로틴 성분이 시력 보호에 도움을 줍니다. 부드러운 식감으로 노령견에게도 좋습니다.</p>
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <ul className="space-y-2 text-sm text-gray-600">
          <li><strong>준비물:</strong> 단호박 1/4개, 찐 고구마 1개, 계란 노른자 1개, 쌀가루 1스푼</li>
          <li><strong>상세 과정:</strong> 
            <ol className="list-decimal pl-4 mt-2 space-y-1">
              <li>단호박과 고구마를 푹 삶아 껍질을 벗기고 곱게 으깹니다.</li>
              <li>계란 노른자와 쌀가루를 섞어 반죽의 점도를 조절합니다. (흰자는 소화가 어려울 수 있으니 제외하세요!)</li>
              <li>한입 크기로 동그랗게 빚은 뒤 가운데에 구멍을 살짝 냅니다.</li>
              <li>전자레인지에 2분간 돌리거나 에어프라이어 170도에서 10분간 구워주면 완성!</li>
            </ol>
          </li>
        </ul>
      </div>

      <div className="bg-orange-50 p-6 rounded-3xl border-l-4 border-orange-400 text-orange-900 shadow-sm">
        <h4 className="font-bold mb-2">⚠️ 똑똑한 집사의 급여 가이드</h4>
        <p className="text-sm m-0 leading-relaxed italic">"수제 간식은 방부제가 없어 실온 보관 시 하루 만에도 상할 수 있습니다. 조리 후 완전히 식혀 밀폐 용기에 담아 냉장 보관 시 3일, 냉동 보관 시 2주 이내에 급여하세요. 또한, 간식은 하루 권장 칼로리의 10%를 넘지 않도록 '사료량 계산기' 결과값과 비교하여 양을 조절해 주시는 것이 비만 예방의 핵심입니다."</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">Recipe 3. 알러지 걱정 없는 '락토프리 코티지 치즈'</h2>
      <p>강아지는 우유의 유당을 분해하지 못하지만, 유당이 제거된 락토프리 우유로 만든 치즈는 훌륭한 칼슘과 단백질 공급원입니다.</p>
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <ul className="space-y-2 text-sm text-gray-600">
          <li><strong>준비물:</strong> 락토프리 우유 1L, 사과식초 2큰술 (또는 레몬즙)</li>
          <li><strong>상세 과정:</strong> 
            <ol className="list-decimal pl-4 mt-2 space-y-1">
              <li>냄비에 우유를 붓고 중불에서 저어가며 끓입니다. 가장자리에 거품이 올라오면 약불로 줄입니다.</li>
              <li>식초를 넣고 서너 번만 크게 저은 뒤 그대로 둡니다. 우유가 몽글몽글 뭉쳐지기 시작합니다.</li>
              <li>10분 뒤 유청(투명한 물)과 치즈가 분리되면 면보에 걸러줍니다.</li>
              <li>무거운 것을 올려 유청을 충분히 짜내면 고소하고 부드러운 코티지 치즈가 완성됩니다.</li>
            </ol>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed">사랑하는 아이를 위해 주방에서 보내는 시간은 결코 헛되지 않습니다. 정성이 담긴 특식을 맛있게 먹고 보호자를 빤히 쳐다보는 그 눈빛만으로도 집사로서의 보람을 느끼실 수 있을 거예요. 오늘 알려드린 레시피로 아이에게 최고의 하루를 선물해 보세요!</p>
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
