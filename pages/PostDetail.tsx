
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS_DATA } from './Posts.tsx';
import AdPlaceholder from '../components/AdPlaceholder.tsx';

const POST_CONTENTS: Record<string, React.ReactNode> = {
  '20': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"초인종 소리만 들리면 전쟁터가 되는 우리 집, 손님이 오셔도 반가움보다 걱정이 앞서시나요? 흥분하는 강아지를 진정시키는 마법 같은 훈련법을 공개합니다."</p>
      
      <p>반려견을 키우는 집이라면 누구나 한 번쯤 겪는 고민입니다. 초인종이 울리는 순간 시작되는 우렁찬 짖음, 현관문이 열리자마자 손님에게 달려들어 앞발을 올리는 행동, 너무 기쁜 나머지 조절하지 못하고 실수를 하는 '희열 배뇨'까지. 보호자님들은 손님에게 미안한 마음과 아이를 통제하지 못하는 답답함 사이에서 곤혹스러워하시곤 하죠. 오늘 '똑똑한 집사'에서는 <strong>외부인 방문 시 흥분하는 강아지의 심리를 분석하고, 평온한 일상을 되찾아줄 단계별 대처법</strong>을 1500자 이상의 상세한 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 왜 우리 강아지는 외부인을 보면 흥분할까요?</h2>
      <p>훈련을 시작하기 전, 아이가 왜 그런 행동을 하는지 원인을 파악하는 것이 중요합니다. 흥분은 단순히 '기쁨'만을 의미하지 않습니다.</p>
      <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 space-y-4 my-6">
        <p><strong>● 과도한 반가움과 기대:</strong> 사람이 오면 즐거운 일이 생긴다(간식, 놀이, 관심)고 학습된 경우입니다. 에너지가 넘치는 어린 강아지들에게서 흔히 나타납니다.</p>
        <p><strong>● 경계심과 두려움:</strong> 낯선 사람이 자신의 영역(집)에 침입했다고 느껴 방어적인 태도를 취하는 것입니다. 짖는 행위는 "저리 가!"라는 경고의 의미일 수 있습니다.</p>
        <p><strong>● 사회화 부족:</strong> 낯선 사람을 접해본 경험이 적어 어떻게 반응해야 할지 몰라 혼란스러운 상태가 흥분으로 표출되는 경우입니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 평소에 실천하는 단계별 진정 훈련법</h2>
      <p>손님이 왔을 때만 교육하려 하면 이미 늦습니다. 평소에 '차분함'이 보상받는다는 것을 가르쳐야 합니다.</p>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">초인종 소리 둔감화 교육</h4>
            <p className="text-gray-600">초인종 소리 = 손님 방문 = 흥분이라는 연결 고리를 끊어야 합니다. 평소에 아무 이유 없이 초인종을 누르고, 강아지가 짖지 않거나 차분할 때 간식을 줍니다. 초인종 소리가 들려도 별일 일어나지 않는다는 것을 깨닫게 해주는 과정입니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">'하우스' 또는 '방석' 교육 (Place Command)</h4>
            <p className="text-gray-600">손님이 왔을 때 강아지가 가 있어야 할 지정된 장소를 정해줍니다. "하우스" 명령어를 내렸을 때 자신의 방석으로 가서 기다리면 아주 맛있는 간식을 보상합니다. 이 장소는 강아지에게 가장 안전하고 편안한 피난처가 되어야 합니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">기다려 훈련의 강화</h4>
            <p className="text-gray-600">흥분도가 높은 아이일수록 '기다려' 훈련이 필수입니다. 앉아서 기다리는 시간이 길어질수록 보상을 늘려가며 자제력을 키워주세요.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 손님이 방문했을 때의 실전 대처 매뉴얼</h2>
      <p>실제 상황이 닥쳤을 때 보호자가 당황하면 강아지는 더 흥분합니다. 차분하고 단호한 대처가 필요합니다.</p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>무관심이 최고의 약:</strong> 강아지가 흥분해서 뛰어오를 때 소리를 지르거나 밀쳐내는 행위는 강아지 입장에서 '보호자가 나랑 같이 놀아준다'고 오해하게 만듭니다. 완전히 무시하고 등을 돌리세요. 네 발이 모두 바닥에 닿고 차분해졌을 때만 관심을 줍니다.</li>
        <li><strong>미리 간식 뿌려주기:</strong> 손님이 들어오는 순간, 현관에서 멀리 떨어진 곳에 간식을 흩뿌려주어 관심을 분산시키는 것도 좋은 방법입니다. 코를 사용하는 '노즈워크' 활동은 강아지의 흥분도를 낮추는 데 효과적입니다.</li>
        <li><strong>리드줄 활용하기:</strong> 통제가 너무 힘든 경우, 집 안에서도 리드줄을 착용시켜 물리적인 거리를 유지하게 하세요. 손님에게 달려들지 못하게 제어하면서 차분해질 때까지 기다립니다.</li>
      </ul>

      <div className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 my-10">
        <h3 className="text-xl font-black text-indigo-800 mb-4">🤝 방문객에게 부탁해야 할 에티켓 (3 No 법칙)</h3>
        <p className="text-indigo-900 leading-relaxed mb-4">
          강아지의 교육은 보호자 혼자만의 힘으로 부족합니다. 방문하시는 손님께 미리 다음 사항을 정중히 부탁드리세요.
        </p>
        <ul className="space-y-2 text-indigo-900 font-medium">
          <li><strong>1. No Touch:</strong> 강아지를 만지지 마세요.</li>
          <li><strong>2. No Talk:</strong> 강아지에게 말을 걸거나 이름을 부르지 마세요.</li>
          <li><strong>3. No Eye Contact:</strong> 강아지와 눈을 마주치지 마세요.</li>
        </ul>
        <p className="text-indigo-800 mt-4 text-sm">
          강아지가 완전히 진정되어 먼저 다가와 냄새를 맡을 때까지 손님이 유령처럼 행동해 주시는 것이 가장 빠른 진정 방법입니다.
        </p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 상황별 추가 팁</h2>
      <p>강아지의 성향에 따라 대처법이 조금씩 다를 수 있습니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>겁이 많은 아이:</strong> 억지로 손님에게 인사시키지 마세요. 스스로 안전하다고 느낄 때까지 숨어있게 두는 것이 좋습니다.</li>
        <li><strong>공격성이 보이는 아이:</strong> 짖음이 심하거나 입질의 기미가 보인다면 즉시 분리(울타리나 다른 방)하고 전문가의 도움을 받는 것이 안전합니다.</li>
        <li><strong>산책 후 방문:</strong> 손님이 오기 전 충분한 산책을 통해 에너지를 발산시켜두면 흥분도가 현저히 낮아집니다.</li>
      </ul>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 일관성이 평화를 만듭니다</h3>
      <p>강아지의 행동 교정은 하루아침에 이루어지지 않습니다. 어제는 안 된다고 했다가 오늘은 귀엽다고 받아주는 식의 불일치는 강아지를 혼란스럽게 할 뿐입니다. 모든 가족 구성원이 동일한 규칙을 가지고 인내심 있게 반복한다면, 언젠가 초인종 소리에도 꼬리만 살랑이며 방석에서 기다리는 기특한 모습을 보게 될 것입니다. 똑똑한 집사는 여러분과 반려견의 평화로운 공존을 응원합니다!</p>
    </div>
  ),
  '19': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"중성화 수술, 우리 아이를 위한 선택일까요? 아니면 보호자를 위한 선택일까요? 그 해답을 의학적 근거와 함께 찾아봅니다."</p>
      
      <p>반려견을 키우면서 가장 먼저 마주하게 되는 큰 결정 중 하나가 바로 <strong>'중성화 수술'</strong>입니다. 수술에 대한 막연한 두려움과 미안함 때문에 결정을 미루는 보호자님들이 많으신데요. 중성화 수술은 단순히 번식을 막는 목적을 넘어, 반려견의 건강한 노후와 삶의 질 향상에 매우 중요한 역할을 합니다. 오늘은 중성화 수술의 장단점부터 적절한 시기, 그리고 수술 후 집에서 실천해야 할 케어 방법까지 1500자 이상의 상세한 가이드를 전해드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 중성화 수술의 의학적 장점</h2>
      <p>중성화 수술은 성호르몬과 관련된 다양한 질병을 원천적으로 차단하거나 발생 확률을 획기적으로 낮춰줍니다.</p>
      <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 space-y-4 my-6">
        <p><strong>● 암컷의 경우:</strong> 자궁축농증(치사율이 높은 질환)을 100% 예방할 수 있으며, 첫 발정 전 수술 시 유선종양 발생률을 0.5% 미만으로 낮출 수 있습니다. 또한 반복되는 발정 스트레스와 상상 임신을 방지합니다.</p>
        <p><strong>● 수컷의 경우:</strong> 전립선 비대증, 고환암, 항문 주위 선종 등을 예방합니다. 또한 영역 표시(마킹), 공격성, 가출 본능 등 호르몬에 의한 본능적 행동 문제를 완화하는 데 도움을 줍니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 고려해야 할 단점과 부작용</h2>
      <p>모든 수술에는 리스크가 따르듯, 중성화 수술 역시 신중히 고려해야 할 점들이 있습니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>기초 대사량 감소:</strong> 호르몬 변화로 인해 살이 찌기 쉬운 체질로 변합니다. 수술 후에는 식단 관리와 운동이 필수입니다.</li>
        <li><strong>전신 마취 리스크:</strong> 드물지만 마취에 대한 부작용이 있을 수 있으므로 수술 전 혈액 검사 등 사전 검사가 반드시 필요합니다.</li>
        <li><strong>성장 영향:</strong> 너무 이른 시기에 수술할 경우 골격 성장에 영향을 줄 수 있다는 연구 결과도 있으므로, 견종별 적정 시기를 수의사와 상담해야 합니다.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">3. 수술 후 집사님이 챙겨야 할 핵심 케어 (Post-Op Care)</h2>
      <p>수술만큼 중요한 것이 바로 회복기 관리입니다. 집에서의 세심한 관리가 합병증 없는 빠른 회복을 돕습니다.</p>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">넥카라 착용은 필수 (최소 7~10일)</h4>
            <p className="text-gray-600">강아지가 수술 부위를 핥거나 깨물면 실밥이 풀리거나 세균 감염이 일어날 수 있습니다. 아이가 불편해하더라도 실밥을 제거할 때까지는 절대 넥카라를 벗기지 마세요.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">운동 제한 및 안정</h4>
            <p className="text-gray-600">수술 후 3~5일간은 격한 뛰어놀기, 점프, 계단 오르내리기를 금지해야 합니다. 산책은 수의사의 허락 하에 가벼운 평지 산책부터 시작하세요.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">수술 부위 관찰</h4>
            <p className="text-gray-600">하루에 두 번 이상 수술 부위가 붉게 부어오르지는 않는지, 진물이 나지는 않는지 확인하세요. 이상 징후 발견 시 즉시 병원에 연락해야 합니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">식단 조절 시작</h4>
            <p className="text-gray-600">수술 직후에는 소화가 잘 되는 부드러운 음식을 소량 급여하고, 회복 후에는 중성화 전용 사료나 칼로리가 낮은 식단으로 교체하여 비만을 예방하세요.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 my-10">
        <h3 className="text-xl font-black text-amber-800 mb-4">💡 수의사의 조언: 수술 시기</h3>
        <p className="text-amber-900 leading-relaxed">
          "일반적으로 소형견은 생후 6~8개월, 대형견은 성장이 어느 정도 마무리되는 12~18개월 사이를 권장합니다. 하지만 개체마다 발육 상태가 다르므로, 유치 잔존 여부와 신체 검사를 통해 최적의 타이밍을 잡는 것이 중요합니다. 중성화는 아이와 더 건강하게 오래 살기 위한 '예방 의학'의 관점에서 접근하시길 바랍니다."
        </p>
      </div>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 사랑하는 아이를 위한 용기 있는 결정</h3>
      <p>중성화 수술은 보호자에게 심리적으로 큰 부담이 되는 일입니다. 하지만 이 짧은 수술과 며칠간의 회복기가 우리 아이의 남은 10년, 15년을 질병의 고통 없이 보낼 수 있게 해주는 가장 큰 선물이 될 수 있습니다. 충분한 상담과 준비를 통해 우리 아이에게 가장 안전하고 편안한 수술이 될 수 있도록 도와주세요. 똑똑한 집사는 모든 반려견의 건강한 삶을 응원합니다.</p>
    </div>
  ),
  '18': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"가족이었던 아이를 떠나보낸 후, 세상이 멈춘 것 같은 기분이 드시나요? 당신의 슬픔은 지극히 당연하고 소중한 감정입니다."</p>
      
      <p>반려견은 우리에게 단순한 동물이 아닙니다. 기쁠 때나 슬플 때나 언제나 곁을 지켜주던 가족이자, 조건 없는 사랑을 가르쳐준 스승이기도 합니다. 그런 존재를 잃었을 때 느끼는 상실감은 상상할 수 없을 만큼 깊고 아픕니다. 이를 <strong>'펫로스 증후군(Pet Loss Syndrome)'</strong>이라고 부릅니다. 오늘은 이 깊은 슬픔을 어떻게 마주하고, 어떻게 건강하게 치유해 나갈 수 있을지 심리학적 관점에서 깊이 있게 다루어보고자 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 펫로스 증후군, 왜 이렇게 아픈 걸까요?</h2>
      <p>많은 분들이 "강아지 한 마리 죽은 것 가지고 왜 유난이냐"는 주변의 무심한 말에 더 큰 상처를 받곤 합니다. 하지만 반려견과의 이별은 자녀나 배우자를 잃었을 때와 유사한 수준의 심리적 고통을 유발한다는 연구 결과가 있습니다. 이는 반려견이 우리의 일상에 깊숙이 스며들어 정서적 지지대 역할을 해왔기 때문입니다. 일상의 루틴(산책, 급여, 잠자리)이 한순간에 사라지면서 오는 공허함은 삶의 의미 자체를 흔들어놓기도 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 슬픔의 단계를 이해하기</h2>
      <p>심리학자 엘리자베스 퀴블러 로스가 말한 '죽음을 받아들이는 5단계'는 펫로스에도 적용됩니다. 자신이 어느 단계에 있는지 아는 것만으로도 마음이 조금은 편안해질 수 있습니다.</p>
      <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 space-y-4 my-6">
        <p><strong>● 부정:</strong> "아직 살아있는 것 같아", "현관문을 열면 달려 나올 것 같아"라며 현실을 부정하는 단계입니다.</p>
        <p><strong>● 분노:</strong> "왜 더 일찍 병원에 가지 않았을까?", "그때 산책을 나가지 말걸"이라며 자신이나 수의사, 혹은 세상을 향해 분노를 느낍니다.</p>
        <p><strong>● 타협:</strong> "내가 대신 아팠더라면", "다시 살려만 준다면 뭐든 할 텐데"라며 불가능한 가정을 세웁니다.</p>
        <p><strong>● 우울:</strong> 극심한 무력감과 슬픔이 밀려오며 일상생활이 힘들어지는 시기입니다.</p>
        <p><strong>● 수용:</strong> 이별을 현실로 받아들이고, 슬픔보다는 아름다웠던 추억을 더 많이 떠올리게 되는 단계입니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 마음을 치유하는 5가지 방법</h2>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">충분히 슬퍼하세요 (Grieving)</h4>
            <p className="text-gray-600">슬픔을 억누르지 마세요. 눈물이 나면 울고, 보고 싶으면 이름을 불러보세요. 감정을 표출하는 것은 치유의 첫걸음입니다. 주변의 시선을 의식해 슬픔을 숨기는 것은 오히려 마음의 병을 키울 수 있습니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">죄책감에서 벗어나세요</h4>
            <p className="text-gray-600">"내가 부족해서 일찍 떠난 건 아닐까?"라는 생각은 가장 위험합니다. 당신은 그 아이에게 세상의 전부였고, 아이는 당신의 사랑 덕분에 행복한 생을 마감했습니다. 아이는 당신이 죄책감에 시달리는 것을 결코 원하지 않을 것입니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">추모의 시간을 가지세요</h4>
            <p className="text-gray-600">아이를 위한 작은 제단을 차리거나, 사진첩을 만들거나, 편지를 써보세요. 나무를 심거나 유골함을 예쁘게 꾸며주는 것도 좋습니다. 이러한 의식은 마음속에서 아이를 아름답게 보내주는 과정이 됩니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">공감받을 수 있는 사람들과 소통하세요</h4>
            <p className="text-gray-600">반려견을 키워본 경험이 있는 친구나 온라인 커뮤니티의 도움을 받으세요. 같은 아픔을 공유하는 것만으로도 큰 위로가 됩니다. 만약 일상생활이 불가능할 정도의 우울감이 지속된다면 전문가의 상담을 받는 것을 권장합니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">아이의 물건을 천천히 정리하세요</h4>
            <p className="text-gray-600">너무 서두를 필요도, 너무 오래 방치할 필요도 없습니다. 마음이 준비되었을 때 하나씩 정리해 나가세요. 가장 아끼던 장난감 하나 정도는 간직해도 좋습니다.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 새로운 만남에 대하여</h2>
      <p>어떤 분들은 상실감을 채우기 위해 곧바로 새로운 아이를 입양하기도 하고, 어떤 분들은 다시는 이런 아픔을 겪고 싶지 않아 평생 반려견을 키우지 않겠다고 다짐하기도 합니다. 정답은 없습니다. 다만, 새로운 아이를 입양할 때는 떠난 아이의 '대체재'가 아닌, '새로운 인연'으로 받아들일 준비가 되었을 때 결정하시길 바랍니다.</p>

      <div className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 my-10">
        <h3 className="text-xl font-black text-indigo-800 mb-4">🌈 무지개다리 너머에서</h3>
        <p className="text-indigo-900 leading-relaxed italic">
          "엄마, 아빠. 나 여기서 친구들이랑 신나게 뛰어놀고 있어. 이제 아픈 곳도 하나도 없어! 그러니까 너무 많이 울지 마. 내가 준 사랑만 기억해 줘. 우린 나중에 꼭 다시 만날 거니까. 그때까지 나 잊지 말고 행복하게 지내야 해. 사랑해!"
        </p>
      </div>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 시간이 약이라는 말보다 중요한 것</h3>
      <p>시간이 흐르면 슬픔의 파도는 낮아지겠지만, 아이를 향한 그리움은 영원히 남을 것입니다. 그 그리움을 고통이 아닌, 따뜻한 온기로 간직할 수 있을 때까지 스스로에게 충분한 시간을 주시길 바랍니다. 당신은 충분히 훌륭한 보호자였고, 그 아이는 당신을 만나 세상에서 가장 행복한 강아지였습니다.</p>
    </div>
  ),
  '17': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지의 입 냄새가 심해졌다면? 그것은 단순한 냄새가 아니라 우리 아이의 건강이 보내는 위험 신호일 수 있습니다."</p>
      
      <p>반려견의 구강 건강은 단순히 깨끗한 치아를 유지하는 미용적인 문제를 넘어, 전체적인 수명과 직결되는 매우 중요한 요소입니다. 연구에 따르면 3세 이상의 강아지 중 약 80%가 치주 질환을 앓고 있다고 합니다. 하지만 많은 보호자님들이 양치질의 어려움 때문에 이를 방치하곤 하죠. 오늘 '똑똑한 집사'에서는 <strong>강아지 치석의 위험성부터 거부감 없는 단계별 양치질 교육법</strong>까지, 1500자 이상의 상세한 가이드를 통해 완벽하게 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 치석, 왜 그렇게 위험할까요?</h2>
      <p>강아지의 입안에 남은 음식물 찌꺼기와 세균이 결합하면 '플라그(치태)'가 형성됩니다. 이 플라그가 침 속의 미네랄과 만나 딱딱하게 굳어지면 우리가 흔히 아는 '치석'이 됩니다. 치석은 그 자체로도 문제지만, 더 큰 위험은 치석이 잇몸 안쪽으로 파고들면서 발생하는 '치주염'입니다.</p>
      <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 space-y-4 my-6">
        <p><strong>● 전신 질환의 시작점:</strong> 잇몸의 염증을 통해 침투한 세균은 혈관을 타고 온몸을 돌아다닙니다. 이는 심장 판막 질환, 신부전, 간 질환 등 치명적인 전신 질환의 원인이 됩니다.</p>
        <p><strong>● 극심한 통증과 식욕 부진:</strong> 강아지는 통증을 잘 숨기는 동물이지만, 치통은 매우 고통스럽습니다. 사료를 씹지 못하거나 한쪽으로만 씹는 행동, 입 주변을 만지는 것을 극도로 싫어하는 행동은 모두 치통의 신호입니다.</p>
        <p><strong>● 턱뼈 손상:</strong> 심한 치주염은 치아를 지탱하는 치조골을 녹여 턱뼈 골절로 이어지기도 합니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 실패 없는 단계별 양치질 교육법 (2주 완성 플랜)</h2>
      <p>처음부터 칫솔을 입에 넣으려 하면 강아지는 평생 양치질을 싫어하게 될 수 있습니다. '양치질 = 즐거운 시간'이라는 인식을 심어주는 것이 핵심입니다.</p>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">1단계: 입 주변 터치에 익숙해지기 (1~3일)</h4>
            <p className="text-gray-600">간식을 주면서 입 주변과 잇몸을 가볍게 만져줍니다. 강아지가 거부감을 보이지 않을 때까지 반복하며, 만질 때마다 칭찬과 보상을 듬뿍 해줍니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">2단계: 치약 맛 보여주기 (4~6일)</h4>
            <p className="text-gray-600">강아지 전용 치약은 대개 닭고기나 소고기 맛이 납니다. 손가락에 치약을 묻혀 강아지가 핥아먹게 하세요. 치약이 '맛있는 간식'이라는 인식을 심어주는 과정입니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">3단계: 손가락 칫솔로 문지르기 (7~10일)</h4>
            <p className="text-gray-600">손가락에 거즈를 감거나 실리콘 손가락 칫솔을 끼우고 치약을 묻혀 앞니부터 살살 문질러줍니다. 어금니까지 범위를 조금씩 넓혀가며, 짧은 시간(10~20초)부터 시작하세요.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">4단계: 본격적인 칫솔 사용 (11일 이후)</h4>
            <p className="text-gray-600">강아지용 칫솔을 사용하여 45도 각도로 잇몸 경계선을 닦아줍니다. 가장 중요한 곳은 치석이 잘 생기는 윗송곳니와 어금니 바깥쪽입니다. 안쪽 면은 혀가 닿아 비교적 깨끗하므로 바깥쪽 위주로 관리해도 충분합니다.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 집사가 꼭 알아야 할 구강 관리 꿀팁</h2>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>사람 치약은 절대 금지:</strong> 사람 치약에는 불소와 자일리톨이 들어있어 강아지에게 독이 됩니다. 반드시 강아지 전용 제품을 사용하세요.</li>
        <li><strong>매일 하는 것이 가장 좋습니다:</strong> 플라그가 치석으로 변하는 데는 단 48시간이 걸립니다. 적어도 이틀에 한 번, 가급적 매일 밤 자기 전에 닦아주는 습관을 들이세요.</li>
        <li><strong>보조 제품 활용:</strong> 양치질을 너무 싫어한다면 바르는 치약, 물에 타 먹는 세정제, 치석 제거 껌 등을 병행하세요. 하지만 이는 보조 수단일 뿐, 직접적인 양치질을 대체할 수는 없습니다.</li>
        <li><strong>정기적인 스케일링:</strong> 이미 딱딱하게 굳은 치석은 양치질로 제거되지 않습니다. 1년에 한 번 정기 검진을 통해 필요시 전문가의 스케일링을 받는 것이 좋습니다.</li>
      </ul>

      <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 my-10">
        <h3 className="text-xl font-black text-blue-800 mb-4">💡 전문가의 한마디</h3>
        <p className="text-blue-900 leading-relaxed">
          "양치질 교육에서 가장 중요한 것은 보호자의 인내심입니다. 강아지가 싫어하면 즉시 멈추고 다음 기회를 노리세요. 억지로 하면 공포심만 커집니다. 아주 작은 부분이라도 닦았다면 폭풍 칭찬과 함께 가장 좋아하는 간식으로 보상해 주세요. 양치질이 끝나면 좋은 일이 생긴다는 것을 알게 되면, 나중에는 칫솔만 들어도 꼬리를 흔들며 달려오게 될 것입니다."
        </p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 치석 제거 껌과 장난감의 효과</h2>
      <p>양치질 외에도 구강 관리에 도움을 주는 도구들이 있습니다. 덴탈 껌은 씹는 과정에서 치아 표면을 마찰시켜 플라그를 제거하는 데 도움을 줍니다. 또한, 거친 질감의 로프 장난감이나 고무 장난감을 씹는 행위도 자연스러운 치석 예방 효과가 있습니다. 단, 너무 딱딱한 뼈나 돌 같은 장난감은 치아 파절(부러짐)을 유발할 수 있으니 주의해야 합니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 건강한 미소로 오래오래 함께하세요</h3>
      <p>강아지의 구강 관리는 단순히 입 냄새를 없애는 것이 아니라, 사랑하는 아이와 더 건강하게 오래 함께하기 위한 약속입니다. 오늘부터라도 손가락에 치약을 묻혀 맛을 보여주는 것부터 시작해 보는 건 어떨까요? 똑똑한 집사는 여러분의 반려견이 건강한 치아로 맛있는 음식을 마음껏 즐길 수 있도록 항상 응원하겠습니다.</p>
    </div>
  ),
  '16': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"평소와 다름없이 배변판을 치우려는데 붉은 피가 섞여 있다면? 보호자에게 이보다 가슴 철렁한 순간은 없을 것입니다."</p>
      <p>강아지의 혈변은 몸속 어딘가에서 출혈이 발생했다는 매우 강력하고 직접적인 경고 신호입니다. 단순히 소화 불량으로 넘길 수 있는 문제부터, 1분 1초가 급한 치명적인 전염병까지 그 원인이 매우 다양하죠. 2026년 수의학 임상 데이터에 따르면, 혈변은 초기 대처 속도에 따라 예후가 극명하게 갈리는 증상입니다. 오늘 '똑똑한 집사'에서는 **강아지 혈변의 유형별 분석과 반드시 의심해야 할 질환**, 그리고 집사가 취해야 할 응급 액션 플랜을 완벽하게 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 혈변의 두 얼굴: 선홍색(신선혈) vs 검은색(흑변)</h2>
      <p>혈변이라고 다 같은 혈변이 아닙니다. 피의 색깔을 확인하는 것만으로도 출혈 위치를 짐작할 수 있습니다.</p>
      <ul className="list-disc pl-5 space-y-4">
        <li><strong>선홍색 혈변 (Hematochezia):</strong> 피가 섞인 지 얼마 되지 않았음을 뜻합니다. 주로 대장, 직물, 항문 근처 하부 위장관에서 발생한 출혈입니다. 변 겉면에 피가 묻어 있거나 점액질과 섞여 나오는 경우가 많습니다.</li>
        <li><strong>검은색/타르색 혈변 (Melena):</strong> 피가 소화 과정을 거쳐 산화되었다는 뜻입니다. 위, 십이지장과 같은 상부 위장관의 출혈을 의미합니다. 자장면 소스처럼 검고 끈적하다면 매우 위급한 내부 장기 손상일 수 있습니다.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">2. 강아지 혈변의 주요 원인 질환 5가지</h2>
      <p>단순한 식단 변화부터 생명을 위협하는 질병까지, 혈변을 유발하는 대표적인 상황들입니다.</p>
      <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4 my-6">
        <p><strong>① 전염성 질환 (파보/코로나 장염):</strong> 백신 접종이 끝나지 않은 어린 강아지에게 가장 치명적입니다. 심한 구토와 함께 비릿한 냄새가 나는 혈변을 봅니다.</p>
        <p><strong>② 출혈성 위장염 (HGE):</strong> 갑자기 대량의 혈변과 구토를 유발하며 급성 탈수로 이어집니다. 주로 소형견에게 자주 발생하며 원인이 불분명한 경우가 많습니다.</p>
        <p><strong>③ 췌장염 (Pancreatitis):</strong> 기름진 음식을 먹은 후 심한 복통과 함께 혈변을 동반할 수 있습니다. 즉각적인 입원 치료가 필요합니다.</p>
        <p><strong>④ 식이성 문제 및 이물질 섭취:</strong> 닭뼈, 플라스틱 등 날카로운 이물질이 장벽을 긁거나, 맞지 않는 음식을 먹어 장 점막이 손상된 경우입니다.</p>
        <p><strong>⑤ 스트레스 및 대장염:</strong> 이사, 미용 등 극심한 스트레스로 인해 일시적으로 장 점막이 탈락하며 피가 섞여 나올 수 있습니다.</p>
      </div>

      <div className="bg-red-50 p-6 rounded-3xl border-l-4 border-red-500 shadow-sm text-gray-700 my-8">
        <h4 className="font-bold text-red-800 mb-2">🚨 "지금 당장 병원으로 가세요!" (응급 상황)</h4>
        <ul className="text-sm m-0 space-y-2">
          <li>- 혈변의 양이 너무 많거나 멈추지 않을 때</li>
          <li>- 잇몸 색깔이 평소보다 하얗게 변했을 때 (쇼크/빈혈 징후)</li>
          <li>- 구토와 기력 저하가 동반될 때</li>
          <li>- 복부가 팽창하고 만졌을 때 극심한 고통을 표현할 때</li>
          <li>- 체온이 너무 높거나 낮을 때 (정상: 38~39도)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 혈변 발생 시 보호자가 해야 할 행동</h2>
      <ol className="list-decimal pl-5 space-y-4 font-medium text-gray-700">
        <li><strong>증거 확보:</strong> 혈변의 사진을 찍어두세요. 가능하다면 변을 비닐팩에 담아 병원에 가져가는 것이 가장 정확한 검사(분변 검사)를 가능케 합니다.</li>
        <li><strong>절식 처리:</strong> 장을 쉬게 하기 위해 최소 12시간 정도는 사료 급여를 중단하세요. (단, 2개월 미만 자견은 저혈당 위험이 있으니 전문가 상담 후 결정)</li>
        <li><strong>음수 제한 고려:</strong> 구토가 동반된다면 물도 한꺼번에 많이 주지 말고 조금씩 나누어 주어야 합니다.</li>
        <li><strong>병력 정리:</strong> 최근 24시간 이내에 평소와 다른 간식을 줬는지, 산책 중 무언가 주워 먹지 않았는지 등을 기억해 두세요.</li>
      </ol>

      <h2 className="text-2xl font-black text-gray-800">4. 병원에서는 어떤 검사를 하나요?</h2>
      <p>단순 혈변인지 질병의 신호인지 판단하기 위해 보통 다음과 같은 검사를 진행합니다.</p>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>분변 검사:</strong> 기생충 알이나 특정 세균 감염 여부를 확인합니다.</li>
        <li><strong>키트 검사:</strong> 파보, 지알디아 등 전염성 질환을 빠르게 진단합니다.</li>
        <li><strong>복부 초음파/엑스레이:</strong> 장 폐색, 이물질 섭취, 췌장염 여부를 육안으로 확인합니다.</li>
        <li><strong>혈액 검사:</strong> 염증 수치(CRP)와 빈혈 정도, 장기 기능을 파악합니다.</li>
      </ul>

      <h3 className="text-2xl font-black text-gray-800 mt-10">결론: 혈변은 '지켜보는' 증상이 아닙니다</h3>
      <p>강아지에게 혈변은 단순한 설사가 아닙니다. "내일이면 낫겠지"라는 생각으로 방치하는 사이, 아이는 급격한 탈수와 패혈증으로 위험에 처할 수 있습니다. 특히 자견이나 노령견에게 혈변은 매우 치명적인 신호입니다. 오늘 알려드린 색깔별 유형과 응급 징후를 잘 기억하셨다가, 이상 징후 발생 시 주저 말고 단골 동물병원을 찾으시길 바랍니다. 똑똑한 집사는 우리 아이의 건강한 배변 생활을 위해 항상 곁에서 정보를 나누겠습니다.</p>
    </div>
  ),
  '15': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"건강을 생각하면 습식인데, 치아와 편의성을 생각하면 건식... 도대체 어떤 사료가 우리 아이에게 최고일까요?"</p>
      <p>강아지 사료 선택의 영원한 숙제인 건식과 습식의 차이를 수의학적 관점에서 분석했습니다. 편리함의 건식과 영양/기호성의 습식 사이에서 고민하는 보호자들을 위한 최적의 가이드입니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 건식 사료의 장단점</h2>
      <p>건식 사료는 보관이 쉽고 경제적이며, 알갱이를 씹는 과정에서 치석 제거에 도움을 줄 수 있습니다. 하지만 수분 함량이 낮아 음수량이 부족한 아이들에게는 결석 등의 위험이 있을 수 있습니다.</p>
      <h2 className="text-2xl font-black text-gray-800">2. 습식 사료의 장단점</h2>
      <p>습식 사료는 기호성이 매우 높고 수분 함량이 70~80%에 달해 음수량 확보에 유리합니다. 하지만 가격이 비싸고 개봉 후 부패가 빠르며 치석이 생기기 쉽다는 단점이 있습니다.</p>
    </div>
  ),
  '14': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지가 자꾸 귀를 긁거나 머리를 흔든다면? 귀 안쪽을 확인해 봐야 할 때입니다."</p>
      <p>강아지의 귀는 'L'자 구조로 되어 있어 통풍이 어렵고 습기가 차기 쉽습니다. 특히 귀가 덮여 있는 견종들은 외이염에 매우 취약합니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 올바른 귀 청소 방법</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>전용 세정제를 귀 안에 적당량 넣습니다.</li>
        <li>귀 뿌리 부분을 부드럽게 마사지하여 귀지를 녹입니다.</li>
        <li>강아지가 머리를 흔들어 세정제를 털어내게 합니다.</li>
        <li>겉으로 나온 이물질만 부드러운 솜으로 닦아냅니다. 면봉 사용은 절대 금물입니다!</li>
      </ul>
    </div>
  ),
  '13': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지 구토, 색깔만 잘 봐도 응급 상황인지 아닌지 알 수 있습니다."</p>
      <p>구토는 강아지에게 흔한 증상이지만, 그 색깔과 횟수에 따라 단순 과식일 수도, 생명을 위협하는 질병일 수도 있습니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 구토 색깔별 의미</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>노란색:</strong> 공복 토인 경우가 많습니다. 식사 간격을 조절해 보세요.</li>
        <li><strong>하얀색(거품):</strong> 위산 과다나 기관지 문제일 수 있습니다.</li>
        <li><strong>초록색:</strong> 담즙이 섞인 것으로, 췌장염이나 이물질 섭취를 의심해야 합니다.</li>
        <li><strong>붉은색/갈색:</strong> 위장 출혈의 신호입니다. 즉시 병원을 방문하세요.</li>
      </ul>
    </div>
  ),
  '12': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"영양제, 많이 먹인다고 좋은 게 아닙니다. 우리 아이에게 지금 꼭 필요한 것만 골라주세요."</p>
      <p>나이와 건강 상태에 따라 필요한 영양 성분은 다릅니다. 과잉 섭취는 오히려 장기에 부담을 줄 수 있습니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 생애 주기별 추천 영양제</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>성장기:</strong> 면역력 강화를 위한 유산균과 오메가3</li>
        <li><strong>성견기:</strong> 활동량에 따른 관절 영양제와 항산화제</li>
        <li><strong>노령기:</strong> 심장, 신장 기능 보조제와 인지 기능 개선 영양제</li>
      </ul>
    </div>
  ),
  '11': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"눈 밑의 붉은 자국, 단순한 미용 문제가 아니라 건강의 적신호일 수 있습니다."</p>
      <p>눈물 속의 '포르피린' 성분이 공기와 만나 산화되면서 붉은 자국을 남깁니다. 이는 알레르기나 눈 구조의 문제 때문일 수 있습니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 눈물 자국 관리법</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>식단 개선:</strong> 알레르기를 유발하는 간식이나 사료를 중단해 보세요.</li>
        <li><strong>청결 유지:</strong> 눈물을 자주 닦아주고 눈 주변 털을 정리해 줍니다.</li>
        <li><strong>음수 관리:</strong> 깨끗한 물을 충분히 마시게 하여 노폐물 배출을 돕습니다.</li>
      </ul>
    </div>
  ),
  '10': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"뒷다리를 절뚝거리거나 토끼처럼 두 발로 뛰나요? 소형견 집사라면 절대 간과해서는 안 될 신호입니다."</p>
      <p>슬개골 탈구는 국내 반려견의 상당수를 차지하는 소형견들에게 가장 흔한 관절 질환 중 하나입니다. 유전적인 요인이 크지만, 평소 생활 습관과 환경 개선만으로도 진행 속도를 늦추거나 예방할 수 있습니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 슬개골 탈구란 무엇인가요?</h2>
      <p>무릎 관절 위에 있는 작은 뼈인 슬개골이 원래 있어야 할 활차구 고랑에서 벗어나는 상태를 말합니다. 1기부터 4기까지 나뉘며, 기수가 높아질수록 통증과 보행 장애가 심해집니다.</p>
      <h2 className="text-2xl font-black text-gray-800">2. 집에서 할 수 있는 예방법</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>미끄럼 방지 매트:</strong> 거실과 복도에 매트를 깔아 관절에 가해지는 충격을 줄여주세요.</li>
        <li><strong>발바닥 털 관리:</strong> 발바닥 털이 길면 쉽게 미끄러집니다. 주기적으로 정리해 주세요.</li>
        <li><strong>계단 설치:</strong> 침대나 소파를 오르내릴 때 점프하지 않도록 전용 계단을 설치하세요.</li>
        <li><strong>체중 조절:</strong> 과체중은 관절에 가장 큰 적입니다. 적정 체중을 유지해 주세요.</li>
      </ul>
    </div>
  ),
  '9': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지는 사람보다 체온이 높고 땀샘이 적어 열에 매우 취약합니다. 여름철 산책은 생명과 직결될 수 있습니다."</p>
      <p>여름철 한낮의 기온은 강아지에게 치명적입니다. 특히 지면과 가까운 강아지들은 아스팔트의 열기를 온몸으로 받게 됩니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 열사병 의심 증상</h2>
      <p>과도한 헐떡임, 끈적한 침, 붉은 잇몸, 구토, 기력 저하 등이 나타난다면 즉시 산책을 중단하고 시원한 곳으로 이동해야 합니다.</p>
      <h2 className="text-2xl font-black text-gray-800">2. 안전한 여름 산책 팁</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>낮 12시~오후 4시 사이의 산책은 피하세요.</li>
        <li>손등을 아스팔트에 5초간 대보았을 때 뜨겁다면 산책하지 마세요.</li>
        <li>항상 신선한 물을 지참하고 자주 급여하세요.</li>
      </ul>
    </div>
  ),
  '8': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"양치질만 잘해도 강아지의 수명이 2~3년 연장된다는 사실, 알고 계셨나요?"</p>
      <p>치주 질환은 단순히 입 냄새의 원인이 아니라, 세균이 혈관을 타고 들어가 심장이나 신장에 문제를 일으킬 수 있는 무서운 질병입니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 양치질과 친해지는 단계</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>맛있는 치약을 손가락에 묻혀 핥아먹게 합니다.</li>
        <li>입 주변과 잇몸을 만지는 것에 익숙해지게 합니다.</li>
        <li>거즈나 손가락 칫솔로 가볍게 문지릅니다.</li>
        <li>본격적으로 칫솔을 사용하여 어금니 안쪽까지 닦아줍니다.</li>
      </ol>
      <p>각 단계마다 충분한 칭찬과 보상을 잊지 마세요!</p>
    </div>
  ),
  '7': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"대용량 사료가 경제적이지만, 마지막 한 알까지 신선하게 먹이고 계신가요?"</p>
      <p>사료는 공기와 접촉하는 순간부터 산화가 시작됩니다. 산패된 사료는 영양소가 파괴될 뿐만 아니라 강아지의 건강에 해로울 수 있습니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 올바른 보관 원칙</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>밀폐 용기 사용:</strong> 공기와의 접촉을 최소화하는 진공 용기나 밀폐 용기가 좋습니다.</li>
        <li><strong>서늘한 곳 보관:</strong> 직사광선과 습기가 없는 곳에 보관하세요.</li>
        <li><strong>소분 보관:</strong> 일주일 분량씩 나누어 담아두면 사료 전체가 공기에 노출되는 횟수를 줄일 수 있습니다.</li>
      </ul>
    </div>
  ),
  '6': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지가 발을 계속 핥는다면 '맛있어서'가 아니라 '아파서'일 확률이 높습니다."</p>
      <p>발바닥 습진은 많은 강아지들이 겪는 만성 질환입니다. 축축한 상태가 유지되면 세균과 곰팡이가 번식하기 쉬운 환경이 됩니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 습진 예방의 핵심: 건조</h2>
      <p>산책 후 발을 닦아준 뒤에는 반드시 드라이기(찬바람)를 이용해 발가락 사이사이까지 완벽하게 말려주어야 합니다.</p>
      <h2 className="text-2xl font-black text-gray-800">2. 넥카라 활용</h2>
      <p>이미 염증이 생겼다면 핥지 못하게 하는 것이 가장 중요합니다. 핥을수록 침 속의 세균 때문에 증상이 악화됩니다.</p>
    </div>
  ),
  '5': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"사회화는 '친구 만들기'가 아니라 '세상 적응하기'입니다."</p>
      <p>생후 3개월에서 4개월 사이가 사회화의 골든타임입니다. 이 시기에 겪는 긍정적인 경험이 강아지의 평생 성격을 결정합니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 다양한 자극 노출</h2>
      <p>다른 강아지뿐만 아니라 낯선 사람, 자동차 소리, 우산 펴는 소리, 다양한 바닥 재질(잔디, 흙, 아스팔트) 등을 경험하게 해주세요.</p>
      <h2 className="text-2xl font-black text-gray-800">2. 무리하지 않기</h2>
      <p>강아지가 무서워한다면 억지로 다가가게 하지 마세요. 멀리서 지켜보는 것부터 시작하여 천천히 거리를 좁혀가는 것이 중요합니다.</p>
    </div>
  ),
  '4': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"중성화 수술, 우리 아이를 위한 최선의 선택일까요?"</p>
      <p>중성화 수술은 반려견의 생식기 관련 질병을 예방하고, 원치 않는 번식을 막는 가장 확실한 방법입니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 수술의 장점</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>암컷: 자궁축농증, 유선종양 예방</li>
        <li>수컷: 전립선 질환, 고환암 예방 및 마킹/마운팅 감소</li>
      </ul>
      <h2 className="text-2xl font-black text-gray-800">2. 적절한 시기</h2>
      <p>보통 생후 6~10개월 사이를 권장하지만, 견종과 건강 상태에 따라 차이가 있을 수 있으므로 수의사와 충분한 상담이 필요합니다.</p>
    </div>
  ),
  '3': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"산책할 때마다 끌려다니시나요? 리드줄 교육으로 편안한 산책을 시작하세요."</p>
      <p>강아지가 줄을 당기는 이유는 호기심 때문이기도 하지만, 당기면 앞으로 나갈 수 있다는 학습 때문이기도 합니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 교육의 핵심</h2>
      <p>줄이 팽팽해지면 즉시 멈추세요. 강아지가 줄을 늦추고 보호자를 쳐다볼 때 간식과 칭찬으로 보상하세요. '당기면 멈추고, 늦추면 간다'는 원칙을 일관되게 적용해야 합니다.</p>
    </div>
  ),
  '2': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"우리에겐 보약이지만 강아지에겐 독약이 될 수 있습니다."</p>
      <p>사람이 먹는 음식 중에는 강아지의 체내에서 분해되지 못하거나 치명적인 중독을 일으키는 성분이 포함된 경우가 많습니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 절대 금지 음식</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>초콜릿:</strong> 테오브로민 성분이 심장과 신경계에 치명적입니다.</li>
        <li><strong>포도/건포도:</strong> 급성 신부전을 유발할 수 있습니다.</li>
        <li><strong>양파/마늘:</strong> 적혈구를 파괴하여 빈혈을 일으킵니다.</li>
        <li><strong>자일리톨:</strong> 급격한 저혈당과 간 손상을 유발합니다.</li>
      </ul>
    </div>
  ),
  '1': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지 입양, 15년 이상의 책임을 약속하는 일입니다."</p>
      <p>귀여운 모습에 이끌려 충동적으로 입양하기보다는, 자신의 라이프스타일과 경제적 여건을 냉정하게 따져봐야 합니다.</p>
      <h2 className="text-2xl font-black text-gray-800">1. 입양 전 자가 진단</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>매일 최소 1시간 이상 산책시킬 여유가 있는가?</li>
        <li>매달 사료, 간식, 병원비 등 고정 지출을 감당할 수 있는가?</li>
        <li>가족 모두가 입양에 동의하는가?</li>
        <li>털 날림이나 짖음 문제를 인내할 수 있는가?</li>
      </ul>
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
