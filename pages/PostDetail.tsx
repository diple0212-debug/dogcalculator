
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS_DATA } from './Posts.tsx';
import AdPlaceholder from '../components/AdPlaceholder.tsx';

const POST_CONTENTS: Record<string, React.ReactNode> = {
  '30': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지의 피부는 사람보다 3배나 얇고 예민합니다. 우리가 무심코 사용하는 샴푸 속 성분이 아이들에게는 치명적인 독이 될 수 있다는 사실, 알고 계셨나요?"</p>
      
      <p>반려견을 키우는 보호자라면 누구나 아이의 털을 부드럽게 하고 좋은 향기가 나게 하고 싶어 합니다. 하지만 향기롭고 거품이 잘 나는 샴푸가 반드시 좋은 것은 아닙니다. 오히려 그런 제품일수록 화학 성분이 가득 들어있어 강아지의 연약한 피부 장벽을 무너뜨릴 위험이 큽니다. 오늘 '똑똑한 집사'에서는 <strong>강아지 샴푸를 고를 때 반드시 피해야 할 유해 성분 5가지와 우리 아이의 피부 건강을 지키는 올바른 선택 기준</strong>을 3000자 이상의 방대한 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 강아지 피부, 왜 사람 샴푸를 쓰면 안 될까요?</h2>
      <p>가장 큰 이유는 'pH 지수'의 차이와 '피부 두께' 때문입니다.</p>
      <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 space-y-4 my-6">
        <p><strong>● pH 지수의 차이:</strong> 사람의 피부는 pH 5.2~5.5 정도의 약산성인 반면, 강아지의 피부는 pH 7.0~7.5 정도의 중성 또는 약알칼리성입니다. 사람용 샴푸를 강아지에게 사용하면 피부의 산성도가 파괴되어 세균 번식이 쉬워지고 극심한 건조함을 유발합니다.</p>
        <p><strong>● 얇은 피부층:</strong> 강아지의 피부 표피층은 사람보다 3~5배 정도 더 얇습니다. 이는 외부 자극이나 화학 성분이 피부 속으로 훨씬 더 쉽게 침투한다는 것을 의미합니다.</p>
        <p><strong>● 땀샘의 부재:</strong> 강아지는 발바닥을 제외하고는 땀샘이 거의 없습니다. 피부를 통해 노폐물을 배출하는 능력이 떨어지기 때문에 화학 성분이 피부에 남았을 때의 부작용이 훨씬 큽니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 반드시 피해야 할 '유해 성분' TOP 5</h2>
      <p>전 성분 표를 확인하실 때 다음 성분들이 포함되어 있다면 구매를 재고해 보시는 것이 좋습니다.</p>
      
      <div className="space-y-10">
        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">① 설페이트계 계면활성제 (SLS, SLES)</h4>
          <p className="text-gray-700 leading-relaxed">풍성한 거품을 내고 세정력을 높이기 위해 사용되는 성분입니다. 하지만 세정력이 너무 강력해 피부의 필수 유분까지 앗아가며, 피부 장벽을 손상시켜 가려움증과 염증을 유발합니다. 또한 제조 과정에서 발암 물질인 '1,4-다이옥산'에 오염될 가능성이 있어 주의가 필요합니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">② 파라벤 (Parabens)</h4>
          <p className="text-gray-700 leading-relaxed">제품의 보존 기간을 늘리기 위해 사용되는 방부제입니다. 호르몬 체계를 교란하는 '내분비계 장애 물질'로 알려져 있으며, 피부를 통해 흡수되어 체내에 축적될 수 있습니다. 메틸파라벤, 프로필파라벤 등 '파라벤'이라는 이름이 들어간 성분은 피하는 것이 상책입니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">③ 인공 향료 및 인공 색소</h4>
          <p className="text-gray-700 leading-relaxed">강아지의 후각은 사람보다 수만 배 예민합니다. 사람이 맡기에 좋은 진한 향기는 강아지에게는 엄청난 스트레스와 두통을 유발할 수 있습니다. 또한 인공 향료는 알레르기 반응의 주범이며, 인공 색소는 피부 자극과 발암 위험성이 제기되고 있습니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">④ 페녹시에탄올 (Phenoxyethanol)</h4>
          <p className="text-gray-700 leading-relaxed">파라벤 대신 사용되는 방부제이지만, 이 역시 피부 자극과 알레르기를 유발할 수 있습니다. 특히 강아지가 목욕 중 샴푸 물을 핥게 될 경우 중추신경계에 영향을 줄 수 있다는 연구 결과가 있어 각별한 주의가 필요합니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">⑤ 미네랄 오일 (Mineral Oil)</h4>
          <p className="text-gray-700 leading-relaxed">석유에서 추출한 오일로, 털을 부드럽게 보이게 하는 효과가 있지만 피부의 모공을 막아 노폐물 배출을 방해합니다. 이는 피부의 자연스러운 재생 능력을 떨어뜨리고 만성적인 피부 질환의 원인이 됩니다.</p>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 좋은 샴푸를 고르는 3가지 핵심 기준</h2>
      <p>단순히 '천연'이라는 단어에 속지 마세요. 진짜 안전한 제품은 다음과 같은 특징을 가집니다.</p>
      <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200 my-10">
        <ul className="space-y-6 text-gray-700 font-medium">
          <li className="flex items-start gap-4">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</span>
            <div>
              <p className="text-lg font-bold text-gray-900">전 성분 공개 여부 확인</p>
              <p className="text-sm mt-1">현행법상 강아지 샴푸는 전 성분을 공개할 의무가 없습니다. 그럼에도 불구하고 모든 성분을 투명하게 공개하는 브랜드는 그만큼 성분에 자신이 있다는 증거입니다.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</span>
            <div>
              <p className="text-lg font-bold text-gray-900">EWG 그린 등급 성분 위주</p>
              <p className="text-sm mt-1">미국 환경 연구 단체(EWG)에서 분류한 성분 안전 등급 중 1~2등급(그린 등급) 성분을 주로 사용했는지 확인하세요. 이는 성분의 유해성을 판단하는 객관적인 지표가 됩니다.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</span>
            <div>
              <p className="text-lg font-bold text-gray-900">천연 유래 계면활성제 사용</p>
              <p className="text-sm mt-1">코코넛, 사탕수수 등에서 추출한 천연 유래 계면활성제(예: 코코-글루코사이드, 라우릴글루코사이드)는 세정력은 유지하면서도 피부 자극을 최소화합니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 피부 타입별 추천 성분</h2>
      <p>우리 아이의 피부 상태에 따라 필요한 성분이 다를 수 있습니다.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm">
          <h4 className="font-bold text-indigo-700 mb-2">🌵 건조하고 가려운 피부</h4>
          <p className="text-sm text-gray-600">오트밀, 알로에 베라, 세라마이드 성분이 함유된 제품을 고르세요. 수분을 공급하고 가려움증을 완화하는 데 효과적입니다.</p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm">
          <h4 className="font-bold text-indigo-700 mb-2">🦠 염증이 잦은 예민한 피부</h4>
          <p className="text-sm text-gray-600">병풀 추출물(시카), 마데카소사이드, 카모마일 성분이 좋습니다. 피부 재생을 돕고 염증을 진정시키는 효과가 있습니다.</p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm">
          <h4 className="font-bold text-indigo-700 mb-2">🌬️ 각질이 많은 피부</h4>
          <p className="text-sm text-gray-600">살리실산(낮은 농도)이나 티트리 오일(희석된 것)이 각질 제거와 항균 작용에 도움을 줄 수 있습니다. 단, 티트리는 고농도일 경우 독성이 있으므로 주의해야 합니다.</p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm">
          <h4 className="font-bold text-indigo-700 mb-2">✨ 윤기 없는 털</h4>
          <p className="text-sm text-gray-600">실크 아미노산, 비오틴, 아르간 오일 성분이 털에 영양을 공급하여 윤기 있고 부드러운 모질을 만들어줍니다.</p>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">5. 올바른 목욕 방법: 성분만큼 중요합니다</h2>
      <p>아무리 좋은 샴푸를 써도 방법이 틀리면 소용없습니다.</p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>희석해서 사용하기:</strong> 샴푸 원액을 직접 피부에 닿게 하기보다는 물에 희석하여 거품을 낸 뒤 사용하는 것이 자극을 줄이는 가장 좋은 방법입니다.</li>
        <li><strong>충분히 헹구기:</strong> 샴푸 성분이 피부에 남으면 아무리 좋은 성분이라도 자극이 됩니다. 헹구는 시간은 샴푸 하는 시간의 2~3배 정도로 넉넉히 잡으세요.</li>
        <li><strong>완벽한 건조:</strong> 샴푸 후 털 사이사이를 완벽하게 말려주지 않으면 습진이나 곰팡이성 피부염이 생길 수 있습니다. 특히 발가락 사이와 귀 주변을 신경 써주세요.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">6. 결론: 샴푸 선택은 건강의 시작입니다</h2>
      <p>강아지에게 목욕은 단순히 몸을 씻는 행위를 넘어, 피부 건강을 체크하고 관리하는 소중한 시간입니다. 화려한 패키지나 강한 향기에 현혹되지 말고, 뒷면의 성분표를 꼼꼼히 읽는 습관을 들여보세요. 보호자의 작은 노력이 우리 아이의 평생 피부 건강을 결정합니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 사랑한다면 성분을 보세요</h3>
      <p>말 못 하는 우리 아이들은 샴푸가 따갑거나 가려워도 표현할 방법이 없습니다. 그저 긁거나 핥을 뿐이죠. 아이들의 침묵 섞인 고통을 예방하는 것은 오직 보호자의 몫입니다. 오늘 알려드린 정보를 통해 우리 아이에게 꼭 맞는 '인생 샴푸'를 찾으시길 바랍니다. 똑똑한 집사는 모든 반려견이 건강한 피부로 행복하게 뛰어노는 세상을 응원합니다!</p>
    </div>
  ),
  '29': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"보호자가 외출할 때마다 들리는 처절한 하울링, 퇴근 후 마주하는 엉망이 된 집안... 이것은 단순한 말썽이 아닌 우리 아이의 간절한 구조 신호일 수 있습니다."</p>
      
      <p>강아지에게 보호자는 세상의 전부입니다. 하지만 그 애착이 지나쳐 보호자와 떨어져 있을 때 극심한 공포와 불안을 느끼는 상태를 '분리불안'이라고 합니다. 많은 보호자분들이 "우리 아이는 그냥 외로움을 많이 타요"라고 가볍게 넘기시곤 하지만, 방치된 분리불안은 강아지의 정신적, 육체적 건강을 심각하게 해칠 뿐만 아니라 보호자의 삶의 질도 떨어뜨립니다. 오늘 '똑똑한 집사'에서는 <strong>우리 아이의 현재 상태를 정확히 파악할 수 있는 20가지 자가진단 테스트와 분리불안을 극복하기 위한 실질적인 해결책</strong>을 3000자 이상의 방대한 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 분리불안(Separation Anxiety)이란 무엇인가요?</h2>
      <p>분리불안은 단순히 혼자 있는 것을 싫어하는 수준을 넘어, 보호자와의 분리가 예상되거나 실제로 일어났을 때 나타나는 병적인 불안 반응입니다.</p>
      <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 space-y-4 my-6">
        <p><strong>● 공포 반응:</strong> 보호자가 나갈 준비를 하는 소리(열쇠 소리, 옷 입는 소리 등)만 들어도 심박수가 급격히 상승하고 안절부절못합니다.</p>
        <p><strong>● 패닉 상태:</strong> 보호자가 문을 닫고 나가는 순간부터 패닉에 빠져 탈출을 시도하거나 자해를 하기도 합니다.</p>
        <p><strong>● 자율신경계 이상:</strong> 침 흘림, 구토, 설사, 부적절한 배변 실수 등 신체적인 이상 증상이 동반됩니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. [자가진단] 우리 강아지 분리불안 테스트 (20문항)</h2>
      <p>지난 한 달간 우리 아이의 행동을 떠올리며 해당되는 항목의 개수를 세어보세요.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          "보호자가 외출 준비를 하면 낑낑거리거나 안절부절못한다.",
          "외출 시 문앞을 가로막거나 옷을 물고 늘어진다.",
          "보호자가 나간 직후부터 하울링이나 짖음이 시작된다.",
          "혼자 있을 때 문이나 창문 주변을 긁어 파손시킨다.",
          "평소에는 잘 가리던 배변을 혼자 있을 때만 실수한다.",
          "외출 후 돌아오면 집안 물건(리모컨, 신발 등)이 씹혀 있다.",
          "혼자 있을 때 침을 과도하게 흘려 바닥이 젖어 있다.",
          "보호자가 집에 돌아왔을 때 지나치게 흥분하며 진정되지 않는다.",
          "집안에서도 보호자의 뒤를 졸졸 따라다니는 '껌딱지'다.",
          "보호자가 화장실만 가도 문앞에서 기다리며 운다.",
          "혼자 있을 때 사료나 간식을 전혀 먹지 않는다.",
          "외출 준비 소리(차 키, 가방)에 숨거나 벌벌 떤다.",
          "혼자 있을 때 자신의 발이나 꼬리를 과도하게 핥거나 깨문다.",
          "보호자가 외출하면 밥을 먹지 않다가 돌아오면 폭식한다.",
          "혼자 있는 동안 좁은 구석에 숨어서 나오지 않는다.",
          "보호자의 외출 시간이 길어질수록 파괴 행동이 심해진다.",
          "낯선 장소에 혼자 남겨지면 극도의 공포를 보인다.",
          "보호자가 외출복으로 갈아입으면 표정이 급격히 어두워진다.",
          "혼자 있을 때 헥헥거림(팬팅)이 멈추지 않는다.",
          "보호자와 눈이 마주치지 않으면 불안해하며 계속 시선을 쫓는다."
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
            <p className="text-sm text-gray-700">{item}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] my-10">
        <h3 className="text-xl font-black mb-4 text-amber-400">📊 테스트 결과 해석</h3>
        <ul className="space-y-4">
          <li><span className="font-bold text-amber-200">0~4개 (정상):</span> 일반적인 애착 관계입니다. 가끔 심심해할 수 있으나 큰 문제는 없습니다.</li>
          <li><span className="font-bold text-amber-200">5~10개 (주의):</span> 가벼운 분리불안 증세가 보입니다. 예방 교육이 필요한 시점입니다.</li>
          <li><span className="font-bold text-amber-200">11~15개 (위험):</span> 명확한 분리불안 상태입니다. 적극적인 행동 교정이 시급합니다.</li>
          <li><span className="font-bold text-amber-200">16개 이상 (심각):</span> 중증 분리불안입니다. 전문가의 도움과 약물 치료 병행이 필요할 수 있습니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 분리불안의 주요 증상 심층 분석</h2>
      <p>단순한 말썽과 분리불안에 의한 행동은 동기부터 다릅니다.</p>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
          <h4 className="font-black text-lg text-gray-800 mb-3">① 파괴적인 행동 (Destruction)</h4>
          <p className="text-gray-600 leading-relaxed">주로 현관문, 창문, 문틀 등 '탈출 경로'를 공격합니다. 이는 보호자를 찾으러 나가고 싶은 간절함의 표현입니다. 또한 보호자의 냄새가 짙게 밴 물건(신발, 양말, 리모컨)을 씹는 것은 보호자의 냄새를 통해 안정을 찾으려는 시도입니다.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
          <h4 className="font-black text-lg text-gray-800 mb-3">② 끊임없는 소음 (Vocalization)</h4>
          <p className="text-gray-600 leading-relaxed">하울링이나 짖음은 멀리 있는 무리를 부르는 본능적인 행동입니다. "나 여기 있어요! 빨리 돌아오세요!"라는 외침입니다. 아파트와 같은 공동주택에서는 이웃 간의 갈등으로 번지기 쉬워 보호자를 더욱 힘들게 만드는 요인입니다.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
          <h4 className="font-black text-lg text-gray-800 mb-3">③ 생리적 이상 징후 (Physiological Signs)</h4>
          <p className="text-gray-600 leading-relaxed">극도의 스트레스는 소화 기관에 영향을 줍니다. 혼자 있을 때만 설사를 하거나 토를 하는 경우, 혹은 평소 완벽하던 배변 습관이 무너지는 것은 근육 조절 능력을 상실할 정도의 패닉 상태임을 의미합니다.</p>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 왜 우리 강아지는 분리불안이 생겼을까?</h2>
      <p>원인을 알아야 정확한 해결이 가능합니다.</p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>과도한 의존성 형성:</strong> 어릴 때부터 24시간 내내 보호자와 붙어 지내며 '혼자 있는 법'을 배우지 못한 경우입니다.</li>
        <li><strong>환경의 급격한 변화:</strong> 이사, 새로운 가족 구성원의 등장, 혹은 반대로 가족의 부재 등이 트리거가 될 수 있습니다.</li>
        <li><strong>트라우마:</strong> 혼자 있을 때 큰 천둥소리가 났거나, 무서운 경험을 했던 기억이 불안을 고착화시킵니다.</li>
        <li><strong>유전적 요인:</strong> 선천적으로 불안도가 높은 기질을 타고난 아이들도 있습니다.</li>
      </ul>

      <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 my-10">
        <h3 className="text-xl font-black text-blue-800 mb-4">🚀 분리불안 극복을 위한 5단계 솔루션</h3>
        <div className="space-y-6">
          <div>
            <h5 className="font-bold text-blue-900 mb-1">1단계: 외출 신호 둔감화 교육</h5>
            <p className="text-blue-800 text-sm">옷을 입거나 열쇠를 집어 들고 나가지 않는 연습을 반복하세요. "열쇠 소리 = 보호자가 떠남"이라는 공식을 깨야 합니다.</p>
          </div>
          <div>
            <h5 className="font-bold text-blue-900 mb-1">2단계: 짧은 이별 연습 (5초부터 시작)</h5>
            <p className="text-blue-800 text-sm">문을 닫고 나갔다가 불안해하기 전(단 5초라도)에 돌아와 보상하세요. "보호자는 반드시 돌아온다"는 신뢰를 쌓는 과정입니다.</p>
          </div>
          <div>
            <h5 className="font-bold text-blue-900 mb-1">3단계: 독립적인 공간 마련</h5>
            <p className="text-blue-800 text-sm">집안에서도 계속 따라다니지 못하게 '기다려' 교육을 하고, 자신만의 안전한 하우스(크레이트)에서 쉬는 연습을 시키세요.</p>
          </div>
          <div>
            <h5 className="font-bold text-blue-900 mb-1">4단계: 노즈워크와 풍부한 자극</h5>
            <p className="text-blue-800 text-sm">외출 직전 아주 맛있는 간식이 든 노즈워크 장난감을 주어, 보호자의 외출을 '맛있는 것이 생기는 즐거운 시간'으로 치환하세요.</p>
          </div>
          <div>
            <h5 className="font-bold text-blue-900 mb-1">5단계: 충분한 산책과 에너지 발산</h5>
            <p className="text-blue-800 text-sm">"피곤한 강아지가 행복한 강아지다"라는 말처럼, 외출 전 충분한 산책으로 에너지를 소진시켜 잠을 자게 유도하는 것이 효과적입니다.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">5. 결론: 인내심이 만드는 기적</h2>
      <p>분리불안 교정은 하루아침에 이루어지지 않습니다. 때로는 나아지는 듯하다가 다시 나빠지는 '퇴보'의 과정을 겪기도 합니다. 하지만 보호자가 포기하지 않고 일관된 태도로 교육한다면, 우리 아이는 반드시 혼자서도 편안하게 쉴 수 있는 용기를 얻게 될 것입니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 당신의 사랑이 정답입니다</h3>
      <p>강아지의 분리불안은 당신을 너무나 사랑하기 때문에 생기는 아픈 사랑의 병입니다. 아이를 혼내기보다는 그 불안한 마음을 먼저 안아주세요. 똑똑한 집사는 모든 반려견과 보호자가 떨어져 있는 시간에도 서로를 믿으며 행복할 수 있기를 진심으로 응원합니다!</p>
    </div>
  ),
  '28': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지의 맑고 초롱초롱한 눈, 하지만 눈가에 뭉친 눈곱과 눈을 찌르는 털은 단순한 미관상의 문제를 넘어 안구 질환의 원인이 됩니다. 안전하고 효과적인 눈가 관리 비법을 공개합니다."</p>
      
      <p>강아지를 키우다 보면 매일 아침 마주하게 되는 것이 바로 '눈곱'입니다. 특히 말티즈, 푸들, 비숑 프리제와 같이 눈가 털이 계속 자라는 견종들은 관리가 조금만 소홀해도 눈물 자국이 생기거나 눈가 피부가 짓무르기 쉽습니다. 눈가 관리는 강아지의 인상을 결정짓는 중요한 요소일 뿐만 아니라, 결막염이나 각막염 같은 질병을 예방하는 필수적인 위생 관리입니다. 오늘 '똑똑한 집사'에서는 <strong>강아지 눈곱을 안전하게 제거하는 법부터 초보자도 할 수 있는 눈가 털 정리 노하우</strong>를 2000자 이상의 상세 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 강아지 눈가 관리가 왜 중요한가요?</h2>
      <p>강아지의 눈은 사람보다 외부 자극에 취약하며, 털이 눈을 찌르는 구조적 문제를 가진 경우가 많습니다.</p>
      <div className="bg-teal-50 p-6 rounded-3xl border border-teal-100 space-y-4 my-6">
        <p><strong>● 안구 손상 방지:</strong> 길게 자란 털이 눈을 찌르면 각막에 상처를 입히거나 지속적인 자극으로 인해 눈물이 과도하게 분비됩니다.</p>
        <p><strong>● 세균 번식 억제:</strong> 젖은 눈가 털은 세균과 곰팡이가 번식하기 가장 좋은 환경입니다. 이는 지독한 냄새와 함께 피부염을 유발합니다.</p>
        <p><strong>● 눈물 자국 예방:</strong> 눈물 속의 포르피린 성분은 공기와 만나면 붉게 변색됩니다. 방치하면 털이 착색되어 되돌리기 어렵습니다.</p>
        <p><strong>● 시야 확보:</strong> 눈 앞을 가리는 털을 정리해 주면 강아지의 시야가 넓어져 심리적 불안감을 줄여줄 수 있습니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 눈곱, 억지로 떼지 마세요! 안전한 제거법</h2>
      <p>딱딱하게 굳은 눈곱을 손으로 억지로 떼어내면 피부에 상처가 나고 강아지가 통증을 느껴 관리를 거부하게 됩니다.</p>
      
      <div className="space-y-10">
        <div className="border-l-4 border-teal-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">① 미온수로 불리기</h4>
          <p className="text-gray-700 leading-relaxed">깨끗한 거즈나 화장솜에 미온수를 충분히 적셔 눈곱 위에 1~2분 정도 살포시 올려둡니다. 눈곱이 충분히 불어 말랑해질 때까지 기다리는 것이 핵심입니다. 전용 눈 세정제를 사용하면 더욱 효과적입니다.</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">② 눈곱 빗 활용하기</h4>
          <p className="text-gray-700 leading-relaxed">불린 눈곱은 촘촘한 '눈곱 빗'을 사용하여 결 방향대로 부드럽게 빗어내세요. 이때 빗이 안구를 찌르지 않도록 손가락으로 눈 주변 피부를 살짝 당겨 고정하는 것이 좋습니다.</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">③ 물기 제거하기</h4>
          <p className="text-gray-700 leading-relaxed">눈곱을 제거한 후에는 반드시 마른 거즈로 주변의 물기를 닦아주세요. 습한 상태로 방치하면 다시 세균이 번식하여 냄새가 날 수 있습니다.</p>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 초보 보호자를 위한 눈가 털 정리 가이드</h2>
      <p>가위를 눈 근처에 가져가는 것은 매우 위험할 수 있으므로 철저한 준비가 필요합니다.</p>
      <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200 my-10">
        <h3 className="text-xl font-black text-gray-800 mb-4">✂️ 안전한 털 정리 단계</h3>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li><strong>1. 도구 선택:</strong> 끝이 뭉툭한 '안전 가위'나 소형 '부분 미용기'를 사용하세요. 날카로운 가위는 강아지가 갑자기 움직일 때 큰 사고로 이어질 수 있습니다.</li>
          <li><strong>2. 보상과 안정:</strong> 미용 전 간식을 주어 긍정적인 인식을 심어주고, 강아지가 흥분하지 않은 상태에서 시작하세요.</li>
          <li><strong>3. 고정법:</strong> 강아지의 턱 아래를 가볍게 잡아 머리가 움직이지 않도록 고정합니다. 다른 한 손은 가위를 쥔 채 새끼손가락을 강아지 얼굴에 살짝 대어 지지대 역할을 하게 합니다.</li>
          <li><strong>4. 절단 방향:</strong> 가위 날은 항상 눈 바깥쪽을 향하게 하세요. 눈 앞머리에서 코 방향으로, 위에서 아래로 조금씩 다듬어 나갑니다.</li>
          <li><strong>5. 욕심 버리기:</strong> 한 번에 완벽하게 하려 하지 마세요. 강아지가 싫어하면 즉시 중단하고 나중에 다시 시도하는 것이 트라우마를 방지하는 길입니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 눈곱으로 보는 건강 신호: 언제 병원에 가야 할까?</h2>
      <p>평소와 다른 눈곱은 질병의 신호일 수 있습니다. 매일 체크해 보세요.</p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>투명하거나 옅은 갈색 눈곱:</strong> 정상적인 신진대사 과정에서 생기는 눈곱입니다. 걱정하지 않으셔도 됩니다.</li>
        <li><strong>노란색 또는 초록색 눈곱:</strong> 세균 감염이나 염증(결막염 등)이 의심됩니다. 즉시 수의사의 진료가 필요합니다.</li>
        <li><strong>과도한 눈물과 붉은 눈:</strong> 알레르기, 각막 상처, 혹은 속눈썹이 눈을 찌르는 '안검내반증'일 가능성이 높습니다.</li>
        <li><strong>눈을 제대로 못 뜨거나 비비는 행동:</strong> 통증이 심하다는 증거입니다. 각막 궤양으로 진행될 수 있으니 빠른 조치가 필요합니다.</li>
      </ul>

      <div className="bg-rose-50 p-8 rounded-[2.5rem] border border-rose-100 my-10">
        <h3 className="text-xl font-black text-rose-800 mb-4">💡 눈 건강을 위한 생활 습관</h3>
        <p className="text-rose-900 mb-4">청결한 환경과 영양 공급이 병행되어야 합니다.</p>
        <ul className="space-y-2 text-rose-900 font-medium">
          <li>- 실내 습도를 40~60%로 유지하여 안구 건조를 예방하세요.</li>
          <li>- 산책 후에는 인공눈물이나 세정제로 눈에 들어간 먼지를 씻어내 주세요.</li>
          <li>- 루테인이나 안토시아닌이 풍부한 눈 영양제 섭취를 고려해 보세요.</li>
          <li>- 눈물 자국이 심하다면 사료 알레르기 테스트를 진행해 보는 것이 좋습니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">5. 결론: 매일 1분의 투자가 만드는 건강한 눈</h2>
      <p>강아지 눈가 관리는 거창한 미용 기술이 아닙니다. 매일 아침 눈곱을 닦아주고, 일주일에 한 번 삐져나온 털을 살짝 다듬어주는 '관심'입니다. 보호자의 세심한 손길이 우리 아이의 맑은 눈을 평생 지켜줄 수 있습니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 눈을 맞추며 나누는 교감</h3>
      <p>눈가 관리를 하는 시간은 강아지와 눈을 맞추며 깊은 교감을 나누는 시간이기도 합니다. 처음에는 서툴고 강아지도 낯설어하겠지만, 인내심을 갖고 부드럽게 다가가 보세요. 똑똑한 집사는 세상의 모든 반려견이 아프지 않고 맑은 눈으로 세상을 바라보기를 응원합니다!</p>
    </div>
  ),
  '27': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"여름철 무더위, 털이 복슬복슬한 우리 아이가 너무 더워 보여 털을 싹 밀어주고 싶으신가요? 하지만 이중모 견종에게 삭발은 오히려 독이 될 수 있습니다."</p>
      
      <p>포메라니안, 스피츠, 웰시코기, 골든 리트리버, 진돗개... 이들의 공통점은 바로 '이중모(Double Coat)'를 가졌다는 것입니다. 날씨가 더워지면 많은 보호자분들이 아이들이 시원해지길 바라는 마음에서 이른바 '빡빡이 미용'이라 불리는 삭발을 선택하곤 합니다. 하지만 이는 강아지의 신체 구조와 생리적 특성을 고려하지 않은 위험한 선택일 수 있습니다. 오늘 '똑똑한 집사'에서는 <strong>이중모 강아지에게 삭발 미용이 왜 위험한지, 그리고 여름철 올바른 털 관리법</strong>을 2000자 이상의 상세 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 이중모(Double Coat)란 무엇인가요?</h2>
      <p>이중모는 겉털(Guard Hair)과 속털(Undercoat) 두 층으로 이루어진 털 구조를 말합니다.</p>
      <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100 space-y-4 my-6">
        <p><strong>● 겉털 (Guard Hair):</strong> 빳빳하고 긴 털로, 외부의 먼지, 습기, 자외선으로부터 피부를 보호하는 역할을 합니다. 색상이 선명하고 물을 튕겨내는 성질이 있습니다.</p>
        <p><strong>● 속털 (Undercoat):</strong> 부드럽고 촘촘한 털로, 체온을 유지하는 절연체 역할을 합니다. 겨울에는 빽빽하게 자라 추위를 막아주고, 여름에는 적절히 빠지면서 공기층을 형성해 열기를 차단합니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 삭발 미용이 위험한 4가지 결정적 이유</h2>
      <p>털을 밀면 시원할 것 같지만, 실제로는 정반대의 현상이 일어납니다.</p>
      
      <div className="space-y-10">
        <div className="border-l-4 border-rose-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">① 체온 조절 능력의 상실</h4>
          <p className="text-gray-700 leading-relaxed">강아지의 털은 '천연 단열재'입니다. 겨울에는 온기를 가두고, 여름에는 외부의 뜨거운 열기가 피부에 직접 닿는 것을 막아줍니다. 털을 싹 밀어버리면 이 단열층이 사라져 외부 열기가 피부로 바로 전달됩니다. 즉, 털이 있을 때보다 더 쉽게 체온이 올라가고 일사병에 걸릴 위험이 커집니다.</p>
        </div>

        <div className="border-l-4 border-rose-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">② 자외선 노출과 화상 위험</h4>
          <p className="text-gray-700 leading-relaxed">강아지의 피부는 사람보다 훨씬 얇고 예민합니다. 겉털이 자외선을 차단해 주는데, 이를 밀어버리면 무방비 상태로 태양빛에 노출됩니다. 이는 심각한 일광 화상을 유발할 수 있으며, 장기적으로는 피부암의 원인이 되기도 합니다.</p>
        </div>

        <div className="border-l-4 border-rose-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">③ 외부 자극 및 해충 노출</h4>
          <p className="text-gray-700 leading-relaxed">털은 풀숲의 날카로운 풀잎, 나뭇가지, 그리고 모기나 진드기 같은 해충으로부터 피부를 보호하는 물리적 방어막입니다. 삭발 상태에서는 작은 자극에도 쉽게 상처가 나고 벌레에 물리기 쉬워져 각종 피부염과 감염병에 취약해집니다.</p>
        </div>

        <div className="border-l-4 border-rose-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">④ 알러지 및 가려움증 유발</h4>
          <p className="text-gray-700 leading-relaxed">털이 짧게 잘리면 잘린 털 끝이 피부를 찔러 극심한 가려움증을 유발할 수 있습니다. 강아지가 이를 참지 못하고 긁거나 핥으면서 2차적인 피부 감염이 발생하기도 합니다.</p>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 가장 무서운 부작용: 클리퍼 증후군 (Post-Clipping Alopecia)</h2>
      <p>이중모 견종에게 삭발 미용 후 가장 흔하게 발생하는 심각한 문제입니다.</p>
      <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 my-10">
        <h3 className="text-xl font-black text-amber-800 mb-4">⚠️ 클리퍼 증후군이란?</h3>
        <p className="text-amber-900 mb-4">기계(클리퍼)로 털을 짧게 민 후, 털이 다시 자라지 않거나 매우 불규칙하게 자라는 현상을 말합니다. 털의 질감이 거칠어지고 색이 변하며, 심한 경우 영구적인 탈모로 이어질 수 있습니다.</p>
        <ul className="space-y-2 text-amber-900 font-medium">
          <li>- 털이 자라는 주기가 파괴되어 발생합니다.</li>
          <li>- 특히 포메라니안, 스피츠 계열에서 빈번하게 나타납니다.</li>
          <li>- 원래 상태로 회복하는 데 수개월에서 수년이 걸릴 수 있으며, 100% 회복되지 않을 수도 있습니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 여름철 올바른 이중모 관리법</h2>
      <p>삭발 대신 다음과 같은 방법으로 아이들의 여름을 시원하게 만들어주세요.</p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>잦은 빗질 (가장 중요):</strong> 속털을 솎아내 주는 빗질은 공기 순환을 도와 체온 조절 능력을 극대화합니다. 죽은 털을 제거하는 것만으로도 아이들은 훨씬 시원함을 느낍니다.</li>
        <li><strong>부분 미용 활용:</strong> 위생을 위해 발바닥, 항문 주위, 배 부분만 짧게 다듬어주는 것은 괜찮습니다.</li>
        <li><strong>가위 컷 선택:</strong> 전체적인 길이를 줄이고 싶다면 기계 미용보다는 가위로 털의 끝부분만 다듬는 '가위 컷'을 추천합니다. 피부를 보호할 수 있는 최소한의 길이는 남겨야 합니다.</li>
        <li><strong>환경 조절:</strong> 털을 미는 것보다 실내 온도를 적절히 유지하고, 쿨매트나 신선한 물을 제공하는 것이 훨씬 효과적인 열사병 예방책입니다.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">5. 결론: 털은 아이들의 옷이자 방패입니다</h2>
      <p>사람의 시각에서 "더워 보인다"는 이유로 아이들의 소중한 보호막을 제거하지 말아 주세요. 이중모 강아지에게 털은 여름에는 에어컨, 겨울에는 히터 역할을 하는 정교한 시스템입니다. 올바른 빗질과 세심한 환경 관리로 우리 아이들이 건강하고 시원하게 여름을 날 수 있도록 도와주세요.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 지혜로운 반려인의 선택</h3>
      <p>반려견의 건강은 보호자의 올바른 지식에서 시작됩니다. 유행이나 편의를 위한 미용보다는 아이의 신체적 특성을 존중하는 관리가 필요합니다. 오늘 알려드린 정보가 이중모 아이들과 함께하는 모든 가정에 도움이 되기를 바랍니다. 똑똑한 집사는 모든 강아지가 자신의 본연의 모습 그대로 건강하고 행복하게 지내는 세상을 응원합니다!</p>
    </div>
  ),
  '26': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지와 함께하는 드라이브, 즐거운 추억이 되기 위해서는 '안전'이 최우선입니다. 왜 강아지에게도 전용 카시트가 필요한지, 그리고 어떤 제품을 선택해야 하는지 상세히 알려드립니다."</p>
      
      <p>날씨가 좋아지면 반려견과 함께 근교로 나들이를 떠나는 분들이 많습니다. 하지만 많은 보호자분들이 강아지를 조수석에 그냥 앉히거나, 무릎 위에 올리고 운전하는 위험한 행동을 하곤 합니다. 강아지는 사람보다 훨씬 가볍고 작은 충격에도 큰 부상을 입을 수 있습니다. 오늘 '똑똑한 집사'에서는 <strong>강아지 카시트 설치가 왜 선택이 아닌 필수인지, 그리고 우리 아이에게 꼭 맞는 카시트를 고르는 법</strong>을 2000자 이상의 상세 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 강아지 카시트가 반드시 필요한 4가지 이유</h2>
      <p>단순히 '편안함'을 위해서가 아닙니다. 카시트는 생명과 직결되는 안전 장치입니다.</p>
      <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 space-y-4 my-6">
        <p><strong>● 급정거 및 사고 시 충격 완화:</strong> 자동차가 시속 40km로 달리다 급정거할 때, 고정되지 않은 강아지는 앞으로 튕겨 나가 대시보드나 앞 유리에 부딪힐 수 있습니다. 카시트는 강아지를 한 공간에 고정시켜 튕겨 나가는 것을 방지합니다.</p>
        <p><strong>● 운전자 집중력 분산 방지:</strong> 강아지가 차 안에서 자유롭게 돌아다니거나 운전자의 무릎으로 올라오려고 하면 큰 사고로 이어질 수 있습니다. 카시트는 강아지의 활동 범위를 제한하여 운전자가 운전에만 집중할 수 있게 돕습니다.</p>
        <p><strong>● 멀미 예방 및 심리적 안정:</strong> 차 안에서 흔들림을 많이 느끼면 강아지도 멀미를 합니다. 카시트는 몸을 안정적으로 지탱해 주어 흔들림을 줄이고, 자신만의 독립된 공간이라는 인식을 주어 불안감을 해소해 줍니다.</p>
        <p><strong>● 시트 오염 및 털 빠짐 방지:</strong> 야외 활동 후 묻어온 흙먼지나 털이 자동차 시트에 직접 닿는 것을 방지하여 차량 내부를 청결하게 유지할 수 있습니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 우리 아이에게 맞는 카시트 유형 선택하기</h2>
      <p>강아지의 크기와 성향에 따라 적합한 카시트 형태가 다릅니다.</p>
      
      <div className="space-y-10">
        <div className="border-l-4 border-blue-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">① 박스형 카시트 (Box Type)</h4>
          <p className="text-gray-700 leading-relaxed">사방이 벽으로 둘러싸인 상자 형태입니다. 겁이 많거나 안정감을 원하는 강아지에게 좋습니다. 벽면이 튼튼하여 급정거 시에도 강아지를 안전하게 보호해 줍니다. 주로 소형견에게 적합합니다.</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">② 쿠션형 카시트 (Cushion Type)</h4>
          <p className="text-gray-700 leading-relaxed">푹신한 침대와 같은 형태입니다. 장거리 이동 시 강아지가 편안하게 쉴 수 있으며, 평소 집에서 사용하는 방석과 비슷한 느낌을 주어 적응이 빠릅니다. 턱을 괴고 쉬는 것을 좋아하는 아이들에게 추천합니다.</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">③ 해먹형 카시트 (Hammock Type)</h4>
          <p className="text-gray-700 leading-relaxed">뒷좌석 전체를 덮는 형태입니다. 중대형견이나 활동량이 많은 강아지에게 적합합니다. 발밑 공간으로 떨어지는 것을 방지하고 뒷좌석 시트 전체를 보호할 수 있습니다.</p>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 카시트 구매 시 반드시 체크해야 할 5가지</h2>
      <p>디자인보다 중요한 것은 기능과 안전성입니다.</p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>안전 고리 유무:</strong> 카시트 내부에 강아지의 하네스와 연결할 수 있는 안전 고리가 있는지 반드시 확인하세요. 고리가 없으면 카시트 밖으로 튀어나갈 수 있습니다.</li>
        <li><strong>고정 방식의 견고함:</strong> 자동차 시트 헤드레스트나 등받이에 카시트가 얼마나 단단하게 고정되는지 확인해야 합니다. 흔들림이 없어야 안전합니다.</li>
        <li><strong>세탁 용이성:</strong> 강아지의 침, 털, 발자국 등으로 쉽게 오염될 수 있으므로 커버가 분리되어 세탁이 가능한 제품이 위생적입니다.</li>
        <li><strong>적정 사이즈:</strong> 강아지가 편안하게 눕거나 앉을 수 있는 크기여야 합니다. 너무 작으면 불편해하고, 너무 크면 안정감이 떨어집니다.</li>
        <li><strong>충전재의 질:</strong> 너무 딱딱하지 않으면서도 몸을 잘 지탱해 줄 수 있는 적당한 탄성력이 있는 제품이 좋습니다.</li>
      </ul>

      <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 my-10">
        <h3 className="text-xl font-black text-amber-800 mb-4">💡 카시트 적응을 위한 단계별 훈련법</h3>
        <ul className="space-y-4 text-amber-900 font-medium">
          <li><strong>1단계: 집에서 먼저 사용하기:</strong> 카시트를 집 거실에 두고 강아지가 그 안에서 간식을 먹거나 잠을 자게 하여 익숙한 장소로 인식하게 만드세요.</li>
          <li><strong>2단계: 정차된 차 안에서 적응하기:</strong> 시동을 걸지 않은 차 안의 카시트에 앉히고 칭찬과 간식을 줍니다.</li>
          <li><strong>3단계: 짧은 거리 이동하기:</strong> 집 근처를 5~10분 정도 가볍게 돌며 차의 움직임에 적응하게 합니다.</li>
          <li><strong>4단계: 목적지 보상:</strong> 카시트를 타고 도착한 곳이 애견 카페나 공원처럼 즐거운 장소라면 카시트에 대한 긍정적인 인식이 강화됩니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 결론: 안전한 동행을 위한 첫걸음</h2>
      <p>강아지 카시트는 단순히 차량용 액세서리가 아닙니다. 사고는 예고 없이 찾아오며, 그때 우리 아이를 지켜줄 수 있는 유일한 장치가 바로 카시트와 안전벨트입니다. 보호자의 무릎 위가 아닌, 전용 카시트에서 안전하게 드라이브를 즐기는 습관을 들여주세요.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 함께 가는 길, 더 안전하게</h3>
      <p>반려견과 함께하는 여행은 언제나 설레는 일입니다. 그 설렘이 끝까지 행복으로 남기 위해서는 철저한 안전 준비가 필요합니다. 오늘 알려드린 카시트 가이드가 여러분과 반려견의 안전한 드라이브에 큰 도움이 되기를 바랍니다. 똑똑한 집사는 모든 반려견이 어디든 안전하고 편안하게 보호자와 함께할 수 있는 세상을 꿈꿉니다!</p>
    </div>
  ),
  '25': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"아파트라는 제한된 공간, 이웃과의 소음 문제... 반려견을 맞이하기 전 가장 큰 고민거리입니다. 좁은 실내에서도 스트레스 없이 행복하게 지낼 수 있는 최고의 견종들을 추천해 드립니다."</p>
      
      <p>대한민국의 주거 형태 중 아파트가 차지하는 비중은 매우 높습니다. 아파트에서 강아지를 키울 때는 마당이 있는 단독주택과는 다른 기준이 필요합니다. 활동량이 너무 많아 좁은 공간에서 스트레스를 받지는 않는지, 헛짖음이 많아 이웃에게 피해를 주지는 않는지, 그리고 털 빠짐이 심해 실내 위생 관리가 어렵지는 않은지 등을 꼼꼼히 따져봐야 하죠. 오늘 '똑똑한 집사'에서는 <strong>아파트 생활에 최적화된 견종 추천 TOP 7과 공동주택 반려생활 에티켓</strong>을 2000자 이상의 상세 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 아파트용 견종 선택의 4가지 핵심 기준</h2>
      <p>단순히 '작고 귀여워서' 선택하기보다는 다음의 실질적인 기준들을 고려해야 합니다.</p>
      <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 space-y-4 my-6">
        <p><strong>● 낮은 짖음 빈도:</strong> 아파트 생활의 최대 적은 '층간소음'입니다. 경계심이 너무 강해 작은 소리에도 예민하게 짖는 견종은 피하는 것이 좋습니다.</p>
        <p><strong>● 적절한 에너지 레벨:</strong> 실내 공간이 좁기 때문에, 집 안에서 우다다를 심하게 하지 않고 차분하게 쉴 줄 아는 성향이 중요합니다.</p>
        <p><strong>● 털 빠짐 정도:</strong> 환기가 어려운 겨울철이나 비염 환자가 있는 가정이라면 털이 덜 빠지는 견종이 위생 관리에 유리합니다.</p>
        <p><strong>● 사회성:</strong> 엘리베이터나 복도에서 이웃 사람이나 다른 강아지를 만났을 때 공격성을 보이지 않는 온순한 성격이 필수입니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 아파트에서 키우기 좋은 추천 견종 TOP 7</h2>
      
      <div className="space-y-10">
        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">① 푸들 (Poodle)</h4>
          <p className="text-gray-700 leading-relaxed">푸들은 지능이 매우 높아 훈련이 쉽고, 무엇보다 털이 거의 빠지지 않는다는 독보적인 장점이 있습니다. 토이 푸들이나 미니어처 푸들은 크기도 작아 아파트 생활에 가장 완벽한 견종으로 꼽힙니다. 다만, 지능이 높은 만큼 분리불안이 생기기 쉬우므로 적절한 교육이 필요합니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">② 비숑 프리제 (Bichon Frise)</h4>
          <p className="text-gray-700 leading-relaxed">'솜사탕' 같은 외모의 비숑은 성격이 매우 밝고 친화력이 좋습니다. 헛짖음이 적고 독립적인 면도 있어 아파트에서 키우기 수월합니다. 푸들처럼 털 빠짐이 매우 적지만, 특유의 곱슬털을 유지하기 위해 주기적인 미용과 빗질이 필수적입니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">③ 말티즈 (Maltese)</h4>
          <p className="text-gray-700 leading-relaxed">한국에서 가장 사랑받는 견종 중 하나인 말티즈는 크기가 작고 활동량이 실내 생활에 적합합니다. 주인에 대한 애정이 깊고 영리합니다. 다만, 자기주장이 강하고 예민한 면이 있어 어릴 때부터 사회화 교육을 통해 불필요한 짖음을 예방해야 합니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">④ 시츄 (Shih Tzu)</h4>
          <p className="text-gray-700 leading-relaxed">'강아지계의 보살'이라 불릴 만큼 성격이 느긋하고 게으른 편입니다. 활동량이 많지 않아 좁은 아파트에서도 스트레스를 덜 받으며, 짖음도 매우 적은 편에 속합니다. 혼자 있는 시간도 비교적 잘 견디는 편이라 직장인 가정에도 추천됩니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">⑤ 요크셔 테리어 (Yorkshire Terrier)</h4>
          <p className="text-gray-700 leading-relaxed">작은 체구에도 불구하고 용감하고 활발합니다. 털이 비단결처럼 부드럽고 잘 빠지지 않아 실내에서 키우기 좋습니다. 주인과 함께 있는 것을 좋아하며, 아파트 내에서의 이동성도 매우 뛰어납니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">⑥ 카발리에 킹 찰스 스패니얼 (Cavalier King Charles Spaniel)</h4>
          <p className="text-gray-700 leading-relaxed">매우 온순하고 다정한 성격을 가진 견종입니다. 사람을 잘 따르고 짖음이 거의 없어 공동주택 생활에 아주 적합합니다. 다만, 외로움을 많이 타는 성격이므로 오랜 시간 집을 비우는 가정보다는 가족과 함께하는 시간이 많은 환경에 더 좋습니다.</p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="font-black text-xl text-gray-800 mb-2">⑦ 그레이하운드 (Greyhound - 이탈리안 그레이하운드 포함)</h4>
          <p className="text-gray-700 leading-relaxed">의외라고 생각하실 수 있지만, 그레이하운드는 실내에서 '카우치 포테이토(소파에 누워 지내는 사람)'라고 불릴 만큼 매우 조용하고 잠이 많습니다. 특히 소형인 이탈리안 그레이하운드는 털이 짧고 냄새가 적어 아파트 생활에 매우 인기가 높습니다.</p>
        </div>
      </div>

      <div className="bg-rose-50 p-8 rounded-[2.5rem] border border-rose-100 my-10">
        <h3 className="text-xl font-black text-rose-800 mb-4">⚠️ 아파트 반려생활, 이것만은 꼭 지켜주세요!</h3>
        <ul className="space-y-4 text-rose-900 font-medium">
          <li><strong>1. 산책은 선택이 아닌 필수:</strong> 실내 공간이 좁은 만큼, 매일 30분 이상의 산책을 통해 에너지를 발산시켜줘야 실내 사고(파괴 행위)와 헛짖음을 예방할 수 있습니다.</li>
          <li><strong>2. 엘리베이터 에티켓:</strong> 엘리베이터에서는 강아지를 안거나 짧게 리드줄을 잡아 이웃에게 위협이 되지 않도록 합니다. 강아지를 무서워하는 이웃이 있을 수 있음을 항상 기억해야 합니다.</li>
          <li><strong>3. 소음 방지 매트 설치:</strong> 강아지가 뛰어다니는 소리가 아래층에 소음이 될 수 있습니다. 주요 활동 구역에 매트를 깔아 층간소음을 방지하고 강아지의 관절 건강도 지켜주세요.</li>
          <li><strong>4. 분리불안 예방 교육:</strong> 보호자가 외출했을 때 하울링이나 짖음이 발생하지 않도록 어릴 때부터 독립심을 키워주는 교육이 필요합니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 결론: 견종보다 중요한 것은 보호자의 노력</h2>
      <p>아파트에서 키우기 좋은 견종이 따로 있긴 하지만, 어떤 견종이든 보호자의 교육과 케어에 따라 최고의 아파트 반려견이 될 수도, 문제견이 될 수도 있습니다. 우리 아이의 성향을 잘 파악하고, 공동체 생활을 위한 기본 매너를 가르치는 노력이 병행될 때 비로소 행복한 반려생활이 완성됩니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 좁은 공간을 채우는 넓은 사랑</h3>
      <p>아파트라는 공간적 제약이 반려견과의 행복을 가로막지는 못합니다. 적절한 견종 선택과 세심한 배려가 있다면, 아파트는 세상에서 가장 따뜻하고 안전한 우리 아이의 보금자리가 될 것입니다. 오늘 추천해 드린 견종 리스트가 여러분의 새로운 가족을 맞이하는 데 도움이 되기를 바랍니다. 똑똑한 집사는 모든 반려견과 반려인이 이웃과 더불어 행복하게 지내는 세상을 응원합니다!</p>
    </div>
  ),
  '24': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지 목욕, 깨끗하게 씻기는 것보다 중요한 것은 '피부 건강'과 '심리적 안정'입니다. 우리 아이가 목욕 시간을 즐겁게 기다리게 만드는 비법을 공개합니다."</p>
      
      <p>반려견과 함께 생활하다 보면 꼬질꼬질해진 털과 특유의 냄새 때문에 목욕을 시키게 됩니다. 하지만 강아지의 피부는 사람보다 훨씬 얇고 예민하다는 사실, 알고 계셨나요? 너무 잦은 목욕은 오히려 피부 보호막을 파괴해 피부병을 유발할 수 있고, 잘못된 방식은 아이에게 평생 가는 트라우마를 남길 수 있습니다. 오늘 '똑똑한 집사'에서는 <strong>강아지 피부 타입별 적정 목욕 주기와 스트레스를 최소화하는 올바른 목욕 단계</strong>를 2000자 이상의 상세 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 강아지 목욕, 얼마나 자주 해야 할까요?</h2>
      <p>목욕 주기는 견종, 털의 종류, 피부 상태, 그리고 생활 환경에 따라 달라집니다.</p>
      <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100 space-y-4 my-6">
        <p><strong>● 일반적인 건강한 강아지:</strong> 보통 2주~4주에 한 번이 적당합니다. 강아지의 피부 세포 재생 주기가 약 21일임을 고려할 때, 너무 잦은 목욕은 자연적인 유분을 제거해 건조증을 유발합니다.</p>
        <p><strong>● 실외 활동이 많은 경우:</strong> 산책 후 발과 배 부분만 부분 세정을 해주고, 전체 목욕은 주기를 유지하는 것이 좋습니다.</p>
        <p><strong>● 피부 질환이 있는 경우:</strong> 수의사의 처방에 따라 약용 샴푸를 사용하며, 보통 주 1~2회 등 지시된 주기를 엄격히 따라야 합니다.</p>
        <p><strong>● 이중모 견종 (포메라니안, 스피츠 등):</strong> 털이 빽빽해 통풍이 안 되므로 목욕보다는 잦은 빗질로 먼지를 제거해 주는 것이 피부 건강에 더 이롭습니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 목욕 전 반드시 챙겨야 할 준비물과 과정</h2>
      <p>목욕을 시작하기 전 완벽한 준비가 목욕 시간을 단축시키고 아이의 불안감을 줄여줍니다.</p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>철저한 빗질:</strong> 목욕 전 엉킨 털을 풀어주지 않으면 물에 젖은 후 더 단단하게 꼬여 피부를 압박합니다. 죽은 털을 미리 제거해야 샴푸가 피부까지 잘 전달됩니다.</li>
        <li><strong>미끄럼 방지 매트:</strong> 욕조나 바닥이 미끄러우면 강아지는 극도의 불안감을 느끼고 관절에도 무리가 갑니다. 반드시 고무 매트를 깔아주세요.</li>
        <li><strong>적정 온도 체크:</strong> 강아지의 체온은 사람보다 높지만, 피부는 뜨거운 물에 약합니다. 미지근한 온도(약 35~38도)가 가장 적당합니다.</li>
        <li><strong>전용 샴푸 선택:</strong> 사람의 피부는 약산성이지만 강아지는 중성에 가깝습니다. 반드시 강아지 전용 샴푸를 사용해야 합니다.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">3. 스트레스 없는 5단계 올바른 목욕법</h2>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">물 적시기 (뒤에서 앞으로)</h4>
            <p className="text-gray-600">샤워기를 몸에 직접 대기보다는 보호자의 손을 거쳐 물이 닿게 하세요. 엉덩이부터 시작해 등, 배, 다리 순으로 천천히 적셔줍니다. 머리 부분은 가장 마지막에, 눈과 귀에 물이 들어가지 않도록 주의하며 씻깁니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">샴푸질과 마사지</h4>
            <p className="text-gray-600">샴푸를 직접 피부에 짜기보다 거품망을 이용해 풍성한 거품을 내어 발라주세요. 손가락 끝(지문 부분)을 이용해 부드럽게 마사지하듯 문질러줍니다. 겨드랑이, 발가락 사이, 항문 주위를 꼼꼼히 닦아주세요.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">철저한 헹구기 (가장 중요!)</h4>
            <p className="text-gray-600">샴푸 잔여물이 남으면 가려움증과 습진의 원인이 됩니다. 맑은 물이 나올 때까지, 특히 털이 밀집된 부위를 손으로 헤치며 깨끗이 헹궈내야 합니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">타월 드라이</h4>
            <p className="text-gray-600">물기를 털어내도록 유도한 후, 큰 타월로 몸을 감싸 꾹꾹 누르듯 물기를 흡수시킵니다. 털을 너무 세게 비비면 털이 상하고 엉킬 수 있습니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">완벽한 건조</h4>
            <p className="text-gray-600">드라이어는 약한 바람과 낮은 온도로 설정하고, 피부 안쪽까지 바짝 말려야 합니다. 덜 마른 상태로 방치하면 곰팡이성 피부염이 생기기 쉽습니다. 특히 발가락 사이와 귀 안쪽을 신경 써주세요.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 my-10">
        <h3 className="text-xl font-black text-amber-800 mb-4">💡 목욕 공포증 극복을 위한 꿀팁</h3>
        <ul className="space-y-4 text-amber-900 font-medium">
          <li><strong>간식 보상:</strong> 목욕 중간중간, 그리고 끝난 직후에 가장 좋아하는 간식을 주어 '목욕=맛있는 것'이라는 인식을 심어주세요.</li>
          <li><strong>Lick Mat 활용:</strong> 벽에 붙이는 간식 매트에 피넛버터나 츄르를 발라주면 아이가 간식을 핥는 동안 집중력이 분산되어 수월하게 씻길 수 있습니다.</li>
          <li><strong>칭찬 세례:</strong> 부드럽고 높은 톤의 목소리로 계속해서 칭찬해 주어 아이를 안심시키세요.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 목욕 후 마무리 케어</h2>
      <p>목욕이 끝났다고 다가 아닙니다. 습해진 귀와 눈가를 정리해 줘야 합니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>귀 세정:</strong> 목욕 중 들어갔을지 모를 물기를 제거하고 귀 세정제로 가볍게 닦아줍니다.</li>
        <li><strong>보습제 사용:</strong> 피부가 건조한 아이라면 목욕 후 강아지 전용 미스트나 보습제를 뿌려 수분을 공급해 주세요.</li>
        <li><strong>발톱 정리:</strong> 목욕 후에는 발톱이 불어 있어 깎기가 훨씬 수월합니다.</li>
      </ul>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 행복한 목욕 시간이 건강한 피부를 만듭니다</h3>
      <p>강아지에게 목욕은 단순한 위생 관리를 넘어 보호자와의 깊은 교감 시간이 될 수 있습니다. 서두르지 말고 아이의 속도에 맞춰 천천히 적응시켜 주세요. 깨끗해진 털을 만지며 나누는 포옹은 반려생활의 큰 기쁨 중 하나입니다. 오늘 알려드린 올바른 목욕법으로 우리 아이의 피부 건강과 행복을 동시에 지켜주세요! 똑똑한 집사는 모든 반려견의 뽀송뽀송하고 건강한 일상을 응원합니다.</p>
    </div>
  ),
  '23': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"화려한 사료 포장지의 광고 문구에 현혹되지 마세요. 우리 아이의 건강을 결정짓는 진짜 정보는 뒷면의 작은 '성분표'에 숨어 있습니다."</p>
      
      <p>강아지에게 사료는 평생 먹는 주식입니다. 사람으로 치면 매일 먹는 밥과 반찬이 모두 들어있는 셈이죠. 하지만 시중에는 수많은 사료가 쏟아져 나오고, 저마다 '최고급', '홀리스틱', '그레인프리'라는 수식어를 붙여 광고합니다. 과연 이 수식어들이 정말 좋은 사료를 보장할까요? 오늘 '똑똑한 집사'에서는 <strong>사료 뒷면의 복잡한 성분표를 읽는 법과 좋은 사료를 고르기 위해 반드시 체크해야 할 5가지 핵심 포인트</strong>를 2000자 이상의 상세 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 원재료 명칭: 첫 번째 성분이 핵심입니다</h2>
      <p>사료의 원재료 목록은 함량이 높은 순서대로 기재됩니다. 따라서 가장 먼저 나오는 1~3번째 성분이 사료의 질을 결정합니다.</p>
      <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 space-y-4 my-6">
        <p><strong>● 구체적인 육류 명칭을 확인하세요:</strong> '육류', '가금류'처럼 모호한 표현보다는 '닭고기', '연어', '양고기'처럼 구체적인 이름이 적힌 것이 좋습니다.</p>
        <p><strong>● 생고기 vs 육분(Meal):</strong> 생고기는 수분이 포함된 무게라 첫 번째에 올 수 있지만, 실제 건조 후 단백질 함량은 낮을 수 있습니다. '닭고기분'처럼 건조된 육분은 수분을 뺀 순수 단백질 함량이 높아 효율적인 영양 공급원이 됩니다. 단, '육골분'이나 출처 불명의 '가금류 부산물'은 피하는 것이 좋습니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 등록 성분량(Guaranteed Analysis) 이해하기</h2>
      <p>단백질, 지방, 섬유, 회분 등의 비율을 나타냅니다. 아이의 연령과 활동량에 따라 적절한 비율이 다릅니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>조단백질:</strong> 성장기 강아지는 25% 이상, 성견은 18% 이상이 권장됩니다.</li>
        <li><strong>조지방:</strong> 에너지원이며 피부 건강에 중요합니다. 비만견은 10% 내외, 활동량이 많은 개는 15% 이상이 적당합니다.</li>
        <li><strong>조회분:</strong> 사료를 태웠을 때 남는 미네랄 성분입니다. 너무 높으면(10% 이상) 저급 원료를 썼을 가능성이 있습니다.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">3. AAFCO 기준과 '완전하고 균형 잡힌' 문구</h2>
      <p>미국사료관리협회(AAFCO)의 영양 기준을 충족했는지 확인하는 것은 기본 중의 기본입니다. 포장지에 <strong>"Complete and Balanced for all life stages"</strong>(전 연령대를 위한 완전하고 균형 잡힌 영양)라는 문구가 있는지 꼭 확인하세요. 이 문구가 없다면 주식이 아닌 간식용 사료일 수 있습니다.</p>

      <div className="bg-rose-50 p-8 rounded-[2.5rem] border border-rose-100 my-10">
        <h3 className="text-xl font-black text-rose-800 mb-4">🚫 피해야 할 '나쁜' 성분 체크리스트</h3>
        <p className="text-rose-900 leading-relaxed mb-4">
          다음 성분들이 포함되어 있다면 구매를 재고해 보시는 것이 좋습니다.
        </p>
        <ul className="space-y-4 text-rose-900 font-medium">
          <li><strong>1. 인공 방부제:</strong> BHA, BHT, 에톡시퀸(Ethoxyquin) 등은 발암 가능성이 제기된 화학 방부제입니다. 대신 토코페롤(비타민 E)이나 로즈마리 추출물을 사용한 제품을 고르세요.</li>
          <li><strong>2. 인공 색소 및 감미료:</strong> 강아지는 색을 잘 구별하지 못합니다. 사료의 알록달록한 색깔은 오직 사람의 눈을 즐겁게 하기 위한 화학 첨가물일 뿐입니다.</li>
          <li><strong>3. 불분명한 부산물:</strong> '가금류 부산물', '동물성 지방'처럼 어떤 동물의 것인지 알 수 없는 원료는 알레르기를 유발하고 질이 낮을 확률이 높습니다.</li>
          <li><strong>4. 과도한 충전제(Fillers):</strong> 옥수수 글루텐 밀, 밀가루 등이 주원료보다 많이 들어간 사료는 영양가 없이 배만 채우는 사료입니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 그레인프리(Grain-Free)의 오해와 진실</h2>
      <p>곡물 알레르기가 있는 아이에게는 그레인프리가 필수적입니다. 하지만 곡물 대신 감자, 고구마, 완두콩이 너무 많이 들어간 경우 탄수화물 함량이 지나치게 높을 수 있습니다. 최근에는 그레인프리 사료와 심장병(DCM) 간의 연관성에 대한 연구도 진행 중이므로, 무조건적인 유행보다는 아이의 체질에 맞는 선택이 중요합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">5. 제조사와 유통기한 확인</h2>
      <p>자체 공장을 운영하는지, 리콜 이력은 없는지 확인하는 것도 좋은 방법입니다. 또한 사료는 개봉 후 산패가 시작되므로, 유통기한이 넉넉하더라도 소포장 제품을 구매하여 신선하게 급여하는 것이 가장 좋습니다.</p>

      <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 my-6">
        <p className="text-indigo-800 font-bold">💡 똑똑한 집사의 한마디!</p>
        <p className="text-indigo-700 text-sm mt-2">비싼 사료가 무조건 좋은 사료는 아닙니다. 하지만 너무 저렴한 사료는 그만큼 원가를 낮추기 위해 저급 원료를 썼을 가능성이 큽니다. 사료 성분표를 읽는 5분 투자가 우리 아이의 10년 건강을 결정합니다.</p>
      </div>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 우리 아이에게 가장 맛있는 밥은 '건강한 밥'입니다</h3>
      <p>좋은 사료를 고르는 것은 보호자가 줄 수 있는 가장 큰 선물 중 하나입니다. 오늘 알려드린 체크리스트를 들고 지금 급여 중인 사료 뒷면을 한번 확인해 보세요. 처음에는 낯선 용어들이 어렵게 느껴질 수 있지만, 조금만 관심을 가지면 우리 아이에게 꼭 맞는 최고의 식단을 찾아줄 수 있습니다. 똑똑한 집사는 모든 반려견이 건강하고 맛있는 식사를 즐기는 세상을 꿈꿉니다!</p>
    </div>
  ),
  '22': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지 몸의 70% 이상은 수분입니다. 단 10%의 수분만 부족해도 생명이 위험할 수 있다는 사실, 알고 계셨나요? 우리 아이의 탈수 신호를 읽는 법을 알려드립니다."</p>
      
      <p>강아지에게 물은 단순한 갈증 해소 수단이 아닙니다. 체온 조절, 영양소 운반, 노폐물 배출, 관절 윤활 등 생존에 필수적인 모든 대사 과정에 관여하죠. 특히 스스로 갈증을 말로 표현할 수 없는 반려견의 경우, 보호자가 탈수의 징후를 미리 파악하는 것이 무엇보다 중요합니다. 오늘 '똑똑한 집사'에서는 <strong>강아지 탈수 증상을 확인하는 3가지 자가 진단법과 물을 잘 안 마시는 아이들을 위한 음수량 유도 꿀팁</strong>을 2000자 이상의 상세 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 우리 강아지, 지금 탈수인가요? (자가 진단법)</h2>
      <p>탈수가 의심될 때 집에서 즉시 확인할 수 있는 3가지 핵심 체크리스트입니다.</p>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">피부 탄력 테스트 (Skin Turgor Test)</h4>
            <p className="text-gray-600">강아지의 목 뒷덜미나 어깨 사이의 피부를 가볍게 잡아당겼다가 놓아보세요. 건강한 상태라면 즉시 제자리로 돌아가지만, 탈수 상태라면 피부가 천천히 내려가거나 텐트 모양으로 잠시 유지됩니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">잇몸 상태 확인 (Gum Check)</h4>
            <p className="text-gray-600">강아지의 입술을 들어 올려 잇몸을 만져보세요. 정상적인 잇몸은 촉촉하고 매끄럽지만, 탈수 시에는 끈적거리거나 마른 느낌이 납니다. 또한 손가락으로 잇몸을 눌렀다 뗐을 때, 하얗게 변한 부위가 원래의 분홍색으로 돌아오는 데 2초 이상 걸린다면 탈수를 의심해야 합니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">눈과 코의 상태</h4>
            <p className="text-gray-600">눈이 움푹 들어간 것처럼 보이거나(안구 함몰), 코가 평소보다 지나치게 건조하고 갈라져 있다면 심한 수분 부족 상태일 가능성이 높습니다.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 강아지 탈수의 주요 원인</h2>
      <p>단순히 물을 안 마시는 것 외에도 탈수를 유발하는 다양한 요인이 있습니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>과도한 운동 및 고온 노출:</strong> 여름철 산책이나 격렬한 놀이는 체온을 높여 수분 증발을 가속화합니다.</li>
        <li><strong>구토 및 설사:</strong> 질병으로 인해 체내 수분이 급격히 빠져나가는 가장 흔한 원인입니다.</li>
        <li><strong>질환적 요인:</strong> 신부전, 당뇨병, 쿠싱증후군 등은 소변량을 늘려 탈수를 유발할 수 있습니다.</li>
        <li><strong>노화:</strong> 노령견은 갈증 감각이 둔해져 스스로 물을 찾는 횟수가 줄어들 수 있습니다.</li>
      </ul>

      <div className="bg-cyan-50 p-8 rounded-[2.5rem] border border-cyan-100 my-10">
        <h3 className="text-xl font-black text-cyan-800 mb-4">🥤 물 안 마시는 아이를 위한 음수량 늘리기 꿀팁</h3>
        <p className="text-cyan-900 leading-relaxed mb-4">
          억지로 물을 먹일 수는 없지만, 물을 마시고 싶게 만드는 환경을 조성할 수는 있습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h5 className="font-bold text-cyan-700 mb-2">1. 물그릇 위치 다변화</h5>
            <p className="text-sm text-gray-600">아이가 자주 머무는 곳마다 물그릇을 배치하세요. 동선이 짧아지면 물을 마실 확률이 높아집니다.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h5 className="font-bold text-cyan-700 mb-2">2. 맛있는 물 만들기</h5>
            <p className="text-sm text-gray-600">염분이 없는 황태 국물이나 닭가슴살 삶은 물을 아주 조금 섞어주면 기호성이 폭발적으로 좋아집니다.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h5 className="font-bold text-cyan-700 mb-2">3. 습식 사료 활용</h5>
            <p className="text-sm text-gray-600">건사료 대신 습식 사료를 급여하거나, 건사료에 따뜻한 물을 부어 불려주면 자연스럽게 수분을 섭취하게 됩니다.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h5 className="font-bold text-cyan-700 mb-2">4. 얼음 과자 제공</h5>
            <p className="text-sm text-gray-600">여름철에는 얼음을 간식처럼 주거나 물그릇에 띄워주세요. 얼음을 핥아 먹는 과정에서 수분이 보충됩니다.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 적정 음수량은 얼마인가요?</h2>
      <p>일반적으로 강아지의 하루 적정 음수량은 <strong>체중 1kg당 약 50~60ml</strong>입니다. 예를 들어 5kg인 강아지라면 하루에 종이컵 1.5~2컵 정도의 물을 마셔야 합니다. 하지만 활동량, 사료의 종류(건식 vs 습식), 날씨에 따라 이 수치는 변동될 수 있으므로 우리 아이만의 평균치를 파악해 두는 것이 좋습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">4. 주의사항: 갑자기 물을 너무 많이 마신다면?</h2>
      <p>탈수도 문제지만, 평소보다 물을 지나치게 많이 마시는 <strong>'다갈'</strong> 증상 역시 위험 신호일 수 있습니다. 이는 신부전, 당뇨, 자궁축농증 등의 초기 증상일 수 있으므로 음수량이 갑자기 2배 이상 늘었다면 반드시 수의사의 진찰을 받아야 합니다.</p>

      <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100 my-6">
        <p className="text-rose-800 font-bold">🚨 이런 경우엔 즉시 병원으로!</p>
        <p className="text-rose-700 text-sm mt-2">아이가 기력이 없고, 잇몸이 하얗게 변했으며, 피부 탄력이 현저히 떨어졌다면 심각한 탈수 상태입니다. 집에서 물을 먹이려 하기보다 즉시 동물병원을 방문하여 수액 처치를 받아야 합니다.</p>
      </div>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 물 한 그릇의 사랑</h3>
      <p>강아지에게 깨끗하고 신선한 물을 제공하는 것은 가장 기본적인 케어이자 가장 큰 사랑의 표현입니다. 매일 물그릇을 씻어주고 신선한 물로 갈아주는 작은 습관이 우리 아이의 신장 건강과 활력을 결정짓습니다. 오늘 우리 아이의 잇몸을 한번 만져보며 수분 상태를 체크해 보시는 건 어떨까요? 똑똑한 집사는 모든 반려견의 촉촉하고 건강한 일상을 응원합니다!</p>
    </div>
  ),
  '21': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"강아지는 키우고 싶지만 집안 가득 날리는 털과 알레르기 때문에 망설여지시나요? 털 빠짐이 거의 없어 실내 생활에 최적화된 '천사 같은' 견종들을 소개합니다."</p>
      
      <p>반려견을 맞이할 때 가장 큰 현실적인 고민 중 하나가 바로 '털 빠짐'입니다. 특히 비염이나 강아지 털 알레르기가 있는 가족이 있거나, 청결에 민감한 분들에게는 견종 선택이 무엇보다 중요하죠. 사실 모든 강아지는 털이 빠지지만, 견종에 따라 그 정도는 천차만별입니다. 오늘 '똑똑한 집사'에서는 <strong>털 빠짐이 매우 적어 관리가 편하고 알레르기 유발 가능성도 낮은 견종 TOP 7</strong>을 2000자 이상의 상세한 정보와 함께 추천해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 푸들 (Poodle) - 털 안 빠지는 강아지의 대명사</h2>
      <p>푸들은 전 세계적으로 가장 인기 있는 견종 중 하나이며, 털 빠짐이 적은 견종을 꼽을 때 항상 1위를 차지합니다. 곱슬곱슬한 털이 빠진 털을 붙잡고 있어 바닥에 떨어지는 양이 거의 없습니다.</p>
      <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 space-y-4 my-6">
        <p><strong>● 특징:</strong> 지능 순위 2위로 매우 영리하며 훈련 습득력이 빠릅니다. 토이, 미니어처, 스탠다드 등 크기가 다양해 주거 환경에 맞춰 선택할 수 있습니다.</p>
        <p><strong>● 관리 팁:</strong> 털이 엉키기 쉬우므로 매일 빗질이 필요하며, 주기적인 미용(약 1~2개월 주기)이 필수입니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 비숑 프리제 (Bichon Frise) - 솜사탕 같은 매력</h2>
      <p>프랑스어로 '곱슬거리는 털'이라는 뜻을 가진 비숑은 이름처럼 풍성하고 곱슬거리는 털을 가졌지만, 의외로 털 빠짐은 매우 적습니다. 속털과 겉털이 촘촘하게 얽혀 있어 털 날림이 거의 없습니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>성격:</strong> 명랑하고 사교적이며 독립심도 강해 분리불안이 상대적으로 적은 편입니다.</li>
        <li><strong>주의사항:</strong> 특유의 '하이바 미용'을 유지하려면 전문적인 미용 관리가 필요하며 비용이 다소 발생할 수 있습니다.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">3. 말티즈 (Maltese) - 국민 강아지의 위엄</h2>
      <p>한국에서 가장 사랑받는 견종인 말티즈는 싱글 코트(단일모)를 가지고 있어 털 빠짐이 매우 적습니다. 털이 계속 자라는 성질을 가지고 있어 사람의 머리카락과 비슷하다고 생각하시면 됩니다.</p>
      <p>작은 체구와 애교 섞인 성격으로 아파트나 빌라 같은 공동주택에서 키우기 가장 적합한 견종 중 하나입니다. 다만, 눈가 관리를 소홀히 하면 눈물 자국이 생기기 쉬우니 주의해야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">4. 슈나우저 (Schnauzer) - 튼튼하고 털 안 빠지는 테리어</h2>
      <p>슈나우저는 거친 겉털과 부드러운 속털을 가진 이중모임에도 불구하고 털 빠짐이 거의 없는 신기한 견종입니다. 과거 농장에서 쥐를 잡던 습성이 있어 체력이 좋고 잔병치레가 적은 편입니다.</p>
      <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 my-6">
        <p className="font-bold text-gray-800 mb-2">💡 슈나우저 키우기 전 체크!</p>
        <p className="text-gray-600">활동량이 많아 충분한 산책이 필요하며, 고집이 있는 편이라 어릴 때부터 일관된 교육이 중요합니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">5. 시츄 (Shih Tzu) - 느긋한 성격의 털 안 빠지는 강아지</h2>
      <p>시츄는 긴 털을 가졌음에도 털 빠짐이 매우 적은 견종입니다. 성격이 온순하고 게으른 편이라 운동량이 적은 보호자나 어르신들이 키우기에 아주 좋습니다. 헛짖음도 적어 조용한 환경을 선호하시는 분들께 추천합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">6. 요크셔 테리어 (Yorkshire Terrier) - 움직이는 보석</h2>
      <p>비단결 같은 긴 털을 자랑하는 요크셔 테리어 역시 싱글 코트로 털 빠짐이 거의 없습니다. 털의 질감이 사람의 머리카락과 매우 유사하여 알레르기 반응을 일으키는 단백질 배출이 적은 것으로 알려져 있습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">7. 베들링턴 테리어 (Bedlington Terrier) - 양을 닮은 우아함</h2>
      <p>최근 인기가 높아진 베들링턴 테리어는 양처럼 곱슬거리는 털을 가졌으며 털 빠짐이 거의 없습니다. 테리어 종 특유의 활발함과 우아한 외모를 동시에 갖추고 있습니다.</p>

      <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 my-10">
        <h3 className="text-xl font-black text-amber-800 mb-4">⚠️ 털 안 빠지는 강아지, 이것만은 꼭 기억하세요!</h3>
        <p className="text-amber-900 leading-relaxed mb-4">
          털이 안 빠진다는 것은 <strong>'털이 계속 자란다'</strong>는 뜻이기도 합니다. 따라서 다음 관리법을 반드시 지켜주셔야 합니다.
        </p>
        <ul className="space-y-4 text-amber-900 font-medium">
          <li><strong>1. 매일 빗질:</strong> 빠지지 않은 털이 몸에 엉키면 피부병의 원인이 됩니다. 슬리커 브러시 등으로 꼼꼼히 빗어주세요.</li>
          <li><strong>2. 정기적인 미용:</strong> 털이 무한정 자라기 때문에 1~2개월에 한 번은 전체 미용이나 위생 미용이 필요합니다.</li>
          <li><strong>3. 피부 관리:</strong> 털이 촘촘한 견종은 통풍이 잘 안 될 수 있으므로 목욕 후 바짝 말려주는 것이 중요합니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">알레르기가 있다면? 추가 팁</h2>
      <p>강아지 알레르기는 사실 털 자체보다는 강아지의 침, 각질(비듬), 소변에 포함된 특정 단백질 때문에 발생합니다. 털이 안 빠지는 견종은 털에 묻은 각질이 집안에 흩어지는 것을 막아주기 때문에 알레르기 환자에게 도움이 되는 것입니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>입양 전 해당 견종과 30분 이상 시간을 보내며 반응을 체크해 보세요.</li>
        <li>공기청정기를 사용하고 침실에는 강아지 출입을 제한하는 것이 좋습니다.</li>
        <li>자주 목욕을 시켜 각질을 제거해 주는 것도 효과적입니다.</li>
      </ul>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 완벽한 견종보다 나에게 맞는 견종을</h3>
      <p>털 빠짐이 적은 견종들은 실내 청결 유지에 큰 장점이 있지만, 그만큼 보호자의 부지런한 빗질과 미용 관리가 뒤따라야 합니다. 또한 털 빠짐 외에도 활동량, 짖음 정도, 크기 등 고려해야 할 요소가 많습니다. 오늘 소개해 드린 TOP 7 견종 중 여러분의 라이프스타일과 가장 잘 맞는 단짝을 찾으시길 바랍니다. 똑똑한 집사는 여러분의 행복한 반려생활을 언제나 응원합니다!</p>
    </div>
  ),
  '20': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"우리 아이가 갑자기 물을 너무 많이 마시고 배가 뽈록하게 나오나요? 단순한 노화가 아닌 '침묵의 살인자' 쿠싱증후군일 수 있습니다."</p>
      
      <p>강아지 쿠싱증후군(부신피질기능항진증)은 노령견을 키우는 보호자님들에게 가장 두려운 질환 중 하나입니다. 호르몬의 불균형으로 인해 전신에 영향을 미치는 이 병은 초기 증상이 노화와 매우 흡사하여 발견이 늦어지는 경우가 많습니다. 하지만 적절한 관리와 치료만 병행된다면 아이의 삶의 질을 충분히 유지할 수 있는 질환이기도 합니다. 오늘 '똑똑한 집사'에서는 <strong>강아지 쿠싱증후군의 원인, 놓치기 쉬운 증상, 그리고 집에서 실천할 수 있는 관리법</strong>을 1500자 이상의 상세 가이드로 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 강아지 쿠싱증후군이란 무엇인가요?</h2>
      <p>쿠싱증후군은 신장 옆에 위치한 작은 기관인 '부신'에서 스트레스 호르몬인 <strong>코르티솔(Cortisol)</strong>이 과도하게 분비되는 질환입니다. 코르티솔은 신진대사 조절, 면역 반응, 혈당 조절 등 생존에 필수적인 역할을 하지만, 너무 많이 나오게 되면 몸의 균형이 무너지게 됩니다.</p>
      <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100 space-y-4 my-6">
        <p><strong>● 뇌하수체 의존성 (PDH):</strong> 전체 쿠싱의 약 80~85%를 차지하며, 뇌하수체에 생긴 종양으로 인해 부신을 계속 자극하는 경우입니다.</p>
        <p><strong>● 부신 의존성 (AT):</strong> 부신 자체에 종양이 생겨 호르몬을 직접 과다 분비하는 경우입니다.</p>
        <p><strong>● 의원성 쿠싱:</strong> 피부병이나 알레르기 치료를 위해 스테로이드제를 장기간 과다 복용했을 때 부작용으로 나타납니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">2. 절대 놓쳐선 안 될 쿠싱증후군 5대 증상</h2>
      <p>보통 7~10세 이상의 노령견에서 많이 발생하며, 다음 증상들이 복합적으로 나타난다면 즉시 검사를 받아야 합니다.</p>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">다갈, 다뇨 (PU/PD)</h4>
            <p className="text-gray-600">가장 대표적인 증상입니다. 물을 평소보다 훨씬 많이 마시고(다갈), 그만큼 소변을 자주 봅니다(다뇨). 밤중에 실수를 하지 않던 아이가 갑자기 집안에 실수를 하기 시작한다면 의심해 봐야 합니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">다식 (Polyphagia)</h4>
            <p className="text-gray-600">식욕이 비정상적으로 증가합니다. 사료를 먹고도 계속 먹을 것을 찾거나, 평소 먹지 않던 음식에도 강한 집착을 보입니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">올챙이 배 (Pot-bellied appearance)</h4>
            <p className="text-gray-600">팔다리는 가늘어지는데 배만 볼록하게 나옵니다. 이는 간이 비대해지고 복부 근력이 약해지면서 내부 장기가 아래로 처지기 때문입니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">피부 변화 및 탈모</h4>
            <p className="text-gray-600">피부가 종잇장처럼 얇아지고 혈관이 비치기도 합니다. 특히 몸통 양쪽에 대칭적으로 털이 빠지는 대칭성 탈모가 나타나며, 상처가 잘 아물지 않습니다.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">헐떡임 (Panting)</h4>
            <p className="text-gray-600">덥지 않은 환경에서도 혀를 내밀고 심하게 헐떡입니다. 이는 호흡 근육의 약화나 복부 팽만으로 인한 압박 때문일 수 있습니다.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 쿠싱증후군 확진을 위한 검사 과정</h2>
      <p>쿠싱은 일반 혈액검사만으로는 확진이 어렵습니다. 호르몬 수치를 정밀하게 측정하는 특수 검사가 필요합니다.</p>
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li><strong>LDDST (저용량 덱사메타손 억제 검사):</strong> 가장 신뢰도가 높은 검사로, 스테로이드를 주입한 후 호르몬 수치 변화를 8시간 동안 관찰합니다.</li>
        <li><strong>ACTH 자극 검사:</strong> 부신을 자극하여 코르티솔이 얼마나 과하게 분비되는지 확인합니다. 약 1~2시간이 소요됩니다.</li>
        <li><strong>복부 초음파:</strong> 부신의 크기와 모양을 확인하여 종양 여부를 판단합니다.</li>
      </ul>

      <div className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 my-10">
        <h3 className="text-xl font-black text-indigo-800 mb-4">🏠 집에서 실천하는 쿠싱견 케어 가이드</h3>
        <p className="text-indigo-900 leading-relaxed mb-4">
          병원 치료만큼 중요한 것이 가정 내 관리입니다. 호르몬 질환은 생활 습관이 치료의 절반입니다.
        </p>
        <ul className="space-y-4 text-indigo-900 font-medium">
          <li><strong>1. 깨끗한 물 무제한 공급:</strong> 소변을 많이 본다고 물을 제한하면 탈수로 위험해질 수 있습니다. 언제든 신선한 물을 마실 수 있게 해주세요.</li>
          <li><strong>2. 저지방, 고단백 식단:</strong> 간에 무리가 가기 쉬우므로 지방 함량은 낮추고 양질의 단백질을 공급해야 합니다. 수의사와 상담하여 처방 사료를 이용하는 것이 좋습니다.</li>
          <li><strong>3. 규칙적인 투약 시간 엄수:</strong> 호르몬제는 혈중 농도를 일정하게 유지하는 것이 핵심입니다. 매일 같은 시간에 약을 먹이는 것이 매우 중요합니다.</li>
          <li><strong>4. 스트레스 최소화:</strong> 코르티솔은 스트레스 호르몬입니다. 아이가 편안함을 느낄 수 있는 조용한 환경을 조성해 주세요.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 합병증을 주의하세요</h2>
      <p>쿠싱증후군 자체보다 무서운 것은 합병증입니다. 면역력이 떨어지기 때문에 다양한 질병에 노출됩니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>당뇨병:</strong> 코르티솔이 인슐린 작용을 방해하여 당뇨가 동반되는 경우가 많습니다.</li>
        <li><strong>방광염 및 요로감염:</strong> 소변이 묽어지고 면역력이 떨어져 세균 번식이 쉽습니다.</li>
        <li><strong>고혈압 및 혈전:</strong> 혈관 건강이 악화되어 폐혈전색전증 같은 응급 상황이 발생할 수 있습니다.</li>
      </ul>

      <h3 className="text-2xl font-black text-gray-800 mt-10">마치며: 보호자의 관찰이 아이의 시간을 늘립니다</h3>
      <p>쿠싱증후군은 완치라는 개념보다는 '평생 관리'하는 질환입니다. 하지만 보호자님이 아이의 증상을 세밀하게 관찰하고, 정기적인 검진과 투약을 소홀히 하지 않는다면 강아지는 남은 견생을 충분히 행복하게 보낼 수 있습니다. "나이가 들어서 그래"라고 치부하기엔 아이가 보내는 신호가 너무 간절할 수 있습니다. 오늘 우리 아이의 물 마시는 양과 배 모양을 다시 한번 체크해 보시는 건 어떨까요? 똑똑한 집사는 모든 노령견의 건강한 노후를 응원합니다!</p>
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
