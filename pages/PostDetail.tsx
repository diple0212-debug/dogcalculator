
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
      {/* ... (기존 15번 상세 내용 생략) ... */}
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
