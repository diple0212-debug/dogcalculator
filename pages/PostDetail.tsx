
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS_DATA } from './Posts.tsx';
import AdPlaceholder from '../components/AdPlaceholder.tsx';

const POST_CONTENTS: Record<string, React.ReactNode> = {
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
