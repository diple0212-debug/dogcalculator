
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS_DATA } from './Posts';
import AdPlaceholder from '../components/AdPlaceholder';

const POST_CONTENTS: Record<string, React.ReactNode> = {
  '1': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800">"우리 강아지가 나를 보고 정말 웃고 있는 걸까요?"</p>
      <p>강아지를 키우는 보호자라면 누구나 한 번쯤 경험해 보았을 순간입니다. 퇴근하고 돌아온 당신을 향해 혓바닥을 살짝 내밀고 입꼬리를 올린 채 꼬리를 흔드는 그 모습, 우리는 본능적으로 '아, 우리 아이가 기뻐서 웃고 있구나'라고 느낍니다. 하지만 수의학적, 과학적 관점에서 강아지의 미소는 사람의 그것과는 조금 다른 의미를 지닙니다.</p>
      
      <h2 className="text-2xl font-black text-gray-800">1. 진화론적 관점: 사람의 행동을 모방하다</h2>
      <p>강아지는 약 3만 년 전부터 인간과 함께 살며 진화해 왔습니다. 이 과정에서 강아지들은 인간의 감정을 읽고, 인간이 좋아하는 표정을 지을 때 더 많은 간식과 애정을 얻는다는 사실을 유전적으로 학습했습니다. 이를 '사회적 진화'라고 부릅니다. 실제로 늑대는 입꼬리를 올리는 행위를 거의 하지 않지만, 가축화된 강아지들은 주인의 긍정적인 반응을 이끌어내기 위해 인위적으로 안면 근육(대협골근)을 사용하는 법을 익혔습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 과학적 분석: '웃음'의 신체적 신호</h2>
      <p>강아지가 입을 살짝 벌리고 입꼬리를 뒤로 당기는 표정은 보통 근육이 이완된 상태에서 나타납니다. 이는 '플레이 보우(Play Bow)' 자세와 함께 나타나는 경우가 많은데, 과학자들은 이를 '긍정적 정서 상태의 신체 표현'으로 정의합니다. 이때 뇌에서는 행복 호르몬인 **옥시토신(Oxytocin)**이 분비되며, 이는 보호자의 뇌에서도 동시에 분비되어 서로 간의 유대감을 깊게 만듭니다.</p>

      <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-400 italic">
        "강아지의 미소는 단순히 입 모양만으로 판단해서는 안 됩니다. 이완된 눈매, 부드럽게 흔들리는 꼬리, 그리고 편안한 호흡이 동반되어야 진짜 행복한 상태입니다."
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 주의해야 할 '가짜 미소': 카밍 시그널</h2>
      <p>하지만 모든 입꼬리 올림이 웃음은 아닙니다. 강아지가 너무 긴장하거나 스트레스를 받을 때도 입꼬리를 뒤로 바짝 당기는 경우가 있습니다. 이를 '스트레스 소리'라고도 하는데, 이때는 눈이 크게 떠지거나 혀가 길게 나오지 않고 헐떡임이 심해집니다. 또한, 이빨을 드러내며 입꼬리를 올리는 것은 공격 전의 경고일 수 있으므로 전체적인 바디 랭귀지를 읽는 것이 중요합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">4. 우리 아이를 더 많이 웃게 하려면?</h2>
      <p>강아지의 미소는 '보상'과 직결됩니다. 아이가 편안한 미소를 지을 때 부드럽게 쓰다듬어 주거나 칭찬해 주면, 강아지는 그 긍정적인 유대감을 기억하고 더 자주 당신을 향해 웃어줄 것입니다. 오늘 저녁, 산책 후 편안하게 쉬고 있는 아이의 눈을 맞추며 부드럽게 이름을 불러주세요. 아이의 입꼬리가 살짝 올라가는 그 마법 같은 순간을 포착할 수 있을 것입니다.</p>
      
      <p className="text-gray-500 text-sm">참고 문헌: "The Genius of Dogs" by Brian Hare, 닥터 코렌의 강아지 심리학 연구 보고서</p>
    </div>
  ),
  '2': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800">"강아지 3마리 중 2마리가 치주 질환을 앓고 있습니다."</p>
      <p>충격적인 통계입니다. 강아지의 구강 관리는 단순히 입 냄새를 없애는 차원을 넘어 심장 질환, 신장 질환 등 전신 질환을 예방하는 가장 기초적인 건강 관리입니다. 하지만 양치질만 하려 하면 도망가고 으르렁거리는 아이들 때문에 포기하신 집사님들이 많으시죠? 오늘 '똑똑한 집사'가 3분 만에 끝내는 스트레스 제로 양치 비법을 공개합니다.</p>
      
      <h2 className="text-2xl font-black text-gray-800">1단계: 치약과 친구 되기 (1주일)</h2>
      <p>처음부터 칫솔을 들이대면 강아지는 이를 위협으로 간주합니다. 먼저 강아지가 좋아하는 맛(닭고기향, 소고기향 등)의 전용 치약을 손가락에 묻혀 핥아먹게 하세요. '치약 = 맛있는 간식'이라는 인식을 심어주는 것이 핵심입니다. 이 과정이 익숙해지면 치약을 묻힌 손가락으로 잇몸을 살살 문질러 줍니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2단계: 칫솔의 존재감 익히기 (3분법)</h2>
      <p>칫솔에 치약을 깊숙이 짜서 강아지가 칫솔모 사이의 치약을 핥게 하세요. 자연스럽게 칫솔모가 이빨에 닿는 느낌에 익숙해지게 하는 단계입니다. 이때 억지로 닦으려 하지 말고, 칫솔을 입 주변에 가져가는 것만으로도 보상을 해주세요.</p>

      <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400">
        <h4 className="font-bold text-blue-800 mb-2">💡 집사의 핵심 기술: 45도 각도</h4>
        <p className="text-sm m-0 leading-relaxed text-blue-900">칫솔을 잇몸 라인에 45도 각도로 대고 원을 그리듯 부드럽게 닦아주세요. 가장 치석이 잘 끼는 위쪽 송곳니와 어금니 바깥쪽부터 공략하는 것이 효율적입니다.</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3단계: 실전! 3분 양치 루틴</h2>
      <p>강아지의 입을 다 벌릴 필요는 없습니다. 입술만 살짝 들어 올려 바깥쪽 면 위주로 닦아도 70% 이상의 효과를 볼 수 있습니다. 안쪽 면은 강아지 스스로 혀를 움직이며 어느 정도 관리가 되기 때문입니다. 양치 후에는 반드시 '최고의 보상(놀이 또는 저알러지 간식)'을 통해 양치 타임이 즐거운 이벤트임을 각인시켜 주세요.</p>

      <h2 className="text-2xl font-black text-gray-800">양치가 도저히 안 되는 아이를 위한 대안</h2>
      <p>도저히 양치질이 불가능하다면 구강 청결제(물에 타는 형태), 바르는 젤 치약, 그리고 치석 제거용 기능성 껌을 병행하세요. 하지만 이는 보조 수단일 뿐, 일주일에 최소 3회 이상은 칫솔질을 해주는 것이 아이의 노후를 편안하게 만드는 유일한 길입니다.</p>
    </div>
  ),
  '3': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800">"내 손으로 직접 만들어 더 믿음직한 우리 아이 특식!"</p>
      <p>시판 간식의 방부제와 인공 첨가물이 걱정된다면, 이번 주말에는 집에서 직접 수제 간식을 만들어 보는 건 어떨까요? 에어프라이어와 간단한 식재료만 있으면 영양 만점 간식이 탄생합니다. 요즘 집사들 사이에서 가장 핫한 레시피 3가지를 엄선했습니다.</p>
      
      <h2 className="text-2xl font-black text-gray-800">Recipe 1. 닭가슴살 브로콜리 육포</h2>
      <p>저지방 고단백의 대명사! 비타민이 풍부한 브로콜리를 더해 맛과 영양을 모두 잡았습니다.</p>
      <ul className="list-disc pl-5">
        <li><strong>재료:</strong> 무항생제 닭가슴살 2덩이, 브로콜리 약간</li>
        <li><strong>만드는 법:</strong> 닭가슴살을 0.5cm 두께로 길게 썹니다. 브로콜리는 데친 후 잘게 다져 닭고기 위에 뿌립니다. 에어프라이어 70도에서 5~6시간 건조(또는 160도에서 앞뒤로 10분씩 조리)하면 완성!</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">Recipe 2. 노오븐 고구마 사과 빵</h2>
      <p>소화가 잘되고 달콤한 풍미가 일품인 영양 간식입니다.</p>
      <ul className="list-disc pl-5">
        <li><strong>재료:</strong> 찐 고구마 1개, 사과 1/4개, 계란 노른자 1개, 쌀가루 1스푼</li>
        <li><strong>만드는 법:</strong> 고구마를 으깨고 잘게 다진 사과, 계란 노른자, 쌀가루를 섞어 반죽합니다. 먹기 좋은 크기로 빚어 전자레인지에 2~3분만 돌리면 촉촉하고 달콤한 빵이 됩니다.</li>
      </ul>

      <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400 text-orange-900">
        <h4 className="font-bold mb-2">⚠️ 수제 간식 주의사항</h4>
        <p className="text-sm m-0">수제 간식은 방부제가 없어 유통기한이 짧습니다. 냉장 보관 시 3일, 냉동 보관 시 2주 이내에 급여하세요. 또한, 하루 전체 칼로리의 10%를 넘지 않도록 사료량 계산기로 확인하는 것 잊지 마세요!</p>
      </div>

      <h2 className="text-2xl font-black text-gray-800">Recipe 3. 락토프리 코티지 치즈</h2>
      <p>강아지는 우유의 유당을 분해하지 못합니다. 하지만 유당을 제거한 치즈는 훌륭한 칼슘원입니다.</p>
      <ul className="list-disc pl-5">
        <li><strong>재료:</strong> 락토프리 우유 1L, 식초 2스푼</li>
        <li><strong>만드는 법:</strong> 우유를 냄비에 넣고 기포가 올라올 정도로 끓입니다. 식초를 넣고 살살 저어주면 몽글몽글 덩어리가 생깁니다. 면보에 걸러 유청을 짜내면 고소한 코티지 치즈 완성!</li>
      </ul>

      <p>직접 만든 간식을 맛있게 먹는 아이의 모습을 보는 것만큼 집사에게 큰 행복은 없죠. 이번 주말, 사랑을 가득 담은 홈메이드 특식으로 아이에게 잊지 못할 미소를 선물하세요!</p>
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
