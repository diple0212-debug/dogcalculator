
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS_DATA } from './Posts.tsx';
import AdPlaceholder from '../components/AdPlaceholder.tsx';

const POST_CONTENTS: Record<string, React.ReactNode> = {
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
        <p className="text-sm m-0 leading-relaxed">칫솔을 잇몸 라인에 45도 각도로 대고 원을 그리듯 부드럽게 닦아주세요. 강아지는 이빨 안쪽보다 바깥쪽(볼 쪽)에 치석이 훨씬 많이 생깁니다. 입을 억지로 벌리지 말고 입술만 살짝 들어 올려 송곳니와 어금니 바깥쪽 면을 집중적으로 공략하세요.</p>
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
