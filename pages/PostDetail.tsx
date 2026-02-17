
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS_DATA } from './Posts.tsx';
import AdPlaceholder from '../components/AdPlaceholder.tsx';

const POST_CONTENTS: Record<string, React.ReactNode> = {
  '14': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"우리 강아지가 자꾸 귀를 털고 긁나요? 귀에서 퀘퀘한 냄새가 난다면 이미 염증이 시작된 것일 수 있습니다."</p>
      <p>강아지 보호자님들이 동물병원을 찾는 가장 흔한 이유 중 하나가 바로 **'외이염'**입니다. 강아지는 사람과 달리 귓구멍(외이도)이 'L'자 형태로 꺾여 있어 통풍이 어렵고 습기가 차기 쉬운 구조를 가지고 있습니다. 특히 귀가 덮여 있는 리트리버, 코커 스파니엘, 푸들 같은 견종들은 더욱 세심한 관리가 필요하죠. 오늘 '똑똑한 집사'에서는 강아지 귀 염증의 원인부터 전문가들이 추천하는 올바른 귀 청소법, 그리고 적절한 청소 주기까지 완벽하게 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 강아지 귀 염증(외이염)의 주요 원인</h2>
      <p>강아지 귀에 염증이 생기는 원인은 매우 다양합니다. 단순히 물이 들어가서 생기는 경우보다 복합적인 요인이 작용합니다.</p>
      <ul className="list-disc pl-5 space-y-4">
        <li><strong>세균 및 효모 감염:</strong> 습한 환경에서 말라세지아(효모균)나 포도상구균이 과도하게 번식하여 가려움증과 냄새를 유발합니다.</li>
        <li><strong>알레르기:</strong> 식이 알레르기나 환경 알레르기가 있는 강아지들은 귀 염증을 동반하는 경우가 80% 이상입니다.</li>
        <li><strong>귀 진드기:</strong> 산책 중 외부에서 옮겨온 진드기가 귓속에 서식하며 심한 가려움과 검은색 귀지를 만듭니다.</li>
        <li><strong>이물질:</strong> 산책 중 들어간 풀씨나 미용 후 남은 털이 자극을 주어 염증을 일으키기도 합니다.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">2. 우리 아이 귀 염증, 자가 진단법</h2>
      <p>초기에 발견하면 금방 치료할 수 있지만, 방치하면 고막 손상이나 내이염으로 번질 수 있습니다. 다음 증상을 확인해 보세요.</p>
      <div className="bg-amber-50 p-6 rounded-3xl border-l-4 border-amber-400 shadow-sm text-gray-700 my-6">
        <h4 className="font-bold text-amber-800 mb-2">🚩 귀 염증 의심 증상 5가지</h4>
        <ul className="text-sm m-0 space-y-2">
          <li>1. 귀를 바닥이나 가구에 대고 자주 비빈다.</li>
          <li>2. 머리를 한쪽으로 기울이거나 세차게 흔든다.</li>
          <li>3. 귀 안쪽 피부가 붉게 발적되어 있고 부어 있다.</li>
          <li>4. 귀 근처만 만져도 아파하며 깽깽 소리를 낸다.</li>
          <li>5. 짙은 갈색이나 노란색의 끈적한 귀지가 보이며 악취가 난다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">3. 수의사가 권장하는 올바른 귀 청소법</h2>
      <p>많은 보호자님이 면봉을 사용하시는데, 이는 **절대 금물**입니다. 면봉은 귀지를 더 깊숙이 밀어 넣고 예민한 귓속 피부에 상처를 낼 수 있습니다. 가장 안전한 방법은 다음과 같습니다.</p>
      <ol className="list-decimal pl-5 space-y-4 font-medium text-gray-700">
        <li><strong>전용 세정제 준비:</strong> 반드시 자극이 적은 강아지 전용 귀 세정제를 사용하세요.</li>
        <li><strong>세정제 주입:</strong> 강아지의 귀를 살짝 위로 당겨 귓구멍에 세정제를 충분히(3~5방울) 흘려 넣습니다.</li>
        <li><strong>마사지:</strong> 귀 뿌리 부분(만졌을 때 딱딱한 연골 부위)을 10~20초간 부드럽게 마사지합니다. 이때 '출렁출렁' 소리가 나야 귀지가 녹아 나옵니다.</li>
        <li><strong>털기 유도:</strong> 마사지 후 손을 떼면 강아지가 고개를 흔들어 세정제와 귀지를 밖으로 털어냅니다.</li>
        <li><strong>마무리:</strong> 밖으로 밀려 나온 이물질만 부드러운 솜이나 거즈로 가볍게 닦아줍니다. 귓속 깊은 곳은 닦지 마세요.</li>
      </ol>

      <h2 className="text-2xl font-black text-gray-800">4. 견종별 적절한 귀 청소 주기</h2>
      <p>청소 주기는 강아지의 귀 모양과 평소 상태에 따라 달라집니다. 너무 자주 하는 것도 자극이 될 수 있습니다.</p>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>귀가 서 있는 견종(시바, 진돗개 등):</strong> 통풍이 잘되므로 평소에는 2주~1달에 1번이면 충분합니다.</li>
        <li><strong>귀가 덮여 있는 견종(리트리버, 푸들 등):</strong> 습기가 잘 차므로 주 1~2회 정기적인 체크와 청소가 권장됩니다.</li>
        <li><strong>귓속 털이 많은 견종(말티즈, 슈나우저 등):</strong> 털이 공기 흐름을 막으므로 정기적으로 털을 정리해주고 주 1회 세정하는 것이 좋습니다.</li>
        <li><strong>목욕 직후:</strong> 목욕 중 들어간 물이 염증을 일으키므로 목욕 후에는 반드시 세정제로 귀 안을 관리하고 바짝 말려주어야 합니다.</li>
      </ul>

      <h2 className="text-2xl font-black text-gray-800">5. 보호자가 자주 하는 실수와 주의사항</h2>
      <p>첫째, **사람용 소독제(과산화수소 등) 사용**입니다. 이는 강아지 귓속의 유익균까지 모두 죽이고 강력한 화상을 입힐 수 있습니다. 둘째, **귀 털을 억지로 뽑는 행위**입니다. 전문적인 기술 없이 털을 뽑으면 모공에 염증이 생길 수 있으니 미용사나 수의사의 도움을 받으세요. 셋째, **염증이 심할 때 청소만 하는 것**입니다. 이미 진물이 나고 통증이 심하다면 청소가 아니라 병원 치료(항생제/항진균제)가 우선입니다.</p>

      <h3 className="text-2xl font-black text-gray-800 mt-10">결론: 예방이 가장 훌륭한 치료입니다</h3>
      <p>강아지 귀 건강의 핵심은 **'통풍'과 '건조'**입니다. 습한 장마철에는 귀를 자주 뒤집어 환기해주고, 고기를 주원료로 하는 간식을 줄여 알레르기 반응을 관리하는 것도 큰 도움이 됩니다. 오늘 알려드린 올바른 귀 청소법을 실천하여 우리 아이가 가려움 없는 편안한 일상을 보낼 수 있도록 도와주세요. 똑똑한 집사가 여러분의 행복한 반려 생활을 응원합니다!</p>
    </div>
  ),
  '13': (
    <div className="space-y-8">
      <p className="text-xl font-bold text-gray-800 leading-snug">"갑자기 구토를 한 우리 강아지, 병원에 바로 가야 할까요? 아니면 조금 지켜봐도 될까요?"</p>
      <p>강아지를 키우다 보면 한두 번은 꼭 마주하게 되는 상황이 바로 '구토'입니다. 강아지의 구토는 단순한 과식부터 생명을 위협하는 치명적인 질병까지 그 원인이 매우 다양합니다. 이때 보호자가 가장 먼저 확인해야 할 것이 바로 **'구토의 색깔'**입니다. 구토의 색깔은 아이의 몸속 어디에서 문제가 생겼는지를 알려주는 가장 솔직한 지표이기 때문입니다. 오늘 '똑똑한 집사'에서는 2026년 최신 수의학 임상 데이터를 바탕으로 **강아지 구토 색깔별 의심 질환과 대처법**을 완벽 정리해 드립니다.</p>

      <h2 className="text-2xl font-black text-gray-800">1. 노란색 구토 (Yellow Vomit)</h2>
      <p>가장 흔하게 볼 수 있는 색깔입니다. 이는 담즙이 섞여 나온 것으로, 주로 **'공복 토'**인 경우가 많습니다. 식사 사이의 간격이 너무 길어 위장이 비어 있을 때 담즙이 위를 자극하여 발생합니다. 
      <br/>- <strong>대처법:</strong> 식사 횟수를 늘려 공복 시간을 줄여주세요. 만약 노란 토를 반복하면서 식욕이 없다면 췌장염이나 담낭 문제를 의심해봐야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">2. 하얀색 거품 구토 (White/Foamy Vomit)</h2>
      <p>하얀 거품은 위액과 공기가 섞여 만들어진 것입니다. 이는 주로 역류나 가벼운 위염, 혹은 산책 시 풀이나 이물질을 먹어 위가 자극받았을 때 나타납니다. 
      <br/>- <strong>주의사항:</strong> 거품 토와 함께 켁켁거리는 소리를 낸다면 '기관지염'이나 '심장 질환'에 의한 기침일 가능성도 있으니 구분이 필요합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">3. 녹색 구토 (Green Vomit)</h2>
      <p>두 가지 가능성이 있습니다. 첫째는 산책 중 풀을 뜯어 먹었을 경우, 둘째는 십이지장에서 역류한 담즙이 많이 섞였을 경우입니다. 
      <br/>- <strong>위험 신호:</strong> 풀을 먹지 않았는데 진한 녹색 토를 한다면 췌장염이나 소장 폐쇄와 같은 심각한 상황일 수 있으므로 즉시 병원을 찾아야 합니다.</p>

      <div className="bg-red-50 p-6 rounded-3xl border-l-4 border-red-400 shadow-sm text-gray-700 my-6">
        <h4 className="font-bold text-red-800 mb-2">🚨 즉시 병원에 가야 하는 응급 색깔</h4>
        <ul className="text-sm m-0 space-y-2">
          <li>- <strong>분홍색/선홍색:</strong> 입안, 식도, 또는 위장에 상처가 나 피가 섞인 경우입니다.</li>
          <li>- <strong>검붉은색/커피색:</strong> 위장에서 발생한 출혈이 산화되어 나오는 것으로, 위궤양이나 심한 염증을 뜻합니다.</li>
          <li>- <strong>초콜릿색/암갈색:</strong> 소장 하부에서 역류한 것이거나 심각한 장폐색, 내부 장기 출혈의 신호입니다. 매우 위급합니다.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-gray-800">4. 투명한 액체 구토 (Clear/Liquid Vomit)</h2>
      <p>물을 너무 많이 마셨거나, 위액 자체가 역류한 경우입니다. 한두 번 정도는 괜찮지만, 반복된다면 위장 운동 기능 저하나 신장 질환의 초기 증상일 수 있습니다.</p>

      <h2 className="text-2xl font-black text-gray-800">5. 이물질이나 사료가 그대로 섞인 구토</h2>
      <p>밥을 먹자마자 바로 사료 형태 그대로 나오는 것은 '역류'에 가깝습니다. 너무 급하게 먹었거나 사료 알갱이가 너무 클 때 발생합니다. 하지만 먹은 지 시간이 꽤 지났는데도 사료가 소화되지 않고 나온다면 소화 효소 부족이나 위 무력증을 의심해야 합니다.</p>

      <h2 className="text-2xl font-black text-gray-800">6. 구토 후 집사의 행동 가이드</h2>
      <ol className="list-decimal pl-5 space-y-4">
        <li><strong>사진 촬영:</strong> 수의사가 가장 정확하게 판단할 수 있도록 구토물의 사진을 찍어두세요.</li>
        <li><strong>금식 및 금수:</strong> 구토 후 최소 6~12시간은 위장을 쉬게 해줘야 합니다. 물도 한꺼번에 많이 주지 말고 조금씩 나누어 주세요.</li>
        <li><strong>컨디션 체크:</strong> 구토 후 아이가 잘 노는지, 아니면 구석에 숨어 벌벌 떠는지 확인하세요. 열이 나거나 설사를 동반한다면 전염성 질환(파보 등)일 확률이 높습니다.</li>
      </ol>

      <h3 className="text-2xl font-black text-gray-800 mt-10">결론: "한 번은 실수, 두 번은 신호"</h3>
      <p>강아지는 사람보다 구토가 잦은 편이지만, 결코 가볍게 넘겨서는 안 됩니다. 특히 24시간 이내에 3회 이상 구토를 반복하거나 혈액이 섞인 경우, 기력이 급격히 떨어진 경우에는 '골든타임'을 놓치지 않는 것이 중요합니다. 똑똑한 집사의 건강 가이드를 참고하여 평소 아이의 구토 양상을 기록하고, 이상 징후 발생 시 빠르게 대처하여 우리 아이의 소중한 생명을 지켜주세요.</p>
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
